<template>
  <div class="home-top-menu">
    <div class="logo">
      <img class="logo-img" src="src/assets/img/logo.png" alt="" />
      <span class="logo-name">网抑云音乐</span>
    </div>
    <n-menu
      class="menu"
      v-model:value="activeKey"
      mode="horizontal"
      @update:value="handleUpdateValue"
      :options="menuOptions"
    />
    <qjg-input v-bind="inputData" />
    <a class="login">登录</a>
  </div>
</template>

<script setup lang="ts">
import QjgInput from '@/components/QjgInput/QjgInput.vue'
import { useMenus } from './hooks'

const emit = defineEmits(['activeKey'])

const { activeKey, inputData, menuOptions, store } = useMenus

const handleUpdateValue = (key: any) => {
  store.changeActiveKey(key)
  emit('activeKey', activeKey.value)
}
</script>

<style scoped>
.home-top-menu {
  width: 60%;
  display: flex;
  height: 90px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.logo-img {
  height: 90px;
}
.logo-name {
  height: 90px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Fredoka One', cursive;
}
.menu {
  font-size: 18px;
  padding: 0 20px;
}
.login {
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
}
.login:hover {
  color: #319a7c;
  text-decoration: underline;
}
</style>
