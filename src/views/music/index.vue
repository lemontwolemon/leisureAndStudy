<template>
  <div class="music">
    <n-back-top listen-to=".music" :right="100" />
    <div class="home-menu">
      <home-top-menu @activeKey="getActiveKey" />
      <home-sub-menu v-show="activeKey === 1" />
    </div>
    <div class="home-content">
      <router-view />
    </div>
    <div class="home-footer"></div>
  </div>
</template>

<script setup lang="ts">
import HomeTopMenu from './components/HomeTopMenu/index.vue'
import HomeSubMenu from './components/HomeSubMenu/index.vue'
import { useMenuStore } from '../../store/homePageMenu'
import { storeToRefs } from 'pinia'

const { activeKey } = storeToRefs(useMenuStore())

const getActiveKey = (key: any) => {
  activeKey.value = key
}
</script>

<style scoped>
.music {
  height: 100vh;
  overflow-x: hidden;
}
.home-menu {
  background-color: #f6f6f6;
}
</style>
