import React from 'react';
import LogoH5S from '../../assets/images/LogoH5S.svg';
import './footer.scss';
import Map from './map';
import Insta from '../../assets/images/insta.svg';
import FaceBook from '../../assets/images/facebook.svg';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-contact">
      <h2 className="footer-contact-title">Me Contacter</h2>
      <p className="footer-contact-adress">77 rue du Vaugueux <span>14000 CAEN</span></p>
      <p className="footer-contact-number">06 44 24 06 80</p>
    </div>
    <div className="footer-follow">
      <h2 className="footer-follow-title">Me Suivre</h2>
      <div className="footer-follow-logo">
      <a target="_blank" href="https://www.instagram.com/highfive_byanthonylevionnois/" rel="noreferrer"><img className='footer-follow-insta' src={Insta} alt="instagram-logo" /></a>
      <a target="_blank" href="https://www.facebook.com/profile.php?id=61551460313630" rel="noreferrer"><img className='footer-follow-insta' src={FaceBook} alt="facebook-logo" /></a>
      </div>
    </div>

      <Map></Map>
    </footer>
  )
}

export default Footer;