import React from 'react'

import './Bag.css'

import imageb from '../assets/image5.jpg'

const Bag = () => {
  return (
    <div className="bag">
      <div className="i-text-com">
        <h2 className="i-text">The New Givenchy Bag</h2>
        <div className="i-links">
          <a href="" className="a black">FOR HER</a>
        </div>
      </div>
      <div className="i-image">
        <img className='imagetwo' src={imageb} />
      </div>
    </div>
  )
}

export default Bag
