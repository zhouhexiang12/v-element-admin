import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// import axios from 'axios';

// const TokenKey = '__RUNA_ERP_TOKEN__';

// export function getToken() {
//   return localStorage.getItem(TokenKey);
// }

// export function setToken(token) {
//   const { access_token } = token;
//   if (!access_token) {
//     return undefined;
//   }
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//   return localStorage.setItem(TokenKey, access_token);
// }

// export function removeToken() {
//   axios.defaults.headers.common['Authorization'] = '';
//   return localStorage.removeItem(TokenKey);
// }
