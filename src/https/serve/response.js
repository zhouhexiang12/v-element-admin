import get from 'lodash/get';
import { Message } from 'element-ui';
import whiteUrl from './resWhite';

export const SUC_CODE = '0'; // 成功
export const FAIL_CODE = '1'; // 失败

export default function(res) {
  // response 封装
  const code = get(res, 'data.code', false);
  const mes = get(res, 'data.message', '无返回信息'); // 默认值 可以用 config配置
  const url = get(res, 'config.url', false);
  const result = get(res, 'data.result', 'noResult');

  if (res.status === 200) {
    // 加入白名单过滤掉 下拉公共接口
    if (!code) {
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
          // datas: res.data.map(item => {
          //   // 统一修改fid 值为 int类型
          //   if (item.fid) {
          //     item.fid = parseInt(item.fid);
          //   }
          //   return item;
          // }),
        };
      } else {
        Message.warning({
          message: `${url} => ${mes}`,
        });
        return;
      }
    }

    if (code === FAIL_CODE) {
      Message.error({
        message: mes,
      });
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
