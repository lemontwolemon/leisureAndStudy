interface ILYRIC {
  id: number
}

interface ISongUrl {
  id: number
  br?: any
}

interface IPlaylistTrackAll {
  id: number
  limit?: number
  offset?: number
}

interface ILikeList {
  uid: number
}

export { ILYRIC, ISongUrl, IPlaylistTrackAll, ILikeList }
