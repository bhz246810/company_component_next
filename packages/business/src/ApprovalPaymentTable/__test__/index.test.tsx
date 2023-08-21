import React, { useState } from 'react';
import { Button, message } from 'antd';
import { render, cleanup, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApprovalPaymentTable from '..';

const MOCK_DATA = {
  companyName: '',
  supplierName: '',
  amount: '',
  capitalAmount: '',
  bankCardId: '',
  bankNameSub: '',
  orderIds: '',
  message: '',
  paymentType: '0',
  currency: 'USD',
};
jest.mock('../services/index', () => ({
  incomeInfo: jest.fn(async () => ({
    data: {
      f: 1,
      m: '',
      d: MOCK_DATA,
    },
  })),
}));
// mock css modules
jest.mock('../index.less', () => ({
  edit: 'edit_[hash]',
  amount: 'amount_[hash]',
}));

// mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

beforeEach(() => {
  cleanup();
});

describe('IncomeCreateOrEditModal 付款审批单', () => {
  it('测试RemarkSlot', async () => {
    const MOCK_REMARK = 'TEST REMARK';
    const RemarkSlot = jest.fn(() => <>{MOCK_REMARK}</>);
    const table = render(<ApprovalPaymentTable RemarkSlot={RemarkSlot} />);
    const { queryByText } = table;
    expect(RemarkSlot).toBeCalled();
    await waitFor(() => {
      expect(queryByText(MOCK_REMARK)).not.toBeNull();
    });
  });
  it('测试isFillTime', async () => {
    (jest.spyOn(Date, 'now') as any).mockReturnValue(new Date('2022-01-01T12:33:37.000Z'));
    const table = render(<ApprovalPaymentTable isFillTime />);
    const { queryByText } = table;
    await waitFor(() => {
      expect(queryByText('2022年')).not.toBeNull();
      expect(queryByText('01月')).not.toBeNull();
      expect(queryByText('01日')).not.toBeNull();
    });
  });
  it('测试edit默认情况', async () => {
    const table = render(<ApprovalPaymentTable />);
    const { container } = table;
    const checkbox = container.getElementsByClassName('ant-checkbox');
    const editArea = container.querySelectorAll('[class*="edit"]');
    await waitFor(() => {
      expect(checkbox?.length).toBe(0);
      expect(editArea?.length).toBe(0);
      expect(container.getElementsByClassName('ant-input')?.length).toBe(0);
      expect(container.getElementsByClassName('ant-picker-input')?.length).toBe(0);
    });
  });
  it('测试edit传入 true，全部可以编辑', async () => {
    const table = render(<ApprovalPaymentTable edit id="1" />);
    const { container } = table;
    const checkbox = container.getElementsByClassName('ant-checkbox');
    const editArea = container.querySelectorAll('[class*="edit"]');
    await waitFor(() => {
      expect(checkbox?.length).toBe(10); // 10个可选的 checkbox
      expect(editArea?.length).toBe(5);
      expect(container.getElementsByClassName('ant-input')?.length).toBe(2);
      expect(container.getElementsByClassName('ant-picker-input')?.length).toBe(1);
    });
    await act(async () => {
      await userEvent.click(container.querySelectorAll('[class*="amount"]')?.[0]?.children?.[1]);
    });
    await waitFor(() => {
      expect(container.getElementsByClassName('ant-input')?.length).toBe(3);
    });
  });
  it('测试edit传入数组["depart", "nature", "date"]', async () => {
    const table = render(<ApprovalPaymentTable edit={['depart', 'nature', 'date']} />);
    const { container } = table;
    await act(async () => {
      await userEvent.click(container.querySelectorAll('[class*="amount"]')?.[0]?.children?.[1]);
    });
    await waitFor(() => {
      expect(container.getElementsByClassName('ant-input')?.length).toBe(2);
    });
  });
  it('测试edit传入数组["depart", "nature"]', async () => {
    const table = render(<ApprovalPaymentTable edit={['depart', 'nature']} id="1" />);
    const { container } = table;
    const checkbox = container.getElementsByClassName('ant-checkbox');
    const editArea = container.querySelectorAll('[class*="edit"]');
    await waitFor(() => {
      expect(checkbox?.length).toBe(10); // 10个可选的 checkbox
      expect(editArea?.length).toBe(4);
      expect(container.getElementsByClassName('ant-input')?.length).toBe(2);
      expect(container.getElementsByClassName('ant-picker-input')?.length).toBe(0);
    });
  });
  it('测试edit传入数组["depart"]', async () => {
    const table = render(<ApprovalPaymentTable edit={['depart']} id="1" />);
    const { container } = table;
    const checkbox = container.getElementsByClassName('ant-checkbox');
    const editArea = container.querySelectorAll('[class*="edit"]');
    await waitFor(() => {
      expect(checkbox?.length).toBe(10); // 10个可选的 checkbox
      expect(editArea?.length).toBe(3);
      expect(container.getElementsByClassName('ant-input')?.length).toBe(1);
      expect(container.getElementsByClassName('ant-picker-input')?.length).toBe(0);
    });
  });
  it('测试incomeInfo、id、division_code、resKey', async () => {
    const mockIncomeInfo = jest.fn(async () => ({
      f: 1,
      m: '',
      d: { ...MOCK_DATA, companyName: MOCK_COMPANY_NAME },
    }));
    const MOCK_ID = 123;
    const MOCK_DIVISION_CODE = 'xiaomai';
    const MOCK_COMPANY_NAME = '测试公司名称';
    const table = render(
      <ApprovalPaymentTable
        {...{
          resKey: 'd',
          incomeInfo: mockIncomeInfo,
          id: MOCK_ID,
          division_code: MOCK_DIVISION_CODE,
        }}
      />,
    );
    const { queryByText } = table;
    await waitFor(() => {
      expect(mockIncomeInfo).toBeCalled();
      expect(queryByText(MOCK_COMPANY_NAME)).not.toBeNull();
      expect((mockIncomeInfo.mock.calls[0] as any)[0]).toEqual({
        id: MOCK_ID,
        division_code: MOCK_DIVISION_CODE,
      });
    });
  });
  it('测试resKey错误', async () => {
    const mockIncomeInfo = jest.fn(async () => ({
      f: 1,
      m: '',
      x: { ...MOCK_DATA, companyName: MOCK_COMPANY_NAME },
    }));
    const MOCK_COMPANY_NAME = '测试公司名称';
    const table = render(
      <ApprovalPaymentTable
        {...{
          resKey: 'd',
          incomeInfo: mockIncomeInfo,
        }}
      />,
    );
    const { queryByText } = table;
    await waitFor(() => {
      expect(queryByText(MOCK_COMPANY_NAME)).toBeNull();
    });
  });
});
