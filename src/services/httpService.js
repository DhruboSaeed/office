import axios from 'axios';
export function getApi(options = {}) {
  // setAuthorizationToken(localStorage.getItem('jwtToken'));
  return axios;
}
