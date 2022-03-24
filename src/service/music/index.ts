import quRequest from '../index'
import {
  ILYRIC,
  ISongUrl,
  IPlaylistTrackAll,
  ILikeList,
  IUserPlaylist
} from './type'

enum Search {
  RECOMMENDRESOURCE = '/recommend/resource',
  RECOMMENDSONGS = '/recommend/songs',
  TOPSONG = '/top/song',
  HOTPLAYLIST = '/playlist/hot',
  PLAYLISTDETAIL = '/playlist/detail',
  LYRIC = '/lyric',
  SONGURL = '/song/url',
  PLAYLISTTRACKALL = '/playlist/track/all',
  LIKELIST = '/likelist',
  SONGDETAIL = '/song/detail',
  USERPLAYLIST = '/user/playlist'
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
//获取歌单详情
export function playListDetail(data: any) {
  return quRequest.get({
    url: Search.PLAYLISTDETAIL,
    params: data
  })
}
//获取歌词
export function lyric(data: ILYRIC) {
  return quRequest.get({
    url: Search.LYRIC,
    params: data
  })
}
//获取音乐 url
export function songUrl(data: ISongUrl) {
  return quRequest.get({
    url: Search.SONGURL,
    params: data
  })
}
//获取歌单所有歌曲
export function playlistTrackAll(data: IPlaylistTrackAll) {
  return quRequest.get({
    url: Search.PLAYLISTTRACKALL,
    params: data
  })
}
//喜欢音乐列表
export function likeList(data: ILikeList) {
  return quRequest.get({
    url: Search.LIKELIST,
    params: data
  })
}
//获取歌曲详情
export function songDetail(data: any) {
  return quRequest.get({
    url: Search.SONGDETAIL,
    params: data
  })
}
//获取用户歌单
export function userPlaylist(data: IUserPlaylist) {
  return quRequest.get({
    url: Search.USERPLAYLIST,
    params: data
  })
}
