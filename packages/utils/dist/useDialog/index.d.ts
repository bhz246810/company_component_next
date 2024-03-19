type ReducerState<T> = {
  visible: boolean;
} & T;
export default function useDialog<T extends object>(
  initial: T,
): (ReducerState<T> | ((payload?: Partial<T>) => void))[];
export {};
