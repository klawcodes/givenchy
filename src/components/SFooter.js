import React from 'react'

import './SFooter.css'

const SFooter = () => {
  return (
    <div className="sfooter">
      <div className="sfooter-com">
        <div className="contact">
          <h2 className="sf-title">CONTACT US</h2>
          <ul className="sf-list">
            <li className="list">Call +800 0000 1952</li>
            <li className="list">Email contact@givenchy.com</li>
            <li className="list">Send a message</li>
          </ul>
        </div>
        <div className="cs">
          <h2 className="sf-title">COSTUMER SERVICE</h2>
          <ul className="sf-list">
            <li className="list">Contact</li>
            <li className="list">FAQ</li>
            <li className="list">Shipping & Payments</li>
            <li className="list">Return & Refund</li> 
            <li className="list">Track Order</li>
            <li className="list">Store Finder</li>
          </ul>
        </div>
        <div className="legal">
          <h2 className="sf-title">LEGAL</h2>
          <ul className="sf-list">
            <li className="list">Privacy Policy</li>
            <li className="list">Cookie Policy</li>
            <li className="list">General terms & conditions of sale</li>
            <li className="list">Terms & Conditions</li> 
            <li className="list">Anti Modern Slavery Statement</li>
            <li className="list">Accessibility</li>
            <li className="list">Anti-Counterfeit</li>
          </ul>
        </div>
        <div className="about">
          <h2 className="sf-title">ABOUT</h2>
          <ul className="sf-list">
            <li className="list">Careers</li>
            <li className="list">Press</li>
          </ul>
        </div>
      </div>
      <hr className="h-line"/>
    </div>
  )
}

export default SFooter
