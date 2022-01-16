import { ref } from 'vue'

const travelData = ref<any>([])
const catData = ref<any>([])

for (let i = 1; i < 145; i++) {
  travelData.value.push({ number: i + '' })
}

for (let i = -1; i > -18; i--) {
  catData.value.push({ number: i + '' })
}

export { travelData, catData }
