import { useReducer, createContext } from 'react'
import playReducer, { initialPlay } from './PlayReducer'

const PlayContext = createContext()

const PlayProvider = ({ children }) => {
  const [play, dispatch] = useReducer(playReducer, initialPlay)
  return (
    <PlayContext.Provider value={[play, dispatch]}>
      {children}
    </PlayContext.Provider>
  )
}

export { PlayContext }
export default PlayProvider
