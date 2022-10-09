import React, { useState } from 'react'
import './Navbar.css'

import Logo from '../assets/apple-touch-icon.png'
import Logot from '../assets/logotype.png'

const Navbar = () => {

  const [color, setColor] = useState(false)
  const changeColor =() => {
    if(window.scrollY >= 1000 && window.scrollY < 5000) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

    window.addEventListener('scroll', changeColor)

  return(
    <div className="navbar-com">
      <div className="navbar">
        <div className="nav-left">
          <ul className={color ? 'ul-left ul-b' : 'ul-left'} >
            <li>WOMEN</li>
            <li>MEN</li>
            <li>EXPLORE</li>
            <li>BEAUTY</li>
          </ul>
        </div>
        <div className="nav-center">
          <img className={color ? 'logow logob' : 'logow'} src={Logo} />
        </div>
        <div className="nav-right">
          <ul className={color ? 'ul-right ul-b' : 'ul-left'}>
            <li>SEARCH</li>
            <li>LOG IN</li>
            <li>BAG</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
