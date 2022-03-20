<template>
  <div class="warpper">
    <div class="control">
      <template v-for="(item, index) in data" :key="index">
        <div class="card" :style="item.style">
          <div class="content">
            <div class="img">
              <img v-bind:src="getImage(item.image)" alt="" />
            </div>
            <div class="details">
              <span class="name">{{ item.title }}</span>
              <p>{{ item.content }}</p>
            </div>
          </div>
          <a style="cursor: pointer" @click="enter(item.path)">进去看看</a>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import { IData } from './type'
import { useRouter } from 'vue-router'
import { useMessage, NIcon } from 'naive-ui'
import { AnimalCat16Regular } from '@vicons/fluent'

export default defineComponent({
  name: 'excessive-page',
  setup() {
    const router = useRouter()

    const message = useMessage()

    const data = ref<IData[]>([
      {
        title: '三秋的照片墙',
        content: '走过的路和未见过的人',
        style: '--delay: -1',
        image: 'fu',
        path: '/photo'
      },
      {
        title: '三秋的音乐厅',
        content: '来听听我最近听的音乐吧',
        style: '--delay: 0',
        image: 'music',
        path: '/music'
      },
      {
        title: '三秋的电影院',
        content: '或许你也有感触的电影',
        style: '--delay: 1',
        image: 'yourname',
        path: '/movie'
      },
      {
        title: '三秋的自习室',
        content: '记录学习的点滴',
        style: '--delay: 2',
        image: 'pen',
        path: '/study'
      },
      {
        title: '三秋的未定义',
        content: '还没想好做什么，看看别的吧',
        style: '--delay: 2',
        image: 'gao'
      }
    ])

    const getImage = (image: string): string => {
      return new URL(`./img/${image}.jpg`, import.meta.url).href
    }

    const enter = (path: string) => {
      if (path) {
        router.push({
          path: path
        })
      } else {
        message.error('还没想好做什么呢，看看其他的吧QAQ', {
          icon: () => h(NIcon, null, { default: () => h(AnimalCat16Regular) })
        })
      }
    }

    return {
      data,
      getImage,
      enter
    }
  }
})
</script>

<style scoped lang="css">
.warpper {
  height: 100vh;
  background: linear-gradient(to bottom, #bea2e7 0%, #86b7e7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.warpper .card {
  display: flex;
  background: #fff;
  width: 430px;
  align-items: center;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  padding: 20px;
  justify-content: space-between;
  border-radius: 100px 20px 20px 100px;
  animation: animate 15s linear infinite;
  animation-delay: calc(3s * var(--delay));
}
.control {
  width: 30%;
  height: 30%;
}
.warpper .control:hover .card {
  animation-play-state: paused;
}
.warpper .card:last-child {
  animation-delay: calc(-3s * var(--delay));
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(100%) scale(0.5);
  }
  5%,
  20% {
    opacity: 0.4;
    transform: translateY(100%) scale(0.7);
  }
  25%,
  40% {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0%) scale(1);
  }
  45%,
  60% {
    opacity: 0.4;
    transform: translateY(-100%) scale(0.7);
  }
  65%,
  100% {
    opacity: 0;
    transform: translateY(-100%) scale(0.5);
  }
}
.card .content {
  display: flex;
  align-items: center;
}
.warpper .card .img {
  height: 70px;
  width: 70px;
  position: absolute;
  left: 2px;
  background: #fff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.card .img img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.card .details {
  margin-left: 80px;
}
.details span {
  font-weight: 600;
  font-size: 18px;
}
.card a {
  text-decoration: none;
  padding: 7px 18px;
  border-radius: 25px;
  color: #fff;
  background: linear-gradient(to bottom, #bea2e7 0%, #86b7e7 100%);
}
</style>
