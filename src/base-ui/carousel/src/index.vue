<template>
  <div class="carousel">
    <div class="carousel-header">
      <h2 style="font-size: 30px">{{ props.title }}</h2>
    </div>
    <div class="carousel-tab">
      <n-menu
        v-if="props.menuData"
        :value="props.menuData.activeKey"
        mode="horizontal"
        :options="props.menuData.menuOptions"
      />
    </div>
    <div class="carousel-content">
      <n-carousel :space-between="20" :loop="true" show-arrow draggable>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="curtom-arrow--left" @click="prev">
              <n-icon size="40">
                <ChevronBackCircleOutline class="icon-left" />
              </n-icon>
            </button>
            <button type="button" class="curtom-arrow--right" @click="next">
              <n-icon size="40"
                ><ChevronForwardCircleOutline class="icon-right"
              /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              :key="index"
              @click="to(index - 1)"
            ></li>
          </ul>
        </template>
        <div v-for="(item, index) in data" :key="index">
          <n-grid x-gap="12" :cols="5">
            <n-gi v-for="subItem in item" :key="subItem.id">
              <div>
                <div class="allImage">
                  <img class="image" :src="subItem.picUrl" />
                  <n-icon
                    size="40"
                    style="
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                    "
                  >
                    <PlayCircleOutline class="imageIcon" />
                  </n-icon>
                </div>
                <div>
                  <p
                    style="
                      font-size: 13px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      cursor: pointer;
                    "
                    :title="subItem.name"
                  >
                    {{ subItem.name }}
                  </p>
                  <p style="font-size: 13px; color: #999">
                    播放量：{{ format(subItem.playcount) }}
                  </p>
                </div>
              </div>
            </n-gi>
          </n-grid>
        </div>
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronBackCircleOutline,
  ChevronForwardCircleOutline,
  PlayCircleOutline
} from '@vicons/ionicons5'
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: {
    type: String
  },
  menuData: {
    type: Object
  },
  data: {
    type: Array
  }
})

const againGroup = (data: any, num: number) => {
  let result = []
  for (let i = 0, len = data.length; i < len; i += num) {
    result.push(data.slice(i, i + num))
  }
  return result
}

const format = computed(() => {
  return (num: any) => {
    num = Number(num)
    if (num === 0) {
      return num + ''
    } else if (num > 1 && num < 10000) {
      return num + ''
    } else {
      return (num / 10000).toFixed(1) + '万'
    }
  }
})

const data = ref<any>('')
setTimeout(() => {
  data.value = againGroup(props.data, 5)
}, 200)
</script>

<style scoped>
.carousel {
  width: 60%;
  margin: 0 auto;
}

.carousel-header {
  padding: 50px 0 24px 0;
  display: flex;
  justify-content: center;
}

.carousel-tab {
  display: flex;
  justify-content: center;
}

.curtom-arrow--left {
  position: absolute;
  width: 50px;
  height: 200px;
  left: 0;
  top: 0;
  background-color: rgba(236, 236, 236, 0);
  border: 0;
  cursor: pointer;
}

.icon-left {
  color: rgba(226, 226, 226, 0);
  transition: color 1s;
}

.curtom-arrow--left:hover .icon-left {
  color: greenyellow;
}

.curtom-arrow--right {
  position: absolute;
  width: 50px;
  height: 200px;
  right: 20px;
  top: 0;
  background-color: rgba(236, 236, 236, 0);
  border: 0;
  cursor: pointer;
}

.icon-right {
  color: rgba(226, 226, 226, 0);
  transition: color 1s;
}

.curtom-arrow--right:hover .icon-right {
  color: greenyellow;
}

.allImage {
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.imageIcon {
  color: rgba(0, 0, 0, 0);
  transition: color 1s;
  cursor: pointer;
}

.allImage:hover .imageIcon {
  color: greenyellow;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 580px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(173, 255, 47, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: rgb(173, 255, 47);
}
.image {
  cursor: pointer;
  width: 200px;
  height: 200px;
  transition: all 0.6s;
}
.image:hover {
  transform: scale(1.2);
}
</style>
