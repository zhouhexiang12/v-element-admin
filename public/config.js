(function(global) {
  // config 变量可配置
  global.__HTTP_FLAG__ = '__HTTP_CONFIG__';

  var FLAG = global.__HTTP_FLAG__;
  if (!global[FLAG]) {
    // 网关
    // var GATE = 'http://192.168.1.248:8082';
    var GATE = '';
    // 版本前缀
    var BASE_URL = '/api/v1';
    // 通常接口
    var NORMAL_URL = GATE + BASE_URL;
    // 统一网关接口
    global['ERP_NORMAL_URL'] = NORMAL_URL;

    // 网关或者单独配置
    global[FLAG] = {
      // 服务端相关配置项
      '/login': NORMAL_URL,
      // 工作流
      '/workflow': NORMAL_URL,
      // 物料
      '/material': NORMAL_URL,
      // system
      '/system': NORMAL_URL,
      // 认证
      '/cloud-oauth-service': NORMAL_URL,
      // 基础服务
      '/basedata': NORMAL_URL,
      // 上传服务器
      '/file': '',
    };
  } else {
    global.error('命名冲突, 请开发人员更改前缀');
  }
})(this);
