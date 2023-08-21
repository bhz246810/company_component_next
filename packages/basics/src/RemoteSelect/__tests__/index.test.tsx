/*
 * @Description: RemoteSelect 单测
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-03-30 12:07:32
 * @LastEditors: michael_jier
 * @LastEditTime: 2022-04-02 14:09:41
 */
import { Input } from 'antd';
import React, { SyntheticEvent } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import RemoteSelect, { RemoteSelectProps } from '..';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { request } from '@dm-component-next/utils';

const DEBOUNCED_TIME = 300;
afterEach(() => {
  jest.useRealTimers();
  cleanup();
});
describe('RemoteSelect', () => {
  jest.useFakeTimers();

  const setup = (params?: Partial<RemoteSelectProps>) => {
    const testRq = jest.fn();
    const rq = new Promise((resolve) => {
      testRq();
      resolve(1);
    });
    const utils = render(<RemoteSelect searchUrl="" rq={rq as any} {...params} />);
    const { container } = utils;
    const select = container.getElementsByClassName('ant-select-selector');
    const input = container.querySelector('input');
    return {
      testRq,
      select,
      input,
      ...utils,
    };
  };

  it('是否渲染', () => {
    const { select } = setup();
    expect(select.length).toBe(1);
  });
  it('disabledButRequest', async () => {
    const { testRq } = setup({ disabledButRequest: true });
    await waitFor(async () => {
      expect(testRq).toHaveBeenCalledTimes(1);
    });
  });
  it('selectType === select', () => {
    const { select } = setup({ selectType: 'select' });
    expect(select).not.toBeUndefined;
  });
  it('selectType === autoComplete', () => {
    const { select } = setup({ selectType: 'autoComplete' });
    expect(select).toBeUndefined;
  });
  it('labelTooltip', async () => {
    const { testRq } = setup({ disabledButRequest: true });
    await waitFor(async () => {
      expect(testRq).toHaveBeenCalledTimes(1);
    });
  });
  it('相同searchParams不触发', async () => {
    jest.mock('lodash/debounce', () => (fn: () => any) => fn);
    const { input, testRq, select } = setup();
    fireEvent.change(input!, {
      target: { value: '1' },
    });
    fireEvent.change(input!, {
      target: { value: '2' },
    });
    await waitFor(async () => {
      expect(testRq).toHaveBeenCalledTimes(1);
    });
    // jest.advanceTimersByTime(DEBOUNCED_TIME)
    // fireEvent.change(input!, {
    //   target: { value: '2' }
    // });
    // userEvent.type(input!, '2')

    // jest.advanceTimersByTime(DEBOUNCED_TIME)
    // userEvent.type(input!, '2')
    // await waitFor(async () => {
    //   expect(testRq).toHaveBeenCalledTimes(2);
    // })
    // expect(input!.value).toBe(2);
    //   await waitFor(async () => {
    //     expect(testRq).toHaveBeenCalledTimes(2);
    //  })
  });
});
