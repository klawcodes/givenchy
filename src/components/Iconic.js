import React from 'react'

import './Iconic.css'

import image2 from '../assets/image-2.jpg'

const Iconic = () => {
  return (
    <div className="iconic">
      <div className="i-text-com">
        <h2 className="i-text">Givenchy Iconics</h2>
        <div className='i-links'>
          <a href='' className='a black'>ICONICS</a> 
          <a href='' className='a black'>BOOTS FOR HER</a>
        </div>
      </div>
      <div className="i-image">
        <img className="imagetwo" src={image2} />
      </div>
    </div>
  )
}

export default Iconic
