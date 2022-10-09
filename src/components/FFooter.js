import React from 'react'

import './FFooter.css'

import imageff from '../assets/logotype.png'

const FFooter = () => {
  return (
    <div className="ffooter">
      <div className="ffooter-com">
        <h2 className="title-o">Be the first to know about new collections and<br /> everything Givenchy. </h2>
        <div className="logot-f">
          <img className="imagef" src={imageff} />
        </div>
      </div>
      <hr className="h-line"/>
    </div>
  )
}

export default FFooter
