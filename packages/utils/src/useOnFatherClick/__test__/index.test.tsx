import { render, cleanup, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useOnFatherClick from '..';
import React, { useRef } from 'react';

afterEach(cleanup);

//  辅助组件
const UseOnFatherClickComponent: React.FC<{
  callbacks: Record<'outside' | 'inside', (name?: any) => void>;
}> = ({ callbacks }) => {
  const testRef = useRef(null);
  useOnFatherClick(testRef, callbacks);
  return (
    <div>
      <b ref={testRef}></b>
      <p></p>
    </div>
  );
};
// 多个 ref
const MultiUseOnFatherClickComponent: React.FC<{
  callbacks: Record<'outside' | 'inside', (name?: any) => void>;
}> = ({ callbacks }) => {
  const testRef1 = useRef(null);
  const testRef2 = useRef(null);
  const allRef = useRef({ testRef1, testRef2 });
  useOnFatherClick(allRef, callbacks, 'multi');
  return (
    <div>
      <b ref={testRef1}></b>
      <b ref={testRef2}></b>
      <p></p>
    </div>
  );
};
describe('useOnFatherClick', () => {
  it('测试单个 ref 元素inside和outside回调 点击目标元素触发回调', async () => {
    const outside = jest.fn();
    const inside = jest.fn();
    const { baseElement } = render(
      <UseOnFatherClickComponent
        callbacks={{
          outside,
          inside,
        }}
      />,
    );
    const inner = baseElement.getElementsByTagName('b')?.[0];
    await act(async () => {
      await userEvent.click(inner);
    });
    await waitFor(() => {
      expect(inside).toHaveBeenCalled();
      expect(outside).not.toHaveBeenCalled();
    });
  });
  it('测试单个 ref 元素inside和outside回调 点击非目标元素', async () => {
    const outside = jest.fn();
    const inside = jest.fn();
    const { baseElement } = render(
      <UseOnFatherClickComponent
        callbacks={{
          outside,
          inside,
        }}
      />,
    );
    const out = baseElement.getElementsByTagName('p')?.[0];
    await act(async () => {
      await userEvent.click(out);
    });
    await waitFor(() => {
      expect(inside).not.toHaveBeenCalled();
      expect(outside).toHaveBeenCalled();
    });
  });
  it('测试多个 ref 元素inside和outside回调 点击目标元素1触发回调', async () => {
    const outside = jest.fn();
    const inside = jest.fn();
    const { baseElement } = render(
      <MultiUseOnFatherClickComponent
        callbacks={{
          outside,
          inside,
        }}
      />,
    );
    const inner = baseElement.getElementsByTagName('b')?.[0];
    await act(async () => {
      await userEvent.click(inner);
    });
    await waitFor(() => {
      expect(inside).toHaveBeenCalled();
      expect(inside.mock.calls[0][0]).toBe('testRef1');
      expect(outside).toHaveBeenCalled();
      expect(outside.mock.calls[0][0]).toBe('testRef2');
    });
  });
  it('测试多个 ref 元素inside和outside回调 点击目标元素2触发回调', async () => {
    const outside = jest.fn();
    const inside = jest.fn();
    const { baseElement } = render(
      <MultiUseOnFatherClickComponent
        callbacks={{
          outside,
          inside,
        }}
      />,
    );
    const inner = baseElement.getElementsByTagName('b')?.[1];
    await act(async () => {
      await userEvent.click(inner);
    });
    await waitFor(() => {
      expect(inside).toHaveBeenCalled();
      expect(inside.mock.calls[0][0]).toBe('testRef2');
      expect(outside).toHaveBeenCalled();
      expect(outside.mock.calls[0][0]).toBe('testRef1');
    });
  });
  it('测试多个 ref 元素inside和outside回调 点击非目标元素', async () => {
    const outside = jest.fn();
    const inside = jest.fn();
    const { baseElement } = render(
      <MultiUseOnFatherClickComponent
        callbacks={{
          outside,
          inside,
        }}
      />,
    );
    const out = baseElement.getElementsByTagName('p')?.[0];
    await act(async () => {
      await userEvent.click(out);
    });
    await waitFor(() => {
      expect(inside).not.toHaveBeenCalled();
      expect(outside).toHaveBeenCalled();
    });
  });
});
