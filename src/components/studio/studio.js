import React, { useState, useEffect, useCallback } from "react";
import './studio.css';


const Studio = () => {
  const [images, setImages] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	  const leftClick = useCallback((e) => {
		setCurrentIndex(currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1)
  }, [images.length, currentIndex])
  const rightClick = useCallback((e) => {
		setCurrentIndex(currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1)
  }, [images.length, currentIndex])
  useEffect(() => {
    fetch("http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/media", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [])
  return (
    <section className="section static green" id='studio'>
      <div className="wrap-container" id="wrap-scroll" >
      <span className="leftSlide" onClick={leftClick}></span>
      <span className="rightSlide" onClick={rightClick}></span>
        <ul className="image-ul">   
          {images.map((image, i) =>          
              <li className="image-li" key={i} style={{transform: `translate(-${currentIndex * 100}%)`}}><img  src={image.source_url} alt="" /></li>           
          )}
        </ul>
      </div>
    </section>
  );
}
export default Studio;


