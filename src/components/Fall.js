import React from 'react'

import './Fall.css'

import Imghe from '../assets/image-3.jpg'
import Imghi from '../assets/image-4.jpg'

const Fall = () => {
  return (
    <div className="fall">
      <div className="f-com">
        <div className="f-image">
          <div className="f-imageo">
            <h2 className="f-text">Fall Winter 2022 Collection</h2>
            <div className="f-links">
              <a className="a black">FOR HER</a>
            </div>
            <img className="f-img" src={Imghe} />
          </div>
          <div className="f-imaget">
            <h2 className="f-text">Fall Winter 2022 Collection</h2>
            <div className="f-links">
              <a className="a black">FOR HIM</a>
            </div>
            <img className="f-img" src={Imghi} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fall
