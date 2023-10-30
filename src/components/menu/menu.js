import React from 'react';
import LogoH5S from '../../assets/images/LogoH5S.svg';
import './menu.css';
const Menu = () => {
  return (
      <nav className='menu'>
        <ul className='menu-ul'>
        <div className="menu-ul start">
          <li className='menu-li'>Accueil</li>
          <li className='menu-li'>Qui suis-je ?</li>
          <li className='menu-li'>Le studio</li>
          <li className='menu-li'>Tarifs</li>
        </div>
        <div className="menu-ul last">
          <li className='menu-li'>Vos avis</li>
          <li className='menu-li'>Prendre rendez-vous</li>
          <li className='menu-li'>Blog</li>
          <li className='menu-li'>Contact</li>
        </div>
        </ul>
        <img src={ LogoH5S } alt="HighFiveStudio" className='menu-logo'/>
      </nav>
      
  )
}

export default Menu;