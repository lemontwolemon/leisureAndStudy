<script setup lang="ts">
import { useIndexStore } from '../store'
import { storeToRefs } from 'pinia'

const { addCount } = useIndexStore()
const { count, name, doubleCount, doubleCountPlus } = storeToRefs(useIndexStore())
</script>

<template>
  <p>{{ count }}{{ name }}{{ doubleCount }}{{ doubleCountPlus(2) }}</p>
  <n-button @click="addCount(5)"></n-button>
</template>

<style scoped></style>
