import React from 'react'

import './Hero.css'

import imageo from '../assets/image-1.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <h2 className="title-o">Women’s Spring Summer 2023 show</h2>
      <a href="" className="a">DISCOVER MORE</a>
      <div className="image-1">
        <img className="imageone" src={imageo} />
      </div>
    </div>
  )
}

export default Hero
