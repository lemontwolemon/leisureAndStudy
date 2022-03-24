<template>
  <div class="music">
    <n-back-top listen-to=".music" :right="100" />
    <div class="home-menu">
      <home-top-menu />
    </div>
    <div class="home-content">
      <router-view />
    </div>
    <div class="qjg-player">
      <qjg-player />
    </div>
    <div class="home-footer"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.music {
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  .qjg-player {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
  }
}
.home-menu {
  background-color: #f6f6f6;
}
</style>
