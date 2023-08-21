import getGlobalVariable from './getGlobalVariable';
const setGlobalVariable = ({
  env,
  writable = false,
}: {
  env: DCN_ENV_DECLARE;
  writable?: boolean;
}) => {
  for (const [key, value] of Object.entries(env)) {
    getGlobalVariable()[key as keyof DCN_ENV_DECLARE] = value;
    Object.defineProperty(getGlobalVariable(), key, {
      writable,
    });
  }
};
export default setGlobalVariable;
