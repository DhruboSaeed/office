import {getApi} from '../services/httpService'

export function getUserList(params) {
    return getApi().get('https://60f2479f6d44f300177885e6.mockapi.io/users', {
        params: params
    })
  }