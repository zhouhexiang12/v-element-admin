const noop = function() {};
const isMock = process.env.MOCK_FLAG === 'mock';
// 相关mock 函数书写
const workflowByPass = isMock ? require('../mockByPass/workflow') : noop;
const materialByPass = isMock ? require('../mockByPass/material') : noop;
const systemByPass = isMock ? require('../mockByPass/system') : noop;
const baseData = isMock ? require('../mockByPass/basedata') : noop;

module.exports = [
  {
    path: '/workflow',
    target: 'http://199.28.0.91:8781/',
    bypass: workflowByPass,
  },
  {
    //xiawei 199.28.10.247:8084
    path: '/basedata',
    target: 'http://192.168.1.248:8086/',
    pathRewrite: { '^/basedata': '' },
  },
  {
    //xiawei 199.28.10.247:8084
    //wuyu 199.28.10.219
    //http://192.168.1.248:8083
    path: '/material',
    target: 'http://199.28.10.219:8083/',
    // bypass: materialByPass,
    pathRewrite: { '^/material': '' },
  },
  {
    //xiawei 199.28.10.247:8084
    //zhumengyu http://199.28.0.184:8083
    path: '/system',
    target: 'http://192.168.1.248:8084/',
    // bypass: systemByPass,
    pathRewrite: { '^/system': '' },
  },

  {
    path: '^/cloud-oauth-service',
    target: 'http://192.168.1.248:8082/',
    // bypass: systemByPass,
    // pathRewrite:{ '^/cloud-oauth-service': '' },
  },
  {
    path: '^/file',
    // target: 'http://192.168.1.248:8087',
    target: 'http://192.168.1.248:8087' /* 夏伟 */,
    // target: 'http://199.28.10.247:8084'
  },
];
