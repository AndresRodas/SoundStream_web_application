import React from 'react'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { Link } from 'react-router-dom'

const Songs = () => {
  return (
    <div className="cardsWrap">
      <h2>Explora Pistas</h2>
      <p className="subText">Navega en todo el repertorio</p>
      <div className="cardsWrapInner">
        <Link to={`/home/playlist/songs`}>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://directory.airtm.com/media/cache/small/custom/domain_1/image_files/1948_photo_6100.jpg"
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
        </Link>
      </div>
    </div>
  )
}

export default Songs
