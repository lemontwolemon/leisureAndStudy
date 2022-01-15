<template>
  <n-config-provider>
    <n-message-provider>
      <router-view />
    </n-message-provider>
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
