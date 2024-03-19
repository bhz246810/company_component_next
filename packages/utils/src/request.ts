/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import { AxiosInstance } from '../typings/axios';
import { message, notification } from 'antd';
import get from 'lodash/get';
import getGlobalVariable from './getGlobalVariable';

message.config({ maxCount: 1 });

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (response: any) => {
  const { data } = response;
  console.log('[response]', response);

  let showErrorNotice = true;

  // 外部在catch回调中调用err.hideErrorNotice去除拦截器统一错误信息显示
  const hideErrorNotice = () => {
    showErrorNotice = false;
  };

  setTimeout(() => {
    if (showErrorNotice) {
      if (data?.m) {
        message.error({
          content: data?.m,
        });
      } else if (response) {
        console.log('[response]', response);
      } else {
        message.error({
          content: '接口错误',
        });
      }
    }
  });

  return { ...response, hideErrorNotice };
};

// 创建axios实例
const instance: AxiosInstance = axios.create({
  // NOTE: 区分线上/线下接口地址
  // baseURL: getGlobalVariable().API_CONFIG_BASE_API,
  withCredentials: true,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
});

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */

instance.interceptors.request.use(
  (config: any) => {
    // console.log('[请求拦截器]', config);
    if (
      !/^(http:\/\/|https:\/\/|\/\/)([\w.]+\/?)\S*/.test(config.url) &&
      !config.baseURL
    ) {
      // 删除多余的`/`
      getGlobalVariable().API_CONFIG_BASE_API?.slice(-1) === '/' &&
        config.url.slice(0, 1) === '/' &&
        (config.url = config.url.slice(1));
      config.url = getGlobalVariable().API_CONFIG_BASE_API + config.url;
    }
    return config;
  },
  (error: any) => Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res: any) => {
    // console.log('[请求响应]', res);

    if (res.status >= 200 && res.status < 300) {
      // console.log('[test]', res.status);
      if (
        get(res.headers, ['content-type'], '') !== 'application/vnd.ms-excel'
      ) {
        if (res.data?.f !== 1) {
          return Promise.reject(res).catch((err) => {
            console.log('【reject】', err);
            return Promise.reject(errorHandle(err));
          });
        }
      } else {
        // data就是接口返回的文件流
        const { data } = res;
        if (data) {
          let fileName; // 默认 cors 暴露出 content-disposition 请求头，后端返回的filename中文乱码
          const attrs = res.headers['content-disposition']?.split(';'); // 获取文件名
          fileName = attrs
            ?.find((i: string) => i.includes('filename'))
            ?.replace('filename=', '');
          console.log('[fileName]', fileName);
          if (!fileName) fileName = '导出表格.csv';
          // 获取数据类型
          const type = res.headers['content-type']?.split(';')?.[0];
          const blob = new Blob([data], { type: type });
          const a = document.createElement('a');
          // 创建URL
          const blobUrl = window.URL.createObjectURL(blob);
          a.download = fileName;
          a.href = blobUrl;
          document.body.appendChild(a);
          // 下载文件
          a.click();
          // 释放内存
          URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }
      }
      return Promise.resolve(res);
    } else if (res.status === 403) {
      notification.error({
        key: 'message 403',
        message:
          '您暂无该操作权限，如有需要，请联系相关负责人员，如有疑问请联系产品工作人员',
      });
    } else {
      return Promise.reject(res);
    }
    // return res.status >= 200 && res.status < 300 ? Promise.resolve(res) : Promise.reject(res);
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    // console.log('error', response);
    if (response) {
      const { status } = response;
      if (status === 401) {
        if (getGlobalVariable()?.API_CONFIG_LOGIN_URL) {
          window.location.replace(
            getGlobalVariable().API_CONFIG_LOGIN_URL || '/login',
          );
          return;
        }

        //登录态过期
        if (response?.headers?.location) {
          window.location.replace(response?.headers?.location);
        }
      }
      const responseWithHideError = errorHandle(response);
      return Promise.reject(responseWithHideError);
    } else {
      console.log('[处理断网的情况]');
      return;
    }
  },
);
export default instance;
