<template>
  <div class="header-footer">
    <div class="card" v-for="(item, index) in data" :key="index">
      <div class="card-avatar">
        <n-avatar round size="small" :src="getImage(item.avatar)" />
      </div>
      <div class="card-content">
        <a class="enter" @click="enter(item.title)">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IData } from '../types'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'header-footer',
  setup() {
    const router = useRouter()

    const data = ref<IData[]>([
      {
        avatar: 'xiamen',
        title: '厦门'
      },
      {
        avatar: 'shantou',
        title: '汕头'
      },
      {
        avatar: 'dayu',
        title: '大余'
      },
      {
        avatar: 'dongshandao',
        title: '东山岛'
      },
      {
        avatar: 'shanghai',
        title: '上海'
      },
      {
        avatar: 'pingtan',
        title: '平潭'
      }
    ])

    const getImage = (image: string): string => {
      return new URL(`../img/${image}.jpg`, import.meta.url).href
    }

    const enter = (title: string) => {
      router.push({
        path: './classify',
        query: {
          city: title
        }
      })
    }

    return {
      data,
      enter,
      getImage
    }
  }
})
</script>

<style scoped>
.header-footer {
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.card {
  display: flex;
  width: 80px;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  margin-right: 8px;
  border-radius: 20px;
  padding: 5px 17px 5px 5px;
  background-color: #fff;
}
.card-avatar {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.card-content {
  display: flex;
  align-items: center;
}
.enter {
  cursor: pointer;
}
</style>
