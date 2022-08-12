import axios from 'axios'
const host = process.env.REACT_APP_SERVER

export class SongService {
  async getSongs() {
    return (await axios.get(`${host}/api/streaming/song/getSongs`)).data
  }

  async playSong(id) {
    return (await axios.get(`${host}/api/streaming/song/playSong/${id}`)).data
  }
}
