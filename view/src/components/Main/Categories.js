import React, { useRef } from 'react'

import Radio from '../Radio/Radio'
import Songs from '../Song/Songs'
import Album from '../Album/Album'

const Categories = props => {
  const mainInnerRef = useRef()

  return (
    <div className="mainInner" ref={mainInnerRef}>
      <Radio />
      <Album />
      <Songs />
    </div>
  )
}

export default Categories
