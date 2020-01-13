/**
 * 将所有的代理config从文件中 独立出来方便运维人员配置
 */
import get from 'lodash/get';
// import { getToken } from '@/utils/auth';
import axios from 'axios';
import { instanceForm } from './index.js';

const GATE = '';
export default async function(config) {
  const FLAG = window.__HTTP_FLAG__;

  if (window[FLAG]) {
    const configOut = window[FLAG];
    const url = get(config, 'url');

    // 拦截 非mock环境下
    // if (process.env.NODE_ENV !== 'development') {
    if (process.env.VUE_APP_MOCKING !== 'yes') {
      Object.keys(configOut).forEach(prefix => {
        const host = configOut[prefix];
        const re = new RegExp(`^${prefix}`, 'ig');
        if (re.test(url)) {
          config.url = host + url;
        }
      });
    }
  }
  return config;
}
