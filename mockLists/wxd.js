const noop = function() {};
const isMock = process.env.MOCK_FLAG === 'mock';
// 相关mock 函数书写
const workflowByPass = isMock ? require('../mockByPass/workflow') : noop;
const materialByPass = isMock ? require('../mockByPass/material') : noop;
const systemByPass = isMock ? require('../mockByPass/system') : noop;
const baseData = isMock ? require('../mockByPass/basedata') : noop;

const GATE = 'http://192.168.1.248:8082/';
// const GATE = 'http://199.28.0.92:8082/'

module.exports = [
  {
    path: '^/workflow',
    target: GATE,
    // bypass: workflowByPass,
  },
  {
    path: '^/basedata',
    target: GATE,
    // bypass: baseData,
  },
  {
    path: '^/material',
    target: GATE,
    // bypass: materialByPass,
    // pathRewrite: { '^/material': '' },
  },
  {
    path: '^/system',
    target: GATE,
    // target: 'http://199.28.10.247:8084',
    // bypass: systemByPass,
    // pathRewrite: { '^/system': '' },
  },
  {
    path: '^/cloud-oauth-service',
    target: GATE,
    // target: 'http://199.28.10.247:8084',
    // bypass: systemByPass,
    // pathRewrite: { '^/cloud-oauth-service': '' },
  },
  {
    path: '^/file',
    target: 'http://192.168.1.248:8087',
    // target: 'http://199.28.10.247:8084',
    // bypass: systemByPass,
    // pathRewrite: { '^/cloud-oauth-service': '' },
  },
];
