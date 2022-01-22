import quRequest from '../index'

enum Search {
  SEARCHHOT = '/playlist/hot'
}

//热搜列表（简略）
export function searchHot() {
  return quRequest.post<any>({
    url: Search.SEARCHHOT
  })
}
