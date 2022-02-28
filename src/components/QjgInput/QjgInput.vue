<template>
  <div class="searchBox">
    <input type="text" :placeholder="props.placeholder" />
    <search12-regular class="icon" />
  </div>
</template>

<script setup lang="ts">
import { Search12Regular } from '@vicons/fluent'
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入你想搜索的',
    required: true
  }
})
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.searchBox {
  position: relative;
  width: 65px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.searchBox:hover {
  width: 400px;
}
.searchBox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  background: linear-gradient(#fff, #fff, #e3e3e3);
  z-index: 1;
  filter: blur(1px);
}
.searchBox::after {
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  width: 10px;
  height: 100%;
  background: #9d9d9d;
  z-index: 1;
  filter: blur(1px);
}
.searchBox input {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px 25px;
  outline: none;
  font-size: 1.1em;
  color: #555;
  background: linear-gradient(#dbdae1, #a3aaba);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), 15px 15px 15px rgba(0, 0, 0, 0.1),
    20px 20px 15px rgba(0, 0, 0, 0.1), 30px 30px 30px rgba(0, 0, 0, 0.1),
    inset 1px 1px 2px #fff;
}
.searchBox input::placeholder,
.searchBox input {
  color: transparent;
}
.searchBox:hover input::placeholder,
.searchBox:hover input {
  color: #555;
}
.icon {
  position: absolute;
  color: #555;
  font-size: 1.5em;
  cursor: pointer;
  width: 30px;
  right: 18px;
}
</style>
