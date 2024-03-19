import { renderHook, act } from '@testing-library/react-hooks';
import useDialog from '..';

describe('useDialog', () => {
  it('测试open', () => {
    const initState = { extra: 'test' };
    const { result } = renderHook(() => useDialog(initState));
    act(() => {
      (result.current[1] as () => void)();
    });
    expect(result.current[0]).toEqual({
      visible: true,
      extra: 'test',
    });
  });

  it('测试close', () => {
    const initState = { extra: 'test', visible: true };
    const { result } = renderHook(() => useDialog(initState));
    act(() => {
      (result.current[2] as () => void)();
    });
    expect(result.current[0]).toEqual({
      visible: false,
      extra: 'test',
    });
  });
});
