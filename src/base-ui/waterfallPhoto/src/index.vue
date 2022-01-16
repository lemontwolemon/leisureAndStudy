<template>
  <div class="waterfall-photo">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <img :src="getImage(item.number)" loading="lazy" />
      </li>
      <!--  在最后加一个空的<li>,这样最后一张图片就不会铺满  -->
      <li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'waterfall-photo',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup() {
    const getImage = (image: string): string => {
      return new URL(`../img/${image}.jpg`, import.meta.url).href
    }
    return {
      getImage
    }
  }
})
</script>

<style scoped lang="scss">
.waterfall-photo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
// BASIC
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  height: 40vh;
  flex-grow: 1;
  list-style: none;
  margin: 10px 10px;
}

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

// ADVANCED

// Portrait

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

// Short screens

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
