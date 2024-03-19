import React from 'react';
import { Cascader, CascaderProps } from 'antd';

import cityAll from './data';

interface AreaSelectProps {
  value?: string[] | number[];
  onChange?: (value: React.ReactText[]) => void;
}

const AreaSelect = (props: AreaSelectProps & CascaderProps<any>) => {
  return (
    <Cascader
      style={{ width: '100%' }}
      placeholder="请选择达人地域"
      changeOnSelect
      {...props}
      options={cityAll}
    />
  );
};

export default AreaSelect;
