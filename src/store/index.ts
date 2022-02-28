import { defineStore } from 'pinia'
import { storage } from '../utils/localStorage/localStorage'
import { ILoginInfoType, IPhoneLogin } from './types'
import router from '@/router'

export const useLoginStore = defineStore('login', {
  //state
  state: () => {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      phoneLogin: {
        phone: '',
        password: '',
        info: {}
      }
    }
  },
  // state简写
  // state: () => ({
  //   name: 'Jack'
  // })

  //getters
  getters: {
    // doubleCount(state) {
    //   return state.count * 2
    // },
    //给getters传递参数
    // doubleCountPlus() {
    //   return (a: number) => {
    //     return this.doubleCount + a
    //   }
    // }
  },

  //actions
  actions: {
    accountLoginAction(postData: IPhoneLogin, info: any) {
      this.phoneLogin.phone = postData.phone
      this.phoneLogin.password = postData.password
      this.phoneLogin.info = info
      storage.set('token', info.token)
      storage.set('info', info)
      storage.set('account', info.account)
      storage.set('bindings', info.bindings)
      storage.set('cookie', info.cookie)
      storage.set('profile', info.profile)
      storage.set('loginType', info.loginType)
      router.push('/excessive')
    },
    loadLocal() {
      const userInfo = storage.get('info')
      if (userInfo) {
        this.phoneLogin.info = userInfo
      }
    }
  }
})
export function setupStore() {
  useLoginStore().loadLocal()
}
