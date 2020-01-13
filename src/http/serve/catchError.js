import get from 'lodash/get';
import debounce from 'lodash/debounce';
import { Message } from 'element-ui';
// import router from '@/router';
import axios from 'axios';
let mesOut = '';

const handleMes = args => {
  Message.error({
    message: mesOut,
  });
};
const wrapMes = debounce(handleMes, 200);

export default function(error) {
  const code = get(error, 'response.status', false);
  const mes = get(error, 'message', false);
  const url = get(error, 'config.url', '');

  if (code) {
    mesOut = `${code}-->${url}-->${mes}`;
    if (code === 401) {
      mesOut = '当前登录已过期！';
      if (axios.__ER_SELF__) {
        axios.__ER_SELF__.h_401();
      }
    }
    if (process.env.NODE_ENV === 'development') {
      wrapMes();
    }
  }
  // result 返回 false
  return Promise.resolve({
    ERROR_RESULT: false,
    error,
  });
}
