import quRequest from '../index'
import { IPhoneLogin } from './type'

enum Login {
  PhoneLogin = 'login/cellphone'
}

//手机登录

export function phoneLogin(data: IPhoneLogin) {
  return quRequest.post({
    url: Login.PhoneLogin,
    data
  })
}
