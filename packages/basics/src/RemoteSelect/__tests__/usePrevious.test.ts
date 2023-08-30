/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: Bert
 * @Date: 2022-03-30 10:44:34
 * @LastEditors: Bert
 * @LastEditTime: 2022-03-30 12:06:27
 */
import { renderHook } from '@testing-library/react-hooks';
import usePrevious from '../usePrevious';

describe('usePrevious', () => {
  function getHook<T>(initialValue?: T) {
    return renderHook(({ val }) => usePrevious<T>(val as T), {
      initialProps: {
        val: initialValue || 0,
      },
    });
  }

  it('初始Undefined', () => {
    expect(getHook().result.current).toBeUndefined();
  });

  it('获取前一次的值', () => {
    const hook = getHook(0);

    expect(hook.result.current).toBeUndefined();
    hook.rerender({ val: 1 });
    expect(hook.result.current).toBe(0);

    hook.rerender({ val: 2 });
    expect(hook.result.current).toBe(1);

    hook.rerender({ val: 3 });
    expect(hook.result.current).toBe(2);

    hook.rerender({ val: 4 });
    expect(hook.result.current).toBe(3);

    hook.rerender({ val: 5 });
    expect(hook.result.current).toBe(4);
  });
});
