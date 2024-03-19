import { RequestMethod } from 'umi-request';
/**
 * 配置request请求时的默认参数
 * 营销后台 base_url 请求方法
 */
declare const request: RequestMethod<false>;
/**
 * 配置财务request请求时的默认参数
 * 配合修改请求时将传参的空字符串进行去除操作
 */
export declare const finRequest: RequestMethod<false>;
/**
 * 没有前缀 接口请求
 *
 *
 */
export declare const noPrefixReq: RequestMethod<false>;
/**
 * 大数据接口请求
 * 传参数据格式 form
 */
export declare const dataReq: RequestMethod<false>;
export declare const authReq: RequestMethod<false>;
export declare const wssReq: RequestMethod<false>;
export declare const crmReq: RequestMethod<false>;
export declare const noneReq: RequestMethod<false>;
export declare const nullReq: RequestMethod<false>;
declare const fileRequest: RequestMethod<false>;
export { fileRequest };
export default request;
