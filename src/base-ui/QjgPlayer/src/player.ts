import axios from 'axios'
export class player {
  static getSongSheet(server: string, type: string, id: string) {
    return axios.get(
      `https://api.i-meto.com/meting/api?server=${server}&type=${type}&id=${id}&r=${Math.random()}`
    )
  }
}
