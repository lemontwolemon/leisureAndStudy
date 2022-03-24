<template>
  <div class="like-song">
    <n-data-table
      :columns="columns"
      :data="TableData"
      :pagination="pagination"
      :bordered="false"
    />
  </div>
</template>

<script setup lang="ts">
import { likeList, songDetail } from '../../../../../../service/music'
import { storage } from '@/utils/localStorage/localStorage'
import { NGradientText, DataTableColumns } from 'naive-ui'
import emitter from '@/components/eventBus'

const info = storage.get('info')

const TableData = ref<any>()

const pagination = {
  pageSize: 10
}

const createColumns = ({
  play
}: {
  play: (row: any) => void
}): DataTableColumns<any> => {
  return [
    {
      title: '歌曲',
      key: 'name',
      width: '60%',
      className: 'name',
      ellipsis: {
        tooltip: true
      },
      render(row: any) {
        return h(
          NGradientText,
          {
            type: 'success',
            onClick: () => play(row)
          },
          { default: () => row.name }
        )
      }
    },
    {
      title: '歌手',
      key: 'artist',
      width: '15%',
      ellipsis: {
        tooltip: true
      }
    },
    {
      title: '专辑',
      key: 'album',
      width: '15%',
      ellipsis: {
        tooltip: true
      }
    },
    {
      title: '时长',
      key: 'dt',
      width: '10%',
      ellipsis: {
        tooltip: true
      }
    }
  ]
}

const columns = createColumns({
  play(row: any) {
    emitter.emit('info', row)
  }
})

const formatSeconds = (msTime: number) => {
  let time = msTime / 1000

  let minute: any = Math.floor(time / 60) % 60

  minute = minute.toString().padStart(2, '0')

  let second: any = Math.floor(time) % 60

  second = second.toString().padStart(2, '0')

  return `${minute}:${second}`
}

const getLikeList = () => {
  const postData = {
    uid: info.account.id
  }
  likeList(postData).then((res: any) => {
    const postDetailData = {
      ids: ''
    }
    for (const id of res.ids) {
      if (id === res.ids[0]) {
        postDetailData.ids = id
      } else {
        postDetailData.ids = postDetailData.ids + ',' + id
      }
    }
    songDetail(postDetailData).then((a: any) => {
      TableData.value = a.songs.map((b: any) => {
        b.dt = formatSeconds(b.dt)
        b.artist = b.ar[0].name
        b.album = b.al.name
        return b
      })
    })
  })
}

onMounted(() => {
  getLikeList()
})
</script>

<style lang="less" scoped>
.like-song {
  :deep(.n-data-table .n-data-table__pagination) {
    justify-content: center;
  }
  :deep(.name) {
    cursor: pointer;
  }
}
</style>
