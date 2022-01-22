import { defineStore } from 'pinia'
import { storage } from '../../utils/localStorage/localStorage'

export const useSubMenuStore = defineStore('submenu', {
  state: () => {
    return {
      activeKey: 1
    }
  },
  getters: {
    changeKey(state) {
      return (key) => {
        state.activeKey = key
      }
    }
  },
  actions: {
    changeActiveKey(key: any) {
      this.changeKey(key)
      storage.set('subActiveKey', this.activeKey)
    },
    loadLocal() {
      const activeKey = storage.get('subActiveKey')
      if (activeKey) {
        this.activeKey = activeKey
      }
    }
  }
})

export function setupSubMenu() {
  useSubMenuStore().loadLocal()
}
