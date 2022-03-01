import { h } from 'vue'

const playlistRecommendData = {
  title: '歌单推荐',
  menuData: {
    menuOptions: [
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
  }
}

const newStartData = {
  title: '新歌首发',
  menuData: {
    menuOptions: [
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '全部' }
          ),
        key: 0
      },
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '华语' }
          ),
        key: 7
      },
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '欧美' }
          ),
        key: 96
      },
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '日本' }
          ),
        key: 8
      },
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '韩国' }
          ),
        key: 16
      }
    ]
  }
}

const newAlbumData = {
  title: '新碟首发',
  menuData: {
    menuOptions: [
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '内地' }
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
            { default: () => '港台' }
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
            { default: () => '欧美' }
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
            { default: () => '韩国' }
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
            { default: () => '日本' }
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
            { default: () => '其他' }
          ),
        key: 6
      }
    ]
  }
}

const MVData = {
  title: 'MV',
  menuData: {
    menuOptions: [
      {
        label: () =>
          h(
            'a',
            {
              // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_self'
            },
            { default: () => '精选' }
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
            { default: () => '内地' }
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
            { default: () => '港台' }
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
            { default: () => '欧美' }
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
            { default: () => '韩国' }
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
            { default: () => '日本' }
          ),
        key: 6
      }
    ]
  }
}

export { playlistRecommendData, newStartData, newAlbumData, MVData }
