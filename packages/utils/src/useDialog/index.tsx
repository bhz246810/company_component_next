import { useReducer, useCallback, Reducer } from 'react';

type ReducerState<T> = { visible: boolean } & T;

interface ReducerAction<T> {
  type: 'open' | 'close';
  payload?: Partial<T>;
}

function reducer<T>(state: ReducerState<T>, action: ReducerAction<T>) {
  const { type, payload } = action;
  switch (type) {
    case 'open':
      return { ...state, visible: true, ...payload };
    case 'close':
      return { ...state, visible: false, ...payload };
    default:
      throw new Error();
  }
}

export default function useDialog<T extends object>(initial: T) {
  const [state, dispatch] = useReducer<
    Reducer<ReducerState<T>, ReducerAction<T>>
  >(reducer, {
    visible: false,
    ...initial,
  });
  const close = useCallback(
    (payload: Partial<T> = {}) => {
      dispatch({ type: 'close', payload });
    },
    [dispatch],
  );
  // 调用open的时间直接赋值其他参数过去.
  const open = useCallback(
    (payload: Partial<T> = {}) => {
      dispatch({ type: 'open', payload });
    },
    [dispatch],
  );
  return [state, open, close];
}
