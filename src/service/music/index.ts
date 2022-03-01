import quRequest from '../index'

enum Search {
  RECOMMENDRESOURCE = '/recommend/resource',
  RECOMMENDSONGS = '/recommend/songs',
  TOPSONG = '/top/song',
  HOTPLAYLIST = '/playlist/hot',
  PLAYLISTDETAIL = '/playlist/detail'
}
//获取每日推荐歌单
export function recommendResource() {
  return quRequest.post({
    url: Search.RECOMMENDRESOURCE
  })
}
//获取每日推荐歌曲
export function recommendSongs() {
  return quRequest.post({
    url: Search.RECOMMENDSONGS
  })
}
//新歌速递
export function topSong(data: any) {
  return quRequest.get({
    url: Search.TOPSONG,
    params: data
  })
}
//热门歌单分类
export function hotPlayList() {
  return quRequest.get({
    url: Search.HOTPLAYLIST
  })
}
//获取歌单所有歌曲
export function playListDetail(data: any) {
  return quRequest.get({
    url: Search.PLAYLISTDETAIL,
    params: data
  })
}
