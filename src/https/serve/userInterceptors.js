import catchError from './catchError';
import responseHandle from './response';
import configInter from './configInter';

export default function(insArray) {
  const insArrayIn = insArray;
  if (insArrayIn.length) {
    for (let i = 0; i < insArray.length; i++) {
      // request 拦截
      insArrayIn[i].interceptors.request.use(configInter, catchError);
      // response 拦截 axios 相关 response 返回需要注意一些细节
      insArrayIn[i].interceptors.response.use(responseHandle, catchError);
    }
  }
}
