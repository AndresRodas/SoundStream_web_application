import React, { useContext, useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'

import { types } from '../../context/PlayReducer'
import { PlayContext } from '../../context/PlayProvider'

import { AlbumService } from '../../services/AlbumService'

const albumService = new AlbumService()

const AlbumPlaylist = () => {
  const { id } = useParams()
  const [album, setAlbum] = useState({})
  const [play, dispatch] = useContext(PlayContext)
  console.log(play)

  useEffect(() => {
    albumService.findAlbum(id).then(resp => setAlbum(resp.data))
  }, [])

  const handlePlay = () => {
    dispatch({ type: types.setSource })
    dispatch({ type: types.setSong, newSongs: album.t_songs })
  }

  const handleSong = index => {
    dispatch({ type: types.setSource })
    dispatch({ type: types.setIndex, newIndex: index })
    dispatch({ type: types.setSong, newSongs: album.t_songs })
  }

  function getDuration(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src={
                album.t_songs !== undefined
                  ? album.t_songs[0].cover_image_song
                  : 'https://bangbranding.com/blog/wp-content/uploads/2016/11/700x511_SliderInterior.jpg'
              }
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Álbum</p>
            <h1>{album.name_album}</h1>

            <p className="tagline">
              Descubre nuevas canciones y explora nuevos gustos musicales.
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">
                {album.t_songs !== undefined
                  ? album.t_songs[0].artist_song
                  : 'artist'}
              </p>
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
            {album.t_songs === undefined
              ? ''
              : album.t_songs.map(song => (
                  <li
                    key={song.id_song}
                    onClick={() => {
                      if (album.t_songs !== undefined) {
                        handleSong(album.t_songs.indexOf(song))
                      }
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
                        {getDuration(2, 6)}:{getDuration(0, 5)}{' '}
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

export default AlbumPlaylist
