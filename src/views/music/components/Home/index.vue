<template>
  <div class="home-top">
    <home-sub-menu />
  </div>
  <div class="home">
    <div class="recommend-resource">
      <qjg-carousel title="每日歌单推荐" :data="recommendResourceList" />
    </div>
    <div class="playlist-recommended">
      <qjg-carousel title="每日歌曲推荐" :data="recommendSongsList" />
    </div>
    <div class="new-start">
      <qjg-carousel
        :title="newStartData.title"
        :menu-data="newStartData.menuData"
        :data="topSongList"
      />
    </div>
    <div class="qjg-list">
      <qjg-list />
    </div>
    <!--    <div class="new-album">-->
    <!--      <qjg-carousel v-bind="newAlbumData" />-->
    <!--    </div>-->
    <!--    <div class="mv">-->
    <!--      <qjg-carousel v-bind="MVData" />-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import QjgCarousel from '../../../../base-ui/carousel'
import { useCarousel } from './hooks'
import {
  recommendResource,
  recommendSongs,
  topSong
} from '../../../../service/music'
const { playlistRecommendData, newStartData, newAlbumData, MVData } =
  useCarousel

const recommendResourceList = ref<any>()

const recommendSongsList = ref<any>()

const topSongList = ref<any>()

const getRecommendResource = () => {
  recommendResource().then((res: any) => {
    recommendResourceList.value = res.recommend
  })
}

const getRecommendSongsList = () => {
  recommendSongs().then((res: any) => {
    recommendSongsList.value = res.data.dailySongs.map((a: any) => {
      a.picUrl = a.al.picUrl
      a.playcount = a.id
      return a
    })
  })
}

const getTopSong = (key: any) => {
  const postData = {
    type: key
  }
  topSong(postData).then((res: any) => {
    topSongList.value = res.data.map((a: any) => {
      a.picUrl = a.album.blurPicUrl
      a.playcount = a.id
      return a
    })
  })
}

defineExpose({
  getTopSong
})

onMounted(() => {
  getRecommendResource()
  getRecommendSongsList()
  getTopSong(0)
})
</script>

<style lang="less" scoped>
.home-top {
  background-color: #f5f5f5;
}
.home {
  padding-bottom: 100px;
  .playlist-recommended {
    background-color: #fafafa;
  }
  .new-start {
    background-color: #fff;
  }
  .qjg-list {
    background-color: #f5f5f5;
  }
  .new-album {
    background-color: #f5f5f5;
  }
  .mv {
    background-color: #fdfdfd;
  }
  .recommend-resource {
    background-color: #fff;
  }
}
</style>
