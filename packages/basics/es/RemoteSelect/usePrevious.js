/*
 * @Description: 获取上一次的dom更新的数据
 * @Version: 1.0.0
 * @Autor: Bert
 * @Date: 2021-12-09 20:45:08
 * @LastEditors: Bert
 * @LastEditTime: 2022-01-28 17:58:22
 */
import { useEffect, useRef } from 'react';
var usePrevious = function usePrevious(value) {
  var ref = useRef();
  useEffect(
    function () {
      ref.current = value;
    },
    [value],
  );
  return ref.current;
};
export default usePrevious;
