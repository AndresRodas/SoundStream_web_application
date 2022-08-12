import React, { useState, useEffect } from 'react'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { Link } from 'react-router-dom'

import { AlbumService } from '../../services/AlbumService'

const albumService = new AlbumService()

const Album = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    albumService.getAlbums().then(resp => setData(resp.data))
  }, [])

  return (
    <div className="cardsWrap">
      <h2>Explora Álbumes</h2>
      <p className="subText">Descubre los álbumes mas sonados</p>

      <div className="cardsWrapInner">
        {data.map(alb => (
          <div key={alb.id_album}>
            <Link to={`/home/playlist/album/${alb.id_album}`}>
              <div className="card">
                <div className="cardImage">
                  <img
                    src={
                      alb.t_songs[0] !== undefined
                        ? alb.t_songs[0].cover_image_song
                        : 'https://bangbranding.com/blog/wp-content/uploads/2016/11/700x511_SliderInterior.jpg'
                    }
                    alt="radio"
                  />
                </div>
                <div className="cardContent">
                  <h3>{alb.name_album}</h3>
                  <span>
                    {alb.t_songs[0] !== undefined
                      ? alb.t_songs[0].artist_song
                      : 'https://bangbranding.com/blog/wp-content/uploads/2016/11/700x511_SliderInterior.jpg'}
                  </span>
                </div>
                <span className="playIcon">
                  <PlayIcon />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Album
