<template>
  <n-spin :show="show" size="large">
    <div ref="playerRef" class="mainPage"></div>
  </n-spin>
</template>

<script lang="ts" setup>
import APlayer from 'APlayer'
import { player } from './player'
import 'APlayer/dist/APlayer.min.css'
import type { PropType } from '@vue/runtime-core'
import emitter from '../../../components/eventBus'
import { lyric, songUrl } from '../../../service/music'

const playerRef = ref()
let instance: any

class Audio {
  artist: string
  name: string
  url: string
  cover: string
  lrc: string

  constructor(
    artist: string,
    name: string,
    url: string,
    cover: string,
    lrc: string
  ) {
    this.artist = artist
    this.name = name
    this.url = url
    this.cover = cover
    this.lrc = lrc
  }
}

const props = defineProps({
  fixed: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  mini: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  autoplay: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  theme: {
    type: String as PropType<string>,
    default: 'rgba(110,255,255,0.2)'
  },
  loop: {
    type: String as PropType<'all' | 'one' | 'none'>,
    default: 'all'
  },
  order: {
    type: String as PropType<'list' | 'random'>,
    default: 'random'
  },
  preload: {
    type: String as PropType<'auto' | 'metadata' | 'none'>,
    default: 'auto'
  },
  volume: {
    type: Number as PropType<number>,
    default: 0.7,
    validator: (value: number) => {
      return value >= 0 && value <= 1
    }
  },
  songServer: {
    type: String as PropType<
      'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'
    >,
    default: 'netease'
  },
  songType: {
    type: String as PropType<string>,
    default: 'playlist'
  },
  songId: {
    type: String as PropType<string>,
    default: '19723756'
  },
  mutex: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  lrcType: {
    type: Number as PropType<number>,
    default: 3
  },
  listFolded: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  listMaxHeight: {
    type: String as PropType<string>,
    default: '100px'
  },
  storageName: {
    type: String as PropType<string>,
    default: 'aplayer-setting'
  }
})

const info = ref<any>()

let url: any = ''

const show = ref<boolean>(false)

emitter.on('info', (e: any) => {
  info.value = e
  show.value = true
  if (info.value.type || info.value.creator) {
    player
      .getSongSheet(props.songServer, props.songType, info.value.id)
      .then((res: any) => {
        let audioList = res.data.map(
          (value: any) =>
            new Audio(
              value.author,
              value.title,
              value.url,
              value.pic,
              value.lrc
            )
        )
        instance = new APlayer({
          container: playerRef.value,
          fixed: props.fixed,
          mini: props.mini,
          autoplay: true,
          theme: props.theme,
          loop: props.loop,
          order: props.order,
          preload: props.preload,
          volume: props.volume,
          mutex: props.mutex,
          lrcType: props.lrcType,
          listFolded: props.listFolded,
          listMaxHeight: props.listMaxHeight,
          storageName: props.storageName,
          audio: audioList
        })
        show.value = false
      })
  } else {
    songUrl({ id: info.value.id }).then((value: any) => {
      url = value.data[0].url
      lyric({ id: info.value.id }).then((res: any) => {
        let differenceArName: any = ''
        let differenceArPicUrl: any = ''
        if (info.value.ar) {
          differenceArName = info.value.ar[0].name
          differenceArPicUrl = info.value.al.picUrl
        } else if (info.value.artists) {
          differenceArName = info.value.artists[0].name
          differenceArPicUrl = info.value.picUrl
        }
        let audioList = new Audio(
          differenceArName,
          info.value.name,
          url,
          differenceArPicUrl,
          res.lrc.lyric
        )
        instance = new APlayer({
          container: playerRef.value,
          fixed: props.fixed,
          mini: props.mini,
          autoplay: true,
          theme: props.theme,
          loop: props.loop,
          order: props.order,
          preload: props.preload,
          volume: props.volume,
          mutex: props.mutex,
          lrcType: 2,
          listFolded: props.listFolded,
          listMaxHeight: props.listMaxHeight,
          storageName: props.storageName,
          audio: audioList
        })
        show.value = false
      })
    })
  }
})

onMounted(() => {
  nextTick(() => {
    player
      .getSongSheet(props.songServer, props.songType, props.songId)
      .then((res: any) => {
        let audioList = res.data.map(
          (value: any) =>
            new Audio(
              value.author,
              value.title,
              value.url,
              value.pic,
              value.lrc
            )
        )
        setTimeout(() => {
          instance = new APlayer({
            container: playerRef.value,
            fixed: props.fixed,
            mini: props.mini,
            autoplay: props.autoplay,
            theme: props.theme,
            loop: props.loop,
            order: props.order,
            preload: props.preload,
            volume: props.volume,
            mutex: props.mutex,
            lrcType: props.lrcType,
            listFolded: props.listFolded,
            listMaxHeight: props.listMaxHeight,
            storageName: props.storageName,
            audio: audioList
          })
        }, 300)
      })
  })
})
onBeforeUnmount(() => {
  instance.destroy()
})
</script>

<style lang="less" scoped></style>
