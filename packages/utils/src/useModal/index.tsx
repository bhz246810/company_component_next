/*
 * @Author: your name
 * @Date: 2021-11-03 10:26:59
 * @LastEditTime: 2022-03-04 18:17:16
 * @LastEditors: Bert
 * @Description: In User Settings Edit
 * @FilePath: \company-component\src\utils\useModal\index.tsx
 */
import React, { useMemo } from 'react';
import { Modal } from 'antd';
import useDialog from '../useDialog';

export default function useModal(props: any) {
  const [state, open, close] = useDialog({});

  const renderModal = useMemo(() => {
    return (
      <Modal
        onOk={close}
        onCancel={close}
        okText="确定"
        cancelText="取消"
        {...props}
        {...state}
      >
        {props.children()}
      </Modal>
    );
  }, [props.children]);
  return {
    renderModal,
    open,
    close,
    state,
  };
}
