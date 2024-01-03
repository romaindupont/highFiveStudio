import React, { useEffect } from 'react';
import './contact.css';
import Video from '../../assets/images/sport.mp4';




const Contact = () => {
  useEffect(() => {
    document.getElementById('vid').play();
  }, [])
  return (
    <section className="section static" id='contact'>
      <video width="100%" height="100%" autoPlay className='vid' muted id='vid' loop>
        <source src={Video} type="video/mp4"/>
      </video>
    </section>
  );
}
export default Contact;