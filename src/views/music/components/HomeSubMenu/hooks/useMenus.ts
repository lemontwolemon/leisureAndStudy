import { storeToRefs } from 'pinia'
import { useSubMenuStore } from '../../../../../store/homeSubMenu'

const { activeKey } = storeToRefs(useSubMenuStore())

const store = useSubMenuStore()

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '首页' }
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
        { default: () => '歌手' }
      ),
    key: 2
  },
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '新碟' }
      ),
    key: 3
  },
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '排行榜' }
      ),
    key: 4
  },
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '分类歌单' }
      ),
    key: 5
  },
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '电台' }
      ),
    key: 6
  },
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => 'MV' }
      ),
    key: 7
  }
]

const handleUpdateValue = (key: any) => {
  store.changeActiveKey(key)
}

export { activeKey, menuOptions, handleUpdateValue }
