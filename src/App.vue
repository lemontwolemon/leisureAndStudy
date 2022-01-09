<template>
  <n-config-provider>
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { zhCN, dateZhCN } from 'naive-ui'

export default defineComponent({
  setup() {
    return {
      zhCN,
      dateZhCN
    }
  }
})
</script>
