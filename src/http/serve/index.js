/* eslint-disable */
// import router from 'src/router'
import axios from 'axios';
import Qs from 'qs';
import userInterceptor from './userInterceptors';

// form 请求
const instanceForm = axios.create({
  baseURL: '',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  withCredentials: false,
  transformRequest: [
    data => {
      let dataIn = data;
      dataIn = Qs.stringify(dataIn);
      return dataIn;
    },
  ],
});

// json

const instance = axios.create({
  baseURL: '',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  withCredentials: false,
  transformRequest: [data => JSON.stringify(data)],
});

const instanceRow = axios.create({
  baseURL: '',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

// 全局 axios原型加入 拦截
userInterceptor([instance, instanceForm, axios]);

export { instanceForm, instanceRow };

// 对 get set 做一层封装 比较常用的事 get set 如果其他用得上的再自行封装
export function Get(url, data) {
  return instance.get(url, {
    params: data,
  });
}

export function Post(url, data) {
  return instance.post(url, data);
}

export function Put(url, data) {
  return instance.put(url, data);
}

export function Delete(url, data) {
  return instance.delete(url, {
    data,
  });
}

// 相关restful 接口封装
export function initModule(prefix, reqObj) {
  // prefix 内部引用
  let obj = {};
  const { get = [], post = [], put = [], deletes = [] } = reqObj;
  const geneApi = function(api, transMethod) {
    api.forEach(ele => {
      if (!obj[ele]) {
        obj[ele] = function(param) {
          return transMethod(`${prefix}${ele}`, param);
        };
      }
    });
  };
  geneApi(get, Get);
  geneApi(post, Post);
  geneApi(put, Put);
  geneApi(deletes, Delete);

  return obj;
}
export default instance;
