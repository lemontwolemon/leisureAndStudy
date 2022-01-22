<template>
  <div class="home-sub-menu">
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      class="menu"
      @update:value="handleUpdateValue"
      :options="menuOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { useMenus } from './hooks'
const { activeKey, menuOptions, handleUpdateValue } = useMenus
</script>

<style scoped>
.home-sub-menu {
  width: 60%;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: center;
  margin: 0 auto;
  border-top: 1px solid #000;
}
.menu {
  font-size: 18px;
}
</style>
