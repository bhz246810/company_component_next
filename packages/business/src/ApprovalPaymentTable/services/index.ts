/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: Bert
 * @Date: 2022-05-20 18:05:42
 * @LastEditors: Bert
 * @LastEditTime: 2022-05-23 18:31:26
 */
import { request } from '@company-component-next/utils';
import qs from 'qs';

// 收入详情
export async function incomeInfo(params?: any): Promise<any> {
  return request('/project/income/info', {
    method: 'GET',
    params,
  });
}
