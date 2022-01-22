import { h, ref } from 'vue'

const activeKey = ref(1)

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_self'
        },
        { default: () => '为你推荐' }
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
        { default: () => '官方歌单' }
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
        { default: () => '情歌' }
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
        { default: () => '网络歌曲' }
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
        { default: () => '经典' }
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
        { default: () => 'KTV热歌' }
      ),
    key: 6
  }
]

export { activeKey, menuOptions }
