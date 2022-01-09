import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  //state
  state: () => {
    return {
      count: 20,
      name: 'Jack'
    }
  },
  // state简写
  // state: () => ({
  //   name: 'Jack'
  // })

  //getters
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    //给getters传递参数
    doubleCountPlus() {
      return (a: number) => {
        return this.doubleCount + a
      }
    }
  },

  //actions
  actions: {
    addCount(num: number) {
      this.count += num
    }
  }
})
