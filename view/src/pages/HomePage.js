import { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { Outlet } from 'react-router-dom'
import 'react-h5-audio-player/lib/styles.css'
import Nav from '../components/NavBar/Nav'

import { types } from '../context/PlayReducer'
import { PlayContext } from '../context/PlayProvider'

export default function Player() {
  const [play, dispatch] = useContext(PlayContext)
  const { index, songs } = play

  const toDay = new Date()

  const handleClickPrevious = () => {
    dispatch({ type: types.setIndexPrev })
    dispatch({ type: types.loadSong })
  }

  const handleClickNext = () => {
    dispatch({ type: types.setIndexNext })
    dispatch({ type: types.loadSong })
  }

  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <div className="main">
          <div className="upperNav">
            <h1>
              {toDay.getHours() < 12
                ? 'Buenos días'
                : toDay.getHours() > 18
                ? 'Buenas noches'
                : 'Buenas tardes'}
            </h1>
          </div>
          <div className="mainContent">
            <Outlet />
          </div>
        </div>
      </div>
      <AudioPlayer
        style={{
          background: '#BCA8D6',
          height: '20vh',
          color: 'black'
        }}
        src={songs[index].file_name_song}
        showSkipControls={true}
        showJumpControls={true}
        header={`${songs[index].name_song} - ${
          songs[index].artist_song !== undefined
            ? songs[index].artist_song
            : '-- --'
        }`}
        autoPlayAfterSrcChange={true}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  )
}
