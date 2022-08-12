import { SongService } from '../services/SongService'
const songService = new SongService()
const types = {
  setIndexPrev: 0,
  setIndexNext: 1,
  setSong: 3,
  setSource: 4,
  setIndex: 5,
  loadSong: 6
}

const initialPlay = {
  index: 0,
  songs: [
    {
      file_name_song: '',
      name_song: '-- --',
      cover_image_song:
        'https://bangbranding.com/blog/wp-content/uploads/2016/11/700x511_SliderInterior.jpg'
    }
  ]
}

const playReducer = (state, action) => {
  if (state.songs[state.index] !== undefined)
    getSong(state.songs[state.index].id_song)
  switch (action.type) {
    case types.setIndexPrev:
      return {
        ...state,
        index: state.index === 0 ? state.songs.length - 1 : state.index - 1
      }
    case types.setIndexNext:
      return {
        ...state,
        index: state.index < state.songs.length - 1 ? state.index + 1 : 0
      }
    case types.setSong:
      return {
        ...state,
        songs: action.newSongs
      }
    case types.setSource:
      return {
        ...state,
        index: 0,
        songs: [{ file_name_song: '', name_song: '-- --' }]
      }
    case types.setIndex:
      return {
        ...state,
        index: action.newIndex
      }
    default:
      return state
  }
}

const getSong = id => {
  songService.playSong(id)
}

export { types }
export { initialPlay }
export default playReducer
