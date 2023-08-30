class SingleEnv {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  private static _instance: DCN_ENV_DECLARE | null = null;

  public static set(): DCN_ENV_DECLARE {
    if (!this._instance) {
      this._instance = {
        API_CONFIG_ENV: process.env.API_CONFIG_ENV,
        API_CONFIG_BASE_API: process.env.API_CONFIG_BASE_API,
        API_CONFIG_CPS_API_URL: process.env.API_CONFIG_CPS_API_URL,
        BUSINESS_API_REQUESET: process.env.BUSINESS_API_REQUESET as any,
        API_CONFIG_BIG_DATA_URL: process.env.API_CONFIG_BIG_DATA_URL,
        API_CONFIG_SHAOMAI_API: process.env.API_CONFIG_SHAOMAI_API,
        API_CONFIG_CONTRACT_URL: process.env.API_CONFIG_CONTRACT_URL,
        API_CONFIG_PUBLIC_URL: process.env.API_CONFIG_PUBLIC_URL,
      };
    }
    return this._instance;
  }
}

export default (): DCN_ENV_DECLARE => SingleEnv.set();
