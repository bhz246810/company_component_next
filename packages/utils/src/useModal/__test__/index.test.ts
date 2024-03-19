import { renderHook, act } from '@testing-library/react-hooks';
import { render, cleanup } from '@testing-library/react';
import useModal from '..';
import React from 'react';

afterEach(cleanup);

describe('useModal', () => {
  it('测试open', () => {
    const { result } = renderHook(() => useModal({ children: () => 'TEST' }));
    act(() => {
      (result.current.open as () => void)();
    });
    const { queryByText } = render(result.current.renderModal);
    expect(queryByText('TEST')).not.toBeNull();
  });

  it('测试close', () => {
    const { result } = renderHook(() => useModal({ children: () => 'TEST' }));
    act(() => {
      (result.current.open as () => void)();
    });
    act(() => {
      (result.current.close as () => void)();
    });
    const { queryByText } = render(result.current.renderModal);
    expect(queryByText('TEST')).toBeNull();
  });
});
