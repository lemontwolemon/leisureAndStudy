<template>
  <div class="classify-photo">
    <section id="slideshow">
      <div class="entire-content">
        <div class="content-carrousel">
          <figure v-for="(item, index) in data" :key="index" class="shadow">
            <img :src="getImage(item.number)" />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'classify-photo',
  setup() {
    const route = useRoute()

    const data = ref<any>([])

    const changeData = () => {
      switch (route.query.city) {
        case '大余':
          for (let i = 1; i < 10; i++) {
            data.value.push({ number: i + '' })
          }
          break
        case '厦门':
          for (let i = 10; i < 19; i++) {
            data.value.push({ number: i + '' })
          }
          break
        case '汕头':
          for (let i = 19; i < 28; i++) {
            data.value.push({ number: i + '' })
          }
          break
        case '东山岛':
          for (let i = 28; i < 37; i++) {
            data.value.push({ number: i + '' })
          }
          break
        case '平潭':
          for (let i = 37; i < 46; i++) {
            data.value.push({ number: i + '' })
          }
          break
        case '上海':
          for (let i = 46; i < 55; i++) {
            data.value.push({ number: i + '' })
          }
          break
      }
    }

    onMounted(() => {
      changeData()
    })

    const getImage = (image: string): string => {
      return new URL(`../img/${image}.jpg`, import.meta.url).href
    }

    return {
      data,
      getImage
    }
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#slideshow {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  padding: 0 0 250px 0;
  background-color: #6adecd;
  box-sizing: border-box;
}
.entire-content {
  margin: auto;
  width: 190px;
  perspective: 1000px;
  position: relative;
  padding-top: 80px;
}

.content-carrousel {
  width: 100%;
  position: absolute;
  float: right;
  animation: rotar 15s infinite linear;
  transform-style: preserve-3d;
}

.content-carrousel:hover {
  animation-play-state: paused;
  cursor: pointer;
}

.content-carrousel figure {
  width: 100%;
  height: 120px;
  border: 1px solid #3b444b;
  overflow: hidden;
  position: absolute;
}

.content-carrousel figure:nth-child(1) {
  transform: rotateY(0deg) translateZ(300px);
}
.content-carrousel figure:nth-child(2) {
  transform: rotateY(40deg) translateZ(300px);
}
.content-carrousel figure:nth-child(3) {
  transform: rotateY(80deg) translateZ(300px);
}
.content-carrousel figure:nth-child(4) {
  transform: rotateY(120deg) translateZ(300px);
}
.content-carrousel figure:nth-child(5) {
  transform: rotateY(160deg) translateZ(300px);
}
.content-carrousel figure:nth-child(6) {
  transform: rotateY(200deg) translateZ(300px);
}
.content-carrousel figure:nth-child(7) {
  transform: rotateY(240deg) translateZ(300px);
}
.content-carrousel figure:nth-child(8) {
  transform: rotateY(280deg) translateZ(300px);
}
.content-carrousel figure:nth-child(9) {
  transform: rotateY(320deg) translateZ(300px);
}
.content-carrousel figure:nth-child(10) {
  transform: rotateY(360deg) translateZ(300px);
}

.shadow {
  position: absolute;
  box-shadow: 0 0 20px 0 #000;
  border-radius: 1px;
}

.content-carrousel img {
  image-rendering: auto;
  transition: all 300ms;
  width: 100%;
  height: 100%;
}

.content-carrousel img:hover {
  transform: scale(1.2);
  transition: all 300ms;
}

@keyframes rotar {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
