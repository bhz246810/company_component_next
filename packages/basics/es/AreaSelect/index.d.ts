import React from 'react';
import { CascaderProps } from 'antd';
interface AreaSelectProps {
  value?: string[] | number[];
  onChange?: (value: React.ReactText[]) => void;
}
declare const AreaSelect: (
  props: AreaSelectProps & CascaderProps<any>,
) => React.JSX.Element;
export default AreaSelect;
