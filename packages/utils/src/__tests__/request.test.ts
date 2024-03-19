/* eslint-disable @typescript-eslint/no-empty-function */
/*
 * @Description: 头部注释: ...
 * @Version: 1.0.0
 * @Autor: michael_jier
 * @Date: 2022-03-07 11:38:32
 * @LastEditors: michael_jier
 * @LastEditTime: 2022-04-02 15:44:15
 */
import '../request';
import { message, notification } from 'antd';
import axios from 'axios';

let originalLog: any;
let originalWarn: any;
let originalError: any;
let originalCreateObjectURL: any;
let originalRevokeObjectURL: any;

beforeAll(() => {
  // 可以换成 beforeEach
  // 保留原 console 函数引用
  originalLog = global.console.log;
  originalWarn = global.console.warn;
  originalError = global.console.error;
  originalCreateObjectURL = global.URL.createObjectURL;
  originalRevokeObjectURL = global.URL.revokeObjectURL;

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
  global.URL.createObjectURL = originalCreateObjectURL;
  global.URL.revokeObjectURL = originalRevokeObjectURL;
});

jest.mock('axios', () => ({
  // create: jest.fn(function () {
  //   return this;
  // }),
  create: jest.fn().mockReturnThis(),
  interceptors: {
    request: {
      use: jest.fn(() => {}),
      eject: jest.fn(() => {}),
    },
    response: {
      use: jest.fn(() => {}),
      eject: jest.fn(() => {}),
    },
  },
}));

const fakeSuccess: {
  status: undefined | number;
  data: undefined | { [key: string]: any };
  headers: any;
} = {
  status: undefined,
  data: undefined,
  headers: undefined,
};

const fakeError: {
  response: {
    status: undefined | number;
    data: undefined | { [key: string]: any };
    headers: any;
  };
} = {
  response: {
    status: undefined,
    data: undefined,
    headers: undefined,
  },
};

// const mockRequestCallback = (axios.interceptors.request.use as jest.Mock).mock
//   .calls[0][0];
const mockResponseSuccessCallback = (
  axios.interceptors.response.use as jest.Mock
).mock.calls[0][0];
const mockResponseErrorCallback = (axios.interceptors.response.use as jest.Mock)
  .mock.calls[0][1];
const notificationErrorSpy = jest.spyOn(notification, 'error');
const messageErrorSpy = jest.spyOn(message, 'error');
jest.spyOn(global, 'setTimeout');

beforeEach(() => {
  notificationErrorSpy.mockClear();
  messageErrorSpy.mockClear();
});

describe('测试request', () => {
  document.body.appendChild = jest.fn();
  document.body.removeChild = jest.fn();

  it('200 正常 响应拦截器成功回调', async () => {
    fakeSuccess.status = 200;
    fakeSuccess.data = {
      f: 1,
      d: 'test',
    };
    mockResponseSuccessCallback(fakeSuccess)?.catch((data: any) => {
      expect(data).toEqual({
        status: 200,
        data: {
          f: 1,
          d: 'test',
        },
      });
    });
  });

  it('200 excel类型 响应拦截器成功回调', async () => {
    fakeSuccess.status = 200;
    fakeSuccess.headers = {
      'content-type': 'application/vnd.ms-excel',
    };
    const mLink = {
      href: '',
      click: jest.fn(),
      download: '',
    } as any;
    const createElementSpy = jest
      .spyOn(document, 'createElement')
      .mockReturnValueOnce(mLink);
    global.URL.createObjectURL = () => (mLink.href = 'a mock url');
    mockResponseSuccessCallback(fakeSuccess)
      ?.then(() => {
        expect(createElementSpy).toBeCalledWith('a');
        expect(mLink.download).toBe('导出表格.csv');
        expect(mLink.href).not.toBeUndefined();
        expect(document.body.appendChild).toBeCalledWith(mLink);
        expect(mLink.click).toBeCalled();
        expect(document.body.removeChild).toBeCalledWith(mLink);
      })
      ?.catch(() => {});
  });

  it('200 data.f !==1 响应拦截器成功回调', async () => {
    fakeSuccess.status = 200;
    fakeSuccess.data = {
      f: 0,
    };
    mockResponseSuccessCallback(fakeSuccess)?.catch(() => {
      jest.advanceTimersByTime(100);
      expect(messageErrorSpy).toHaveBeenCalled();
    });
  });

  it('403 响应拦截器成功回调', async () => {
    fakeSuccess.status = 403;
    mockResponseSuccessCallback(fakeSuccess)?.catch(() => {});
    expect(notificationErrorSpy).toHaveBeenCalled();
  });

  it('响应拦截器失败回调', async () => {
    fakeError.response.status = 401;
    fakeError.response.data = {
      m: '测试',
    };
    mockResponseErrorCallback(fakeSuccess)?.catch(() => {
      jest.advanceTimersByTime(100);
      expect(messageErrorSpy).toHaveBeenCalled();
    });
  });
});
