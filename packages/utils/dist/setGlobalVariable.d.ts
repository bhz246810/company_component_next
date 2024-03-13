/// <reference types="global" />
declare const setGlobalVariable: ({
  env,
  writable,
}: {
  env: DCN_ENV_DECLARE;
  writable?: boolean | undefined;
}) => void;
export default setGlobalVariable;
