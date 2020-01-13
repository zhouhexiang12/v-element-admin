import get from 'lodash/get';
import debounce from 'lodash/debounce';
import { Message } from 'element-ui';

let mesOut = '';

const handleMes = args => {
  Message.error({
    message: mesOut,
  });
};
const wrapMes = debounce(handleMes, 100);

export default function(error) {
  const code = get(error, 'response.status', false);
  const mes = get(error, 'message', false);
  const url = get(error, 'config.url', '');

  if (code) {
    mesOut = `${code}-->${url}-->${mes}`;
    wrapMes();
  }
  // result 返回 false
  return Promise.resolve({
    ERROR_RESULT: false,
    error,
  });
}
