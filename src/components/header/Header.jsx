import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.jpg'
import LOGO from '../../assets/AK.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <p className='logo-text'>AK</p>
        </div>
        
        <h5>Hello! I'm</h5>
        <h1>Adem Kanca</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <CTA />       
         
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header