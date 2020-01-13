const noop = function() {}
const isMock = process.env.MOCK_FLAG === 'mock'
// 相关mock 函数书写
// const workflowByPass = isMock ? require('../mockByPass/workflow') : noop
const materialByPass = isMock ? require('../mockByPass/material') : noop
const loginByPass = isMock ? require('../mockByPass/loginUser') : noop
// const systemByPass = isMock ? require('../mockByPass/system') : noop
// const baseData = isMock ? require('../mockByPass/basedata') : noop

module.exports = [

  {
    path: '^/material',
    target: 'http://192.168.1.248:8082/',
    bypass: materialByPass
    // pathRewrite: { '^/material': '' },
  },
  {
    path: '^/test',
    target: 'http://192.168.1.248:8082/',
    bypass: loginByPass,
    pathRewrite: { '^/test': '' },
  }
/*
  {
    path: '^/workflow',
    target: 'http://192.168.1.248:8082/'
    // bypass: workflowByPass,
  },
  {
    path: '^/basedata',
    target: 'http://192.168.1.248:8082/'
    // bypass: baseData,
  },
  {
    path: '^/system',
    target: 'http://192.168.1.248:8082/'
    // bypass: systemByPass,
    // pathRewrite: isMock ? {} : { '^/system': '' },
  },
  {
    path: '^/cloud-oauth-service',
    target: 'http://192.168.1.248:8082/'
    // bypass: systemByPass,
    // pathRewrite: isMock ? {} : { '^/system': '' },
  },
  {
    // xiawei 199.28.10.247:8084
    // https://www.easy-mock.com/mock
    path: '/mock',
    target: 'https://www.easy-mock.com/mock/5d0c39346afb3d707c1557d2'
    // bypass:systemByPass,
    // pathRewrite: isMock ? {} : { '^/mock': 'mock' },
  }
 */
]
