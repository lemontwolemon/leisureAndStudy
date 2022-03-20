import { storeToRefs } from 'pinia'
import { useMenuStore } from '../../../../../store/homePageMenu'
import type { MenuOption } from 'naive-ui'

const { activeKey } = storeToRefs(useMenuStore())

const inputData = {
  placeholder: '搜索音乐、MV、歌单、用户'
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          target: '_blank'
        },
        { default: () => '音乐馆' }
      ),
    key: 1,
    path: '/music/home'
  },
  {
    label: () =>
      h(
        'a',
        {
          target: '_blank'
        },
        { default: () => '我的音乐' }
      ),
    key: 2,
    path: '/music/mymusic'
  }
]

export { activeKey, inputData, menuOptions }
