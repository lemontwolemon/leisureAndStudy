import { defineStore } from 'pinia'
import { storage } from '../../utils/localStorage/localStorage'

export const useSubMenuStore = defineStore('submenu', {
  state: () => {
    return {
      activeKey: 1,
      functionActiveKey: 0,
      likeActiveKey: 0
    }
  },
  getters: {
    changeKey(state) {
      return (key: any) => {
        state.activeKey = key
      }
    },
    changeFunctionKey(state) {
      return (key: any) => {
        state.functionActiveKey = key
      }
    },
    changeLikeKey(state) {
      return (key: any) => {
        state.likeActiveKey = key
      }
    },
    resetKey(state) {
      state.likeActiveKey = 0
    }
  },
  actions: {
    changeActiveKey(key: any) {
      this.changeKey(key)
      storage.set('subActiveKey', this.activeKey)
    },
    changeFunctionActiveKey(key: any) {
      this.changeFunctionKey(key)
      storage.set('functionActiveKey', this.functionActiveKey)
    },
    changeLikeActiveKey(key: any) {
      this.changeLikeKey(key)
      storage.set('likeActiveKey', this.likeActiveKey)
    },
    resetActiveKey() {
      this.resetKey
    },
    loadLocal() {
      const activeKey = storage.get('subActiveKey')
      const functionActiveKey = storage.get('functionActiveKey')
      const likeActiveKey = storage.get('likeActiveKey')
      if (activeKey) {
        this.activeKey = activeKey
      }
      if (functionActiveKey) {
        this.functionActiveKey = functionActiveKey
      }
      if (likeActiveKey) {
        this.likeActiveKey = likeActiveKey
      }
    }
  }
})

export function setupSubMenu() {
  useSubMenuStore().loadLocal()
}
