import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.scss'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFound'
import Categories from './components/Main/Categories'
import PlayProvider from './context/PlayProvider'
import SongPlaylist from './components/Song/SongPlaylist'
import AlbumPlaylist from './components/Album/AlbumPlaylist'
import Search from './components/NavBar/Search'
import Library from './components/NavBar/Library'

function App() {
  return (
    <div>
      <PlayProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home/*" element={<HomePage />}>
              <Route path="categories" element={<Categories />} />
              <Route path="search" element={<Search />} />
              <Route path="your-library" element={<Library />} />
              <Route path="playlist/songs" element={<SongPlaylist />}></Route>
              <Route
                path="playlist/album/:id"
                element={<AlbumPlaylist />}
              ></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </PlayProvider>
    </div>
  )
}

export default App
