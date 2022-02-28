import quRequest from '../index'

enum Search {
  RECOMMENDRESOURCE = '/recommend/resource',
  SEARCHHOT = '/playlist/hot'
}

//热搜列表（简略）
export function searchHot() {
  return quRequest.post<any>({
    url: Search.SEARCHHOT
  })
}
//获取每日推荐歌单
export function recommendResource() {
  return quRequest.post({
    url: Search.RECOMMENDRESOURCE
  })
}
