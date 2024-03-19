import React from 'react';
export default function useModal(props: any): {
  renderModal: React.JSX.Element;
  open:
    | {
        visible: boolean;
      }
    | ((payload?: Partial<{}>) => void);
  close:
    | {
        visible: boolean;
      }
    | ((payload?: Partial<{}>) => void);
  state:
    | {
        visible: boolean;
      }
    | ((payload?: Partial<{}>) => void);
};
