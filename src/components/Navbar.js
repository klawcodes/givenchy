import React from 'react'
import './Navbar.css'

import Logo from '../assets/apple-touch-icon.png'
import Logot from '../assets/logotype.png'

const Navbar = () => {
  return(
    <div className="navbar-com">
      <div className="navbar">
        <div className="nav-left">
          <ul className="ul-left">
            <li>WOMEN</li>
            <li>MEN</li>
            <li>EXPLORE</li>
            <li>BEAUTY</li>
          </ul>
        </div>
        <div className="nav-center">
          <img className="logo" src={Logo} />
        </div>
        <div className="nav-right">
          <ul className="ul-right">
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
