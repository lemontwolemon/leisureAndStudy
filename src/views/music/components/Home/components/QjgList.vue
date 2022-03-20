<template>
  <div class="qjg-list">
    <h2 class="list-title">排行榜</h2>
    <div class="list-content">
      <ul>
        <template v-for="(item, index) in hotPlayListData" :key="item.id">
          <li v-if="index < 5" :style="getBackgroundImage(index)">
            <div
              style="
                font-size: 22px;
                color: white;
                display: flex;
                justify-content: center;
              "
            >
              巅峰榜
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                color: white;
                font-size: 26px;
                font-weight: 400;
                margin-bottom: 50px;
              "
            >
              {{ item.name }}
            </div>
            <template v-for="(subItem, index) in item.children" :key="index">
              <div
                v-if="index < 3"
                style="
                  display: flex;
                  padding: 0 30px;
                  color: white;
                  margin-top: 30px;
                "
                @click="play(subItem)"
              >
                <div style="margin-right: 10px">{{ index + 1 }}</div>
                <div
                  style="
                    width: 150px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  <div
                    style="margin-bottom: 5px; cursor: pointer"
                    :title="subItem.name"
                  >
                    {{ subItem.name }}
                  </div>
                  <div style="cursor: pointer">{{ subItem.ar[0].name }}</div>
                </div>
              </div>
            </template>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hotPlayList, playListDetail } from '../../../../../service/music'
import { useMessage } from 'naive-ui'
import emitter from '../../../../../components/eventBus'

const message = useMessage()

const getBackgroundImage = (index: any) => {
  return 'background-position :' + 224.2 * index + 'px' + ' ' + '0'
}

const hotPlayListData = ref<any>()

const getHotPlayList = () => {
  hotPlayList().then((res: any) => {
    if (res.code !== 200) return message.error(res.msg)
    hotPlayListData.value = res.tags
    hotPlayListData.value.splice(2, 1)
    for (const item of hotPlayListData.value) {
      const postData = {
        id: item.id
      }
      item['children'] = []
      playListDetail(postData).then((res: any) => {
        for (const song of res.playlist.tracks) {
          item.children.push(song)
        }
      })
    }
  })
}

const play = (info: any) => {
  emitter.emit('info', info)
}

onMounted(() => {
  getHotPlayList()
})
</script>

<style lang="less" scoped>
.qjg-list {
  padding: 50px 0;
  margin: 0 auto;
  .list-title {
    display: flex;
    font-size: 30px;
    justify-content: center;
    margin-bottom: 24px;
  }
  .list-content {
    width: 100%;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        width: 225px;
        margin-right: 20px;
        padding: 50px 0;
        height: 400px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-image: url('https://y.qq.com/ryqq/static/media/bg_index_top.5314c494.jpg?max_age=2592000');
      }
    }
  }
}
</style>
