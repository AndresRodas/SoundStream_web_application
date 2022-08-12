import React, { useContext, useState, useEffect } from 'react'

import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'

import { types } from '../../context/PlayReducer'
import { PlayContext } from '../../context/PlayProvider'

import { SongService } from '../../services/SongService'

const songService = new SongService()

const SongPlaylist = () => {
  const [data, setData] = useState([])
  const [play, dispatch] = useContext(PlayContext)
  console.log(play)
  const handlePlay = () => {
    dispatch({ type: types.setSource })
    dispatch({ type: types.setSong, newSongs: data })
  }

  const handleSong = index => {
    dispatch({ type: types.setSource })
    dispatch({ type: types.setIndex, newIndex: index })
    dispatch({ type: types.setSong, newSongs: data })
  }

  function getDuration(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  useEffect(() => {
    songService.getSongs().then(resp => setData(resp.data))
  }, [])

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>Canciones</h1>

            <p className="tagline">
              Descubre nuevas canciones y explora nuevos gustos musicales.
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">SoundStream</p>
              <span>699,428 likes</span>
              <span>1hr 23 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon" onClick={handlePlay}>
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>

          <ul className="songList">
            {data.map(song => (
              <li
                key={song.id_song}
                onClick={() => {
                  handleSong(data.indexOf(song))
                }}
              >
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>{song.name_song}</h3>
                  <span>{song.artist_song}</span>
                </div>
                <div className="songTime">
                  <span>
                    {getDuration(2, 6)}:{getDuration(0, 5)}
                    {getDuration(0, 9)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SongPlaylist
