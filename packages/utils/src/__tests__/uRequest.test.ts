/* eslint-disable @typescript-eslint/no-empty-function */
/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-03-07 17:10:48
 * @LastEditors: michael_jier
 * @LastEditTime: 2022-03-08 14:33:19
 */
import '../uRequest';
import { message, notification } from 'antd';
import { extend } from 'umi-request';

let originalLog: any;
let originalWarn: any;
let originalError: any;

beforeAll(() => {
  // 可以换成 beforeEach
  // 保留原 console 函数引用
  originalLog = global.console.log;
  originalWarn = global.console.warn;
  originalError = global.console.error;
  global.console.log = jest.fn();
  global.console.warn = jest.fn();
  global.console.error = jest.fn();
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
});

afterAll(() => {
  // 可以换成 afterEach
  // 恢复原 console 函数引用
  global.console.log = originalLog;
  global.console.warn = originalWarn;
  global.console.error = originalError;
});

jest.mock('umi-request', () => {
  const mockExtend = {
    use: jest.fn(() => {}),
  };
  return {
    extend: jest.fn(() => mockExtend),
  };
});

describe('测试uRequest', () => {
  const mockCallback = (extend({}).use as jest.Mock).mock.calls[0][0];
  it('测试 f === 200', async () => {
    const ctx: any = {
      req: {
        url: '',
        option: '',
      },
    };
    mockCallback(ctx, () => {
      ctx.res = {
        f: 200,
      };
    }).then((res: any) => {
      expect(res).toEqual({
        f: 200,
      });
    });
  });

  it('测试 f === -100', async () => {
    const notificationErrorSpy = jest.spyOn(notification, 'error');
    const ctx: any = {
      req: {
        url: '',
        option: '',
      },
    };
    mockCallback(ctx, () => {
      ctx.res = {
        f: -100,
      };
    }).then(() => {
      expect(notificationErrorSpy).toHaveBeenCalled();
      notificationErrorSpy.mockClear();
    });
  });

  it('测试 f <= 0 错误提示', async () => {
    const messageErrorSpy = jest.spyOn(message, 'error');
    const ctx: any = {
      req: {
        url: '',
        option: '',
      },
    };
    mockCallback(ctx, () => {
      ctx.res = {
        f: 0,
      };
    }).then(() => {
      expect(messageErrorSpy).toHaveBeenCalled();
      messageErrorSpy.mockClear();
    });
  });

  it('测试 f <= 0 关闭错误提示', async () => {
    const messageErrorSpy = jest.spyOn(message, 'error');
    const ctx: any = {
      req: {
        url: '',
        options: {
          data: {
            hideMessageError: true,
          },
        },
      },
    };
    mockCallback(ctx, () => {
      ctx.res = {
        f: 0,
      };
    }).then(() => {
      expect(messageErrorSpy).not.toHaveBeenCalled();
      messageErrorSpy.mockClear();
    });
  });
});
