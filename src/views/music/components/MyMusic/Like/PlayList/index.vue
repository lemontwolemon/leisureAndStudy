<template>
  <div class="like-playlist">
    <n-data-table
      :columns="columns"
      :data="TableData"
      :pagination="pagination"
      :bordered="false"
    />
  </div>
</template>

<script setup lang="ts">
import { userPlaylist } from '@/service/music'
import { storage } from '@/utils/localStorage/localStorage'
import {
  NGradientText,
  DataTableColumns,
  NImage,
  NSpace,
  NIcon
} from 'naive-ui'
import emitter from '@/components/eventBus'
import { CaretForwardCircleOutline } from '@vicons/ionicons5'

const info = storage.get('info')

const TableData = ref<any>()

let pagination = ref<any>({ pageSize: 10 })

const createColumns = ({
  play,
  enter,
  out
}: {
  play: (row: any) => void
  enter: (row: any) => void
  out: (row: any) => void
}): DataTableColumns<any> => {
  return [
    {
      title: '歌单',
      key: 'name',
      width: '60%',
      className: 'name',
      ellipsis: {
        tooltip: true
      },
      render(row: any) {
        return h(
          NSpace,
          {
            justify: 'space-between',
            style: { width: '650px', display: 'flex', alignItems: 'center' },
            onMouseenter: () => enter(row),
            onMouseleave: () => out(row)
          },
          {
            default: () => [
              h(
                NSpace,
                { style: { display: 'flex', alignItems: 'center' } },
                {
                  default: () => [
                    h(NImage, {
                      src: row.coverImgUrl,
                      width: 50,
                      height: 50
                    }),
                    h(
                      NGradientText,
                      {
                        type: 'success'
                      },
                      { default: () => row.name }
                    )
                  ]
                }
              ),
              h(NIcon, {
                size: 40,
                component: CaretForwardCircleOutline,
                color: '#2caf6f',
                style: { opacity: row.isShow === true ? '1' : '0' },
                onClick: () => play(row)
              })
            ]
          }
        )
      }
    },
    {
      title: '曲目数',
      key: 'trackCount',
      width: '15%',
      ellipsis: {
        tooltip: true
      }
    },
    {
      title: '创建人',
      key: 'creator.nickname',
      width: '15%',
      ellipsis: {
        tooltip: true
      }
    },
    {
      title: '播放量',
      key: 'playCount',
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
  },
  enter(row: any) {
    row.isShow = true
  },
  out(row: any) {
    row.isShow = false
  }
})

const formatSeconds = (playCount: number) => {
  let count = playCount / 10000

  let wan: any = count.toFixed(1)

  wan = wan.toString()

  return `${wan}`
}

const getUserPlaylist = () => {
  const postData = {
    uid: info.account.id
  }
  userPlaylist(postData).then((res: any) => {
    TableData.value = res.playlist.map((a: any) => {
      if (a.playCount >= 10000) {
        a.playCount = formatSeconds(a.playCount) + '万'
      }
      a.isShow = false
      return a
    })
    for (const data of TableData.value) {
      if (data === TableData.value[0]) {
        TableData.value = TableData.value.filter((item: any) => {
          return item !== data
        })
        break
      }
    }
    if (TableData.value.length < 11) {
      pagination.value = false
    }
  })
}

onMounted(() => {
  getUserPlaylist()
})
</script>

<style scoped lang="less">
.like-playlist {
  :deep(.n-data-table .n-data-table__pagination) {
    justify-content: center;
  }
  :deep(.name) {
    cursor: pointer;
  }
}
</style>
