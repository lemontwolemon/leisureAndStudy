import { defineStore } from 'pinia'
import { storage } from '../utils/localStorage/localStorage'
import { ILoginInfoType } from './types'

export const useLoginStore = defineStore('login', {
  //state
  state: () => {
    return {
      userInfo: {
        username: '',
        password: ''
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
    accountLoginAction(userInfo: ILoginInfoType) {
      this.userInfo = userInfo
      storage.set('userInfo', userInfo)
      console.log(this.userInfo, '123')
    },
    loadLocal() {
      const userInfo = storage.get('userInfo')
      if (userInfo) {
        this.userInfo = userInfo
      }
    }
    // addCount(num: number) {
    //   this.count += num
    // }
  }
})
export function setupStore() {
  useLoginStore().loadLocal()
}
