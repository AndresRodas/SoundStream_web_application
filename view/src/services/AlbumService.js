import axios from 'axios'
const host = process.env.REACT_APP_SERVER

export class AlbumService {
  async getAlbums() {
    return (await axios.get(`${host}/api/streaming/album/getAlbums`)).data
  }

  async findAlbum(id) {
    return (await axios.get(`${host}/api/streaming/album/findAlbum/${id}`)).data
  }
}
