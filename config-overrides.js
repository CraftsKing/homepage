const { injectBabelPlugin } = require('react-app-rewired');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  // do stuff with the webpack config...

  // antd 按需加载
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);

  // mobx 使用修饰器
  config = rewireMobX(config, env);
  
  return config;
};
