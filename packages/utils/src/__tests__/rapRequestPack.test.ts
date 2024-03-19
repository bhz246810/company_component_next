import rapRequestPack from '../rapRequestPack';

interface IModels {
  'POST/backend/schedule/delete': {
    Res: { a: number };
    Req: { b: number };
  };
}

describe('utils rapRequestPack', () => {
  it('传递了具有请求方法的url', () => {
    const DATA = { b: 1 };
    const request = jest.fn();
    const rapRequest = rapRequestPack<keyof IModels, IModels>(request);
    rapRequest('POST/backend/schedule/delete', DATA);
    rapRequest('/backend/schedule/delete', DATA);

    expect(request.mock.calls[0]).toEqual([
      '/backend/schedule/delete',
      { method: 'POST', data: DATA },
    ]);

    expect(request.mock.calls[1]).toEqual([
      '/backend/schedule/delete',
      { method: 'GET', params: DATA },
    ]);
  });

  it('传递了具有请求方法的url, 有option', () => {
    const DATA = { b: 1 };
    const request = jest.fn();
    const rapRequest = rapRequestPack<keyof IModels, IModels>(request);
    rapRequest('POST/backend/schedule/delete', DATA, { method: 'GET' });
    rapRequest('/backend/schedule/delete', DATA);
    rapRequest('POST/backend/schedule/delete', DATA, {
      method: 'GET',
      data: DATA,
    });

    expect(request.mock.calls[0]).toEqual([
      '/backend/schedule/delete',
      { method: 'GET', params: DATA },
    ]);

    expect(request.mock.calls[1]).toEqual([
      '/backend/schedule/delete',
      { method: 'GET', params: DATA },
    ]);

    expect(request.mock.calls[2]).toEqual([
      '/backend/schedule/delete',
      { method: 'GET', params: DATA, data: DATA },
    ]);
  });
});
