import { storeToRefs } from 'pinia'
import { useMenuStore } from '../../../../../store/homePageMenu'
import { h } from 'vue'

const { activeKey } = storeToRefs(useMenuStore())
const store = useMenuStore()

const inputData = {
  placeholder: '搜索音乐、MV、歌单、用户'
}

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '音乐馆' }
      ),
    key: 1
  },
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '我的音乐' }
      ),
    key: 2
  }
]

export { activeKey, inputData, menuOptions, store }
