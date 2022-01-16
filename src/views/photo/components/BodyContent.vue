<template>
  <div class="body-content">
    <n-tabs default-value="travel" justify-content="space-evenly" type="line">
      <n-tab-pane name="travel" tab="旅游照片">
        <waterfall-photo :data="travelData" />
      </n-tab-pane>
      <n-tab-pane name="cats" tab="喜欢的猫">
        <waterfall-photo :data="catData" />
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WaterfallPhoto from '../../../base-ui/waterfallPhoto'
import { photoData } from './hooks'

export default defineComponent({
  name: 'body-content',
  components: {
    WaterfallPhoto
  },
  setup() {
    const { travelData, catData } = photoData
    return {
      travelData,
      catData
    }
  }
})
</script>

<style scoped></style>
