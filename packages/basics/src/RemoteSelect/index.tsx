import React, {
  forwardRef,
  isValidElement,
  JSXElementConstructor,
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { request as innerRequest, utils } from '@company-component-next/utils';
import { Method } from '@company-component-next/utils/typings/axios';
import {
  AutoComplete,
  AutoCompleteProps,
  Empty,
  Select,
  SelectProps,
  Spin,
  Tooltip,
  TooltipProps,
} from 'antd';
import { OptionProps } from 'antd/lib/select';
import debounce from 'lodash/debounce';
import isObject from 'lodash/isObject';
import qs from 'qs';
import ReactDOMServer from 'react-dom/server';

import usePrevious from './usePrevious';
const { getResKey } = utils;
const { Option } = Select;

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
  customLabel?: (item: any) => ReactElement<any, string | JSXElementConstructor<any>> | string;
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
  popupProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & (Partial<SelectProps<any>> | Partial<AutoCompleteProps>);

const components = {
  AutoComplete,
  Select,
};

const ReactElement2String = (elem: ReactElement<any, string | JSXElementConstructor<any>>) =>
  ReactDOMServer.renderToString(elem)?.replace(/<\/?.+?>|\s+/g, '') || '';

const getAllElementsText = (targets?: HTMLCollectionOf<Element>) => {
  let text = '';
  if (!targets) {
    return text;
  }
  for (const item of targets) {
    if (item?.textContent) {
      text += ',' + item?.textContent;
    }
  }
  return text.slice(text?.[0] === ',' ? 1 : 0);
};
/**
 * Form Grid.
 */
const RemoteSelect: React.FC<RemoteSelectProps> = forwardRef(
  (
    {
      selectType = 'select',
      searchMethod = 'GET',
      searchUrl,
      labelTooltip = true,
      optionValueKey = 'id',
      optionLabelKey = 'name',
      listKey = 'd',
      debounceTimeout = 300,
      style = {},
      outDivstyle,
      rq,
      isStringifyParams = false,
      customValue,
      customLabel,
      customList,
      onChange,
      disabled,
      disabledButRequest = false,
      onChangeList = [],
      optionProps = {},
      labelTooltipOptions = {},
      searchParams = () => ({}),
      getListAfter = () => {
        // default
      },
      dynamicOptionProps = () => {
        // default
      },
      onClear,
      isSaveQueue,
      popupProps,
      dropdownRender,
      otherRequestOptions,
      isShowInputTooltip = true,
      getInputTooltipText,
      getListDep = [],
      ...props
    },
    ref,
  ) => {
    const SET_IN_POPUP_DELAY = 100;
    const innerRef = useRef<any>();
    const areaRef = useRef<HTMLDivElement>(null);
    // 数据
    const [list, setList] = useState<Array<any>>([]);
    const [fetching, setFetching] = React.useState<boolean>(false);
    const [inPopup, setInPopup] = React.useState<boolean>(false);
    const [waitList, setWaitList] = React.useState<string[]>([]); // wait 队列
    const request = rq || innerRequest;
    const useDebounce = (fn: any, delay: number | undefined) => {
      return useCallback(debounce(fn, delay), []);
    };
    const debounceSetInPopup = useDebounce(setInPopup, SET_IN_POPUP_DELAY);
    // 上一次传入的searchParams
    const preParams = usePrevious({
      ...(typeof searchParams === 'function'
        ? Reflect.toString.call(searchParams()) === '[object Object]'
          ? searchParams()
          : {}
        : {}),
    });
    //接口返回的总页数
    // const [allPage, setAllPage] = useState<number>(0);
    /**
     * @description:进行列表查询
     * @param {any} params
     * @return {*}
     * @author: Bert
     */

    const debounceGetList = useCallback(
      useDebounce(async (params: any) => {
        if (!searchUrl) {
          return;
        }
        if (fetching && isSaveQueue) {
          setWaitList((pre) => [...pre, params]);
          return;
        }
        setFetching(true);
        const response = await request(searchUrl, {
          // TODO 分页
          method: searchMethod,
          ...(searchMethod === 'POST'
            ? isStringifyParams
              ? { data: qs.stringify(params) }
              : { data: params }
            : { params }),
          ...otherRequestOptions,
        }).catch((err: any) => {
          console.log(err);
          setFetching(false);
        });
        // setAllPage(response[countKey || 'allPage'])
        const list = customList ? customList(response) : getResKey(listKey, response) || [];
        setList(list);
        setFetching(false);
        getListAfter && getListAfter(list);
      }, debounceTimeout),
      [debounceTimeout, getListAfter],
    );

    useEffect(() => {
      if (waitList.length && !fetching && isSaveQueue) {
        if (waitList.slice(-1)?.[0]) {
          debounceGetList(waitList.slice(-1)[0]);
          setWaitList([]);
        }
        // setWaitList((pre) => pre.slice(1));
      }
    }, [fetching]);

    // // 初始化组件
    // useEffect(() => {
    //   !disabled && debounceGetList(searchParams());
    // }, [...Object.keys(searchParams()).map((item: string) => (searchParams() as any)[item]), disabled]);

    useEffect(() => {
      if (!isObject(searchParams()) || disabled) {
        return;
      }
      // 第一次请求list
      if (!preParams && searchParams()) {
        debounceGetList(searchParams());
      }
      // 检查searchParams是否变化
      if (
        Object.keys(searchParams()).some(
          (item: string) => (searchParams() as any)?.[item] !== (preParams as any)?.[item],
        )
      ) {
        debounceGetList(searchParams());
      }
    }, [searchParams, disabled, ...getListDep]);

    useImperativeHandle(ref, () => ({
      getList: () => {
        debounceGetList(searchParams());
      },
      innerRef,
    }));

    const DropdownRender: any = (menu: React.ComponentType) => {
      return (
        <>
          <div
            {...popupProps}
            onMouseEnter={(e) => {
              // debounceSetInPopup(true);
              setInPopup(true);
              popupProps?.onMouseEnter?.(e);
            }}
            onMouseLeave={(e) => {
              // debounceSetInPopup(false);
              setInPopup(false);
              popupProps?.onMouseLeave?.(e);
            }}
          >
            {menu}
          </div>
        </>
      );
    };
    const UnitSelect = components[selectType === 'autoComplete' ? 'AutoComplete' : 'Select'];

    const TitleRender = () => {
      const [tooltipTitle, setTooltipTitle] = React.useState<string>('');
      useEffect(
        useDebounce(() => {
          const text = getInputTooltipText
            ? getInputTooltipText(areaRef?.current)
            : getAllElementsText(
                areaRef?.current?.getElementsByClassName('ant-select-selection-item'),
              );
          setTooltipTitle(text || props?.value);
        }, 30),
        [props?.value],
      );
      return tooltipTitle?.length ? tooltipTitle : props.placeholder;
    };
    return (
      <div style={{ width: '100%', ...(outDivstyle || style) }} ref={areaRef}>
        <Tooltip
          title={
            props?.value === undefined || props?.value === null || !isShowInputTooltip
              ? ''
              : TitleRender
          }
          destroyTooltipOnHide
          placement="topLeft"
          {...labelTooltipOptions}
        >
          <UnitSelect
            ref={innerRef}
            style={{ width: '100%', ...style }}
            allowClear
            showSearch
            notFoundContent={
              fetching ? <Spin size="small" /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }
            dropdownRender={dropdownRender ? dropdownRender(DropdownRender) : DropdownRender}
            onSearch={(value: string) => {
              debounceGetList(searchParams ? searchParams(value) : {});
            }}
            filterOption={(
              input,
              option: any, //true}
            ) => {
              const valueResult =
                option.value
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toString().toLowerCase().trim()) >= 0;
              const children =
                labelTooltip && inPopup ? option.children?.props?.title : option.children;
              if (isValidElement(children)) {
                // customLabel使用时，判断是否是reactNode
                // replace去除混入多余的html标签字符串
                const result =
                  ReactElement2String(children)
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .indexOf(input.toString().toLowerCase().replace(/\s+/g, '')) ?? 0;
                // const result = option.children?.props?.children?.toString().toLowerCase().indexOf(input.toString().toLowerCase().trim()) ?? 0
                return result >= 0 || valueResult;
              }
              // 普通Label
              return (
                children
                  ?.toString?.()
                  ?.toLowerCase?.()
                  ?.indexOf?.(input.toString()?.toLowerCase?.()?.trim?.()) >= 0 || valueResult
              );
            }}
            onChange={(value: any, option: any) => {
              onChange && onChange(value, option);
              Array.isArray(onChangeList) &&
                onChangeList.length &&
                onChangeList.forEach((item: any) => {
                  item(value, option);
                });
            }}
            placeholder={props.placeholder || '请选择一项'}
            disabled={disabled || disabledButRequest}
            {...props}
            onClear={() => {
              debounceGetList(searchParams(''));
              onClear?.((value) => debounceGetList(searchParams(value)));
            }}
          >
            {Array.isArray(list) &&
              list.map((item: any) => {
                return (
                  <Option
                    {...optionProps}
                    {...dynamicOptionProps(item)}
                    value={customValue ? customValue(item) : getResKey(optionValueKey, item)}
                    key={getResKey(optionValueKey, item)}
                    list={item}
                  >
                    {((label) =>
                      labelTooltip && inPopup ? (
                        <Tooltip title={label} placement="topLeft" {...labelTooltipOptions}>
                          {label}
                        </Tooltip>
                      ) : (
                        label
                      ))(customLabel ? customLabel(item) : getResKey(optionLabelKey, item))}
                  </Option>
                );
              })}
          </UnitSelect>
        </Tooltip>
      </div>
    );
  },
);

export default RemoteSelect;
