import ChainArrayKey from '../chainArrayKey';

describe('测试ChainArrayKey方法', () => {
  it('getValue', () => {
    const testArr = [
      { key: '1', a: 1 },
      { key: '2', a: 2 },
    ];
    const test = new ChainArrayKey(testArr);
    expect(test.getValue()).toEqual(testArr);
    expect(test.getValue()).not.toBe(testArr);
  });

  it('remove', () => {
    const testArr = [
      { key: '1', a: 1 },
      { key: '2', a: 2 },
    ];
    const test = new ChainArrayKey(testArr);
    expect(test.remove('1').getValue()).toEqual([{ key: '2', a: 2 }]);
    expect(test.remove('1').getValue()).toEqual([{ key: '2', a: 2 }]);
  });

  it('add', () => {
    const testArr = [
      { key: '1', a: 1 },
      { key: '2', a: 2 },
    ];
    const test = new ChainArrayKey(testArr);
    expect(test.add({ key: '3', a: 3 }).getValue()).toEqual([
      { key: '3', a: 3 },
      ...testArr,
    ]);
    expect(test.add({ key: '4', a: 4 }, '2', -1).getValue()).toEqual([
      { key: '3', a: 3 },
      ...testArr,
      { key: '4', a: 4 },
    ]);
    test.remove('4');
    expect(test.add({ key: '4', a: 4 }, '2', 1).getValue()).toEqual([
      { key: '3', a: 3 },
      { key: '1', a: 1 },
      { key: '4', a: 4 },
      { key: '2', a: 2 },
    ]);
    expect(test.add({ key: '5', a: 5 }, '2', -1).getValue()).toEqual([
      { key: '3', a: 3 },
      { key: '1', a: 1 },
      { key: '4', a: 4 },
      { key: '2', a: 2 },
      { key: '5', a: 5 },
    ]);
  });

  it('edit', () => {
    const testArr = [
      { key: '1', a: 1 },
      { key: '2', a: 2 },
    ];
    const test = new ChainArrayKey(testArr);
    expect(
      test
        .edit('1', (item) => ({
          ...item,
          key: '1',
          b: 1,
        }))
        .getValue(),
    ).toEqual([
      { key: '1', a: 1, b: 1 },
      { key: '2', a: 2 },
    ]);

    expect(
      test
        .edit('1', (item) => ({
          ...item,
          key: '1',
          b: 1,
        }))
        .getValue(),
    ).toEqual([
      { key: '1', a: 1, b: 1 },
      { key: '2', a: 2 },
    ]);
  });

  it('sort', () => {
    const testArr = [
      { key: '1', a: 1 },
      { key: '2', a: 2 },
      { key: '3', a: 3 },
    ];
    const test = new ChainArrayKey(testArr);
    expect(test.sort('1', '3', 1).getValue()).toEqual([
      { key: '2', a: 2 },
      { key: '1', a: 1 },
      { key: '3', a: 3 },
    ]);
    expect(test.sort('1', '2', 1).getValue()).toEqual([
      { key: '1', a: 1 },
      { key: '2', a: 2 },
      { key: '3', a: 3 },
    ]);
    expect(test.sort('1', '3', -1).getValue()).toEqual([
      { key: '2', a: 2 },
      { key: '3', a: 3 },
      { key: '1', a: 1 },
    ]);
  });
});
