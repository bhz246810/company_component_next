declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg';
declare module '*.module.less';
interface DCN_ENV_DECLARE {
  API_CONFIG_BASE_API?: string;
  API_CONFIG_ENV?: string;
  API_CONFIG_PERMISS_API?: string;
  API_CONFIG_REMAI_API?: string;
  API_CONFIG_CPS_API_URL?: string;
  API_CONFIG_LOGIN_URL?: string;
  API_CONFIG_BUSINESS_API_URL?: string;
  API_CONFIG_BIG_DATA_URL?: string;
  API_CONFIG_SHAOMAI_API?: string;
  API_CONFIG_CONTRACT_URL?: string;
  API_CONFIG_PUBLIC_URL?: string;
  BUSINESS_API_REQUESET: (url: string, options: any) => Promise<any>;
}
