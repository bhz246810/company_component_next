import React, { JSXElementConstructor, ReactElement } from 'react';
import { Method } from '@company-component-next/utils/typings/axios';
import { AutoCompleteProps, SelectProps, TooltipProps } from 'antd';
import { OptionProps } from 'antd/lib/select';
export type RemoteSelectProps = {
  /** 选择下拉框还是自动输入框 */
  selectType?: 'select' | 'autoComplete';
  /** value */
  value?: string | number;
  /** style */
  style?: React.CSSProperties;
  /** 最外层style
   * @default props?.style
   */
  outDivstyle?: React.CSSProperties;
  /** disabled但是仍会请求接口 */
  disabledButRequest?: boolean;
  /** label显示tooltip */
  labelTooltip?: boolean;
  /** label tooltip设置 */
  labelTooltipOptions?: TooltipProps;
  /** placeholder */
  placeholder?: string;
  /** 搜索列表URL */
  searchUrl: string;
  /** 请求URL的Method */
  searchMethod?: Method;
  /** 其他 RequestOptions（Method、data|params已有，可覆盖）*/
  otherRequestOptions?: Record<string, any>;
  /** list中option value的值 */
  optionValueKey?: string;
  /** list中option lable的值 */
  optionLabelKey?: string;
  /** 自定义的Value */
  customValue?: (item: any) => string | number;
  /** 自定义的Label */
  customLabel?: (
    item: any,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | string;
  /** 接口返回自定义的List结构 */
  customList?: (item: any) => any[];
  /** 请求体返回list的路径，用`,`分割，如`data, d, Results` */
  listKey?: string;
  /** 请求体返回count的路径 */
  countKey?: string;
  /** debounce的间隔 */
  debounceTimeout?: number;
  /** 你自己封装的request */
  rq?: any;
  /** Params是否需要qs */
  isStringifyParams?: boolean;
  /** searchUrl的参数 */
  searchParams?: (value?: any) => object;
  /** optionProps, 参考OptionProps也可以自定义 */
  optionProps?: OptionProps | any;
  /** 动态的optionProps, 参考OptionProps也可以自定义 */
  dynamicOptionProps?: (item: any) => RemoteSelectProps['optionProps'];
  /** onChange, 参考SelectProps */
  onChange?: SelectProps<any>['onChange'];
  /** 增强的onClear, 第一个参数为 value => getList(searchParams(value)) */
  onClear?: (getList?: (value: any) => Promise<void> | undefined) => void;
  /** onChangeList, 为了不覆盖Form的onChange */
  onChangeList?: SelectProps<any>['onChange'][];
  /** getListAfter, 在请求拿到list后回调 */
  getListAfter?: (list: any[]) => void;
  /** 是否展示 input 的Tooltip */
  isShowInputTooltip?: boolean;
  /** 自定义input Tooltip的 title */
  getInputTooltipText?: (area: HTMLDivElement | null) => string;
  /** (!beta) 对于过慢的接口开启，队列请求，保存最后一次的请求 */
  isSaveQueue?: boolean;
  /**  getlist useEffect的 dep 数组 */
  getListDep?: any[];
  /** popup(div)的 props */
  popupProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
} & (Partial<SelectProps<any>> | Partial<AutoCompleteProps>);
/**
 * Form Grid.
 */
declare const RemoteSelect: React.FC<RemoteSelectProps>;
export default RemoteSelect;
