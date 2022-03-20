import { NAvatar, NGradientText, NIcon } from 'naive-ui'
import { storage } from '../../../../../utils/localStorage/localStorage'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

const info = storage.get('info')

function renderCustomHeader() {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: info.profile.avatarUrl
      }),
      h('div', null, [
        h('div', null, [
          h(
            NGradientText,
            { depth: 2 },
            { default: () => info.profile.nickname }
          )
        ])
      ])
    ]
  )
}

const renderIcon = (icon: any) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    key: 'header',
    type: 'render',
    render: renderCustomHeader
  },
  {
    key: 'header-divider',
    type: 'divider'
  },
  {
    label: '个人空间',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

const handleSelect = (key: string | number) => {
  console.log(key)
}

export { info, options, handleSelect }
