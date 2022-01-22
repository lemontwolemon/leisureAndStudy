<template>
  <div class="carousel">
    <div class="carousel-header">
      <h2 style="font-size: 30px">歌单推荐</h2>
    </div>
    <div class="carousel-tab">
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
      />
    </div>
    <div class="carousel-content">
      <n-carousel
        :slides-per-view="3"
        :space-between="20"
        :loop="false"
        show-arrow
        draggable
      >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenus } from './hooks'
const { activeKey, menuOptions } = useMenus
</script>

<style scoped>
.carousel {
  width: 60%;
  margin: 0 auto;
}
.carousel-header {
  padding: 50px 0 24px 0;
  display: flex;
  justify-content: center;
}
.carousel-tab {
  display: flex;
  justify-content: center;
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
