import React from 'react';
type MultiRef = Record<string, React.MutableRefObject<any>>;
declare function useOnFatherClick(
  ref: React.MutableRefObject<any> | MultiRef,
  /** 点击内部事件，点击外部事件 */
  { outside, inside }: Record<'outside' | 'inside', (name?: any) => void>,
  /** 是否是单个区域点击 */
  type?: 'multi' | 'single',
): void;
export default useOnFatherClick;
