/* eslint-disable */
const chalk = require('chalk');

const isMock = process.env.MOCK_FLAG === 'mock';
const LIST = process.env.MOCK_LIST;
const noop = function() {};

if (isMock) {
  console.log(
    chalk.red(`
      ====== ${LIST} 当前数据源来自 mock 数据 ======
  `)
  );
}
let obj = {};
// verbose replacement
// 代理列表
if (isMock && LIST) {
  const lists = require(`./mockLists/${LIST}`);
  lists.forEach(proxy => {
    const { path, target, bypass = noop, pathRewrite = {} } = proxy;
    obj[path] = {
      target,
      bypass,
      ws: true,
      changeOrigin: true,
      pathRewrite,
    };
    // 日志输出
    obj[path].logLevel = 'debug';
  });
} else {
  obj = false;
}

module.exports = obj;
