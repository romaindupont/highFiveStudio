import React, { useState } from 'react';
import LogoH5S from '../../assets/images/LogoH5S.svg';
import './menu.css';
const Menu = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const MenuSmartphoneClick = () => {
    if (window.innerWidth < 1024){
      setMenuOpen(!menuOpen);
    }
  }
  return (
      <nav className='menu'>
        <ul className={menuOpen ? 'menu-ul open' : 'menu-ul'}>
        <div className="menu-smartphone" onClick={MenuSmartphoneClick}>
          <div className={menuOpen ? 'menu-smartphone-firstLine-open' : 'menu-smartphone-firstLine'}></div>
          <div className={menuOpen ? 'menu-smartphone-secondLine-open' : 'menu-smartphone-secondLine'}></div>
          <div className={menuOpen ? 'menu-smartphone-thirdLine-open' : 'menu-smartphone-thirdLine'}></div>
        </div>
        <div className="cross"></div>
        <div className={menuOpen ? 'start-open' : 'start'}>
          <div className="menu-ul">
            <li className='menu-li'><a href="#accueil" onClick={MenuSmartphoneClick}>Accueil</a></li>
            <li className='menu-li'><a href="#qui" onClick={MenuSmartphoneClick}>Qui suis-je ?</a></li>
            <li className='menu-li'><a href="#studio" onClick={MenuSmartphoneClick}>Le studio</a></li>
            <li className='menu-li'><a href="#tarifs" onClick={MenuSmartphoneClick}>Tarifs</a></li>
          </div>
          <div className="menu-ul">
            <li className='menu-li'><a href="#avis" onClick={MenuSmartphoneClick}>Vos avis</a></li>
            <li className='menu-li'><a rel="noreferrer" target="_blank" href="https://calendly.com/highfivestudiosport/votreseancedesport?background_color=e3dcd2&text_color=100c0d&primary_color=dcb253" onClick={MenuSmartphoneClick}>Prendre rendez-vous</a></li>
            <li className='menu-li'><a href="#blog" onClick={MenuSmartphoneClick}>Blog</a></li>
            <li className='menu-li'><a href="#contact" onClick={MenuSmartphoneClick}>Contact</a></li>
          </div>
        </div>
        </ul>
        <img src={ LogoH5S } alt="HighFiveStudio" className='menu-logo'/>
      </nav>
      
  )
}

export default Menu;