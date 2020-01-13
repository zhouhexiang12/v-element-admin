import get from 'lodash/get';
import { Message } from 'element-ui';
import whiteUrl from './resWhite';
import flowLists from './flowLists';

export const SUC_CODE = '0'; // 成功
export const FAIL_CODE = '1'; // 失败

export default function(res) {
  // response 封装
  const code = get(res, 'data.code', false) || get(res, 'data.resultCode', false); // resultCode 热网
  const mes = get(res, 'data.message', '无返回信息'); // 默认值 可以用 config配置
  const url = get(res, 'config.url', false);
  const result = get(res, 'data.result', 'noResult');
  const headers = get(res, 'headers', {});
  const isFlowLists = () => {
    return flowLists.some(i => {
      const result = i.test(url);
      i.lastIndex = 0;
      return result;
    });
  };
  if (res.status === 200) {
    // 加入白名单过滤掉 下拉公共接口
    if (!code && code !== 0) {
      // 登录过滤
      if (get(res, 'data.access_token', false)) {
        return res.data;
      }
      // 流处理 过滤
      if (isFlowLists() || headers['content-disposition']) {
        return get(res, 'data', null);
      }
      // 查看result属性 为什么不写 code码？？？？？
      if (result === false) {
        return res.data;
      }
      // 二维码
      if (/\/cloud-oauth-service\/verifyCode$/gi.test(url)) {
        return res.data;
      }

      let isWhite = false;
      whiteUrl.forEach(i => {
        if (i(url)) {
          isWhite = true;
        }
      });
      if (isWhite) {
        return {
          code: '0',
          datas: res.data,
        };
      } else {
        if (process.env.NODE_ENV !== 'production') {
          Message.warning({
            message: `${url} => ${mes}`,
          });
        }
        return;
      }
    }
    if ((code === '201' || code === '202') && mes) {
      Message.error({
        message: get(res, 'data.detail', '无返回信息'),
      });
    }

    if (code === FAIL_CODE) {
      Message.error({
        message: mes,
      });
      return res.data;
    }
  } else {
    if (mes) {
      Message.warning({
        message: mes,
      });
    }
    return;
  }
  return res.data;
}
