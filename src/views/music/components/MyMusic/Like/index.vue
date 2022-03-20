<template>
  <div class="like">
    <div class="like-top">
      <ul>
        <li
          v-for="(item, index) in menuOptions"
          :key="index"
          :class="activeKey === index ? 'actionColor' : 'color'"
          @click="changeActive(index, item.path)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="like-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubMenuStore } from '../../../../../store/homeSubMenu'

const store = useSubMenuStore()

const router = useRouter()

let activeKey: any = storeToRefs(useSubMenuStore()).likeActiveKey

const menuOptions: any = [
  {
    label: '歌曲',
    path: 'song'
  },
  {
    label: '歌单',
    path: 'playlist'
  },
  {
    label: '专辑',
    path: 'album'
  },
  {
    label: '视频',
    path: 'mv'
  }
]

const changeActive = (index: number, path: string) => {
  store.changeLikeActiveKey(index)
  router.push(path)
}

const resetKey = () => {
  activeKey = 0
}

defineExpose({
  resetKey
})
</script>

<style scoped lang="less">
.like {
  .like-top {
    ul {
      list-style: none;
      display: flex;
      li {
        margin-right: 50px;
        font-weight: 400;
        font-size: 16px;
        cursor: pointer;
      }
      li:hover {
        color: #31c218;
      }
    }
  }
  .like-content {
    margin: 20px 0;
  }
}
.actionColor {
  color: #31c218;
}
.color {
  color: #000000;
}
</style>
