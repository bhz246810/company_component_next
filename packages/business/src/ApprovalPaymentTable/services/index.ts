/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-05-20 18:05:42
 * @LastEditors: michael_jier
 * @LastEditTime: 2022-05-23 18:31:26
 */
import { request } from '@dm-component-next/utils';
import qs from 'qs';

// 收入详情
export async function incomeInfo(params?: any): Promise<any> {
  return request('/project/income/info', {
    method: 'GET',
    params,
  });
}
