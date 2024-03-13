import { message, notification } from 'antd';
import debounce from 'lodash/debounce';
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
// import { extend, RequestMethod, ResponseError } from 'umi';
import { extend, RequestMethod, ResponseError } from 'umi-request';

import getGlobalVariable from './getGlobalVariable';

const codeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有进行认证（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const debouncedHandler = debounce(
  (response, request) => {
    const errortext = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    if (url.includes('/gmv-report/index')) {
      if (status === 401) {
        //登录态过期
        const location = response.headers.get('location');
        // 进行跳转
        if (location) window.location.replace(location);
      }
    } else {
      if (status === 401) {
        //登录态过期
        const location = response.headers.get('location');
        // 进行跳转
        if (location) window.location.replace(location);
      } else if (status >= 500 && url.includes('/data.goods.mall.searchService/query')) {
        message.error('该网址暂未收录，请联系Alan/Marico收录');
      } else if (status === 403) {
        notification.error({
          message: '您暂无该操作权限，如有需要，请联系相关负责人员，如有疑问请联系产品工作人员',
        });
      } else {
        if (!request.options?.data?.notification) {
          notification.error({
            message: ` ${status}: ${url}`,
            description: errortext,
          });
        }
        return response;
      }
    }
  },
  500,
  { maxWait: 1000 },
);
/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError): any => {
  const { response, request } = error;
  if (response && response.status) {
    debouncedHandler(response, request);
  }
  return response.json();
};

const requestInterceptors = (request: RequestMethod<false>, variable: keyof DCN_ENV_DECLARE) => {
  request?.interceptors?.request?.use?.((url: string, options: any) => {
    if (!/^(http:\/\/|https:\/\/|\/\/)([\w.]+\/?)\S*/.test(options.url) && !options.prefix) {
      options.url = getGlobalVariable()[variable] + options.url;
      url = getGlobalVariable()[variable] + url;
    }
    return {
      url,
      options,
    };
  });
};

const handleRequest = (request: RequestMethod<false>, key?: string) => {
  request.use(async (ctx, next) => {
    const { req } = ctx;
    const { url, options } = req;
    let hideMessageError = false;
    //如果接受的参数已经转成formdata,则转json对象格式判断有无hideMessageError
    console.log('options?.data instanceof FormData', options?.data instanceof FormData);
    if (options?.data instanceof FormData) {
      const objData: { [key: string | number]: any } = {};
      options?.data.forEach((v: any, k: string | number) => {
        objData[k] = v;
      });
      const formData = JSON.parse(JSON.stringify(objData));
      if (formData.hideMessageError) {
        hideMessageError = formData.hideMessageError;
      }
    }

    if (key === 'fin') {
      const formatData: any = {};
      for (let key in options?.data) {
        //排除手动设置为空字符串的情况，给后端一个明确的修改指示
        if (typeof options?.data[key] === 'string' && options?.data[key] !== '') {
          options?.data[key]?.trim() !== '' && (formatData[key] = options?.data[key]?.trim());
        } else {
          formatData[key] = options?.data[key];
        }
      }
      options.data = formatData;
    }
    if (options?.data?.hideMessageError) {
      hideMessageError = options?.data?.hideMessageError;
      delete options.data.hideMessageError;
    }
    // add prefix
    ctx.req.url = `${url}`;
    ctx.req.options = {
      ...options,
    };
    await next();
    const { res } = ctx;
    if (res.f <= 0) {
      if (res.f === -100) {
        notification.error({
          message: '当前用户还未做关联，暂无权限访问该应用',
          description: res.m,
        });
        // process.env.NODE_ENV === 'development' || process.env.API_ENV === 'dev'
        //   ? history.push('/login/login')
        //   : history.push('/exception/403');
      } else {
        // 错误，全局提示
        !hideMessageError && message.error(res.m);
      }
    } else {
      return res;
    }
  });
};

/**
 * 配置request请求时的默认参数
 * 营销后台 base_url 请求方法
 */
const request = extend({
  prefix: process.env.CPS_API_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});
handleRequest(request);

/**
 * 配置财务request请求时的默认参数
 * 配合修改请求时将传参的空字符串进行去除操作
 */
export const finRequest = extend({
  prefix: process.env.CPS_API_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});
handleRequest(finRequest, 'fin');

/**
 * 没有前缀 接口请求
 *
 *
 */
export const noPrefixReq = extend({
  prefix: process.env.BASE_API_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});

/**
 * 大数据接口请求
 * 传参数据格式 json
 */
export const bigDataReq = extend({
  prefix: process.env.BIG_DATA_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'json', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});

requestInterceptors(bigDataReq, 'API_CONFIG_BIG_DATA_URL');

/**
 * 大数据接口请求
 * 传参数据格式 form
 */
export const dataReq = extend({
  prefix: process.env.BIG_DATA_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});

requestInterceptors(dataReq, 'API_CONFIG_BIG_DATA_URL');

// 权限系统接口调用
export const authReq = extend({
  prefix: process.env.AUTH_API_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});

// 获取wss订单拉取id时调用
export const wssReq = extend({
  prefix: process.env.WSS_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
  headers: {
    'Content-Type': 'application/json',
  },
});

// 集团crm数据
export const crmReq = extend({
  prefix: process.env.DM_CRM_URL,
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});

// 无prefix 携带cookie
export const noneReq = extend({
  prefix: '',
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
  credentials: 'include', // 默认请求是否带上cookie
});

// 无prefix 不带cookie
export const nullReq = extend({
  prefix: '',
  errorHandler, // 默认错误处理
  timeout: 30000, // 超时时间30秒
  requestType: 'form', // 以表单形式提交参数
});
// 文件请求
const fileRequest = extend({
  errorHandler, // 默认错误处理,
  // prefix: getGlobalVariable().API_CONFIG_CPS_API_URL,
  requestType: 'json',
  credentials: 'include', // 默认请求是否带上cookie
});

requestInterceptors(fileRequest, 'API_CONFIG_CPS_API_URL');

export { fileRequest };

export default request;
