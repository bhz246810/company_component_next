const devEnv = require(`./config/dev.json`);
const defineAdd = {};
for (const [key, value] of Object.entries(devEnv)) {
  defineAdd['process.env.' + key] = value;
  if (key.includes('API_CONFIG_')) {
    defineAdd['process.env.' + key.replace('API_CONFIG_', '')] = value;
  }
}
export default {
  define: {
    'process.env.UMI_ENV': 'dev',
    ...defineAdd,
  },
};
