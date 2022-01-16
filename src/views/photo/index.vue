<template>
  <div class="photo">
    <n-back-top listen-to=".photo" :right="100" />

    <div class="header">
      <header-content />
      <header-footer />
    </div>
    <div class="body">
      <body-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderContent from './components/HeaderContent.vue'
import HeaderFooter from './components/HeaderFooter.vue'
import BodyContent from './components/BodyContent.vue'

export default defineComponent({
  name: 'photo-page',
  components: {
    HeaderContent,
    HeaderFooter,
    BodyContent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.photo {
  overflow-x: hidden;
  height: 100vh;
}
.header {
  display: flex;
  width: 100vw;
  height: 500px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url('./img/background.jpg');
}
</style>
