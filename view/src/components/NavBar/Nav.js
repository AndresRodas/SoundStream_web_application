import React, { useContext } from 'react'
import { ReactComponent as HomeIcon } from '../../svgs/home.svg'
import { ReactComponent as SearchIcon } from '../../svgs/search.svg'
import { ReactComponent as LibraryIcon } from '../../svgs/library.svg'
import { ReactComponent as SoundIcon } from '../../svgs/soundstream.svg'
import { Link } from 'react-router-dom'

import { PlayContext } from '../../context/PlayProvider'

const Nav = () => {
  const [play, dispatch] = useContext(PlayContext)
  console.log(dispatch)
  const { index, songs } = play
  return (
    <div className="navBar">
      <Link to="/home/categories">
        <div className="logo">
          <svg viewBox="0 0 1070 530">
            <title>SoundStream</title>
            <SoundIcon />
          </svg>
        </div>
      </Link>
      <ul>
        <Link to="/home/categories">
          <li className="active">
            <HomeIcon />
            Inicio
          </li>
        </Link>
        <Link to="/home/search">
          <li>
            <SearchIcon />
            Buscar
          </li>
        </Link>
        <Link to="/home/your-library">
          <li>
            <LibraryIcon />
            Playlist
          </li>
        </Link>
      </ul>

      <img
        style={{
          marginTop: '40%',
          width: '100%',
          height: '33%'
        }}
        alt="Album"
        src={songs[index].cover_image_song}
      />
    </div>
  )
}

export default Nav
