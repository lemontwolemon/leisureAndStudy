<template>
  <div class="home">
    <div class="recommend-resource">
      <qjg-carousel title="每日推荐" :data="recommendResourceList" />
    </div>
    <!--    <div class="playlist-recommended">-->
    <!--      <qjg-carousel v-bind="playlistRecommendData" />-->
    <!--    </div>-->
    <!--    <div class="new-start">-->
    <!--      <qjg-carousel v-bind="newStartData" />-->
    <!--    </div>-->
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
import { recommendResource } from '../../../../service/music'
const { playlistRecommendData, newStartData, newAlbumData, MVData } =
  useCarousel

const recommendResourceList = ref<any>()

const getRecommendResource = () => {
  recommendResource().then((res: any) => {
    recommendResourceList.value = res.recommend
  })
}

onMounted(() => {
  getRecommendResource()
})
</script>

<style scoped>
.playlist-recommended {
  background-color: #fafafa;
}
.new-start {
  background-color: #fff;
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
</style>
