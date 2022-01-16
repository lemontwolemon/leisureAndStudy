<template>
  <div class="header-content">
    <div class="describe">
      <p>到过的地方和拍过的照片。</p>
    </div>
    <div class="search">
      <n-input
        @focusin="handleSearch"
        @focusout="handleSearch"
        placeholder="搜索图片和类型"
        size="large"
        round
      >
        <template #suffix>
          <n-icon class="icon" @click="handleSearch">
            <Search12Filled />
          </n-icon>
        </template>
      </n-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Search12Filled } from '@vicons/fluent'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header-content',
  components: {
    Search12Filled
  },
  setup() {
    const handleSearch = () => {
      console.log('search')
    }

    return {
      handleSearch
    }
  }
})
</script>

<style scoped>
.header-content {
  color: #fff;
  width: 650px;
}
.describe {
  font-size: 36px;
  width: 100%;
  line-height: 48px;
  font-weight: 700;
  margin-top: 0;
  text-align: center;
  margin-bottom: 15px;
}
.search {
  width: 100%;
}
.icon {
  cursor: pointer;
}
</style>
