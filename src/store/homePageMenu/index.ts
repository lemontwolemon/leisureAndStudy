import { defineStore } from 'pinia'
import { storage } from '../../utils/localStorage/localStorage'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      activeKey: 1
    }
  },
  getters: {
    changeKey(state) {
      return (key: any) => {
        state.activeKey = key
      }
    }
  },
  actions: {
    changeActiveKey(key: any) {
      this.changeKey(key)
      storage.set('activeKey', this.activeKey)
    },
    loadLocal() {
      const activeKey = storage.get('activeKey')
      if (activeKey) {
        this.activeKey = activeKey
      }
    }
  }
})

export function setupTopMenu() {
  useMenuStore().loadLocal()
}
