<template>
  <div class="my-music">
    <div class="my-music-top">
      <div class="info">
        <n-avatar round bordered :size="108" :src="info.profile.avatarUrl" />
        <n-gradient-text
          style="width: 100%; font-weight: 700"
          gradient="linear-gradient(90deg, green 0%, white 100%)"
          :size="30"
          type="success"
        >
          {{ info.profile.nickname }}
        </n-gradient-text>
        <div class="focus-and-fans">
          <div class="my-focus">
            <div style="font-size: 24px">{{ info.profile.follows }}</div>
            <div>关注</div>
          </div>
          <n-divider vertical />
          <div class="my-fans">
            <div style="font-size: 24px">{{ info.profile.followeds }}</div>
            <div>粉丝</div>
          </div>
        </div>
      </div>
      <div class="function">
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
    </div>
    <div class="my-music-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storage } from '../../../../utils/localStorage/localStorage'
import { useSubMenuStore } from '../../../../store/homeSubMenu'
import { storeToRefs } from 'pinia'

const store = useSubMenuStore()

const router = useRouter()

const info = storage.get('info')

let activeKey: any = storeToRefs(useSubMenuStore()).functionActiveKey

const menuOptions: any = [
  {
    label: '我喜欢',
    path: '/music/mymusic/like'
  },
  {
    label: '我创建的歌单',
    path: '/music/mymusic/create'
  },
  {
    label: '关注',
    path: '/music/mymusic/focus'
  },
  {
    label: '粉丝',
    path: '/music/mymusic/fans'
  },
  {
    label: '我上传的视频',
    path: '/music/mymusic/uploadmv'
  }
]

const changeActive = (index: number, path: string) => {
  store.changeFunctionActiveKey(index)
  store.resetActiveKey()
  router.push(path)
}
</script>

<style scoped lang="less">
.my-music {
  .my-music-top {
    position: relative;
    width: 100%;
    height: 400px;
    background: url('https://y.qq.com/ryqq/static/media/bg_profile.bd497b5a.jpg?max_age=2592000')
      no-repeat;
    .info {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .focus-and-fans {
        display: flex;
        justify-content: space-evenly;
        margin-top: 10px;
        color: white;
        font-weight: 400;
        :deep(.n-divider.n-divider--vertical) {
          height: 3em;
          margin: auto 5px;
        }
      }
    }
    .function {
      position: absolute;
      bottom: 40px;
      left: 18%;
      ul {
        list-style: none;
        display: flex;
        li {
          margin: 0 20px;
          font-weight: 400;
          font-size: 16px;
          cursor: pointer;
        }
        li:hover {
          color: #31c218;
        }
      }
    }
  }
  .my-music-content {
    margin: 10px 365px;
  }
}
.actionColor {
  color: #31c218;
}
.color {
  color: #ffffff;
}
</style>
