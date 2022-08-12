import React, { useContext, useEffect, useState } from 'react'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'

import { types } from '../../context/PlayReducer'
import { PlayContext } from '../../context/PlayProvider'

import { SongService } from '../../services/SongService'

const songService = new SongService()

const Radio = () => {
  const [play, dispatch] = useContext(PlayContext)
  console.log(play)
  const [songs, setSongs] = useState([])

  useEffect(() => {
    songService.getSongs().then(resp => setSongs(resp.data))
  }, [])

  const handlePlay = () => {
    dispatch({ type: types.setSource })
    dispatch({
      type: types.setSong,
      newSongs: shuffleArray(songs)
    })
  }

  const shuffleArray = inputArray => {
    return inputArray?.sort(() => Math.random() - 0.5)
  }

  return (
    <div className="cardsWrap">
      <h2>Radio</h2>
      <p className="subText">Navega y descubre nuevas canciones</p>
      <div className="cardsWrapInner" onClick={handlePlay}>
        <div className="card">
          <div className="cardImage">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTd7c5B_HVmlhGkREE-X2vEYWxTxA3zQT2A&usqp=CAU"
              alt="radio"
            />
          </div>
          <div className="cardContent">
            <h3>SoundStream</h3>
            <span>Musica para ti...</span>
          </div>
          <span className="playIcon">
            <PlayIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Radio
