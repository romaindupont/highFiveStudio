import React, { useEffect } from 'react';
import './avis.css';


const Avis = () => {
/*   useEffect(() => {
    fetch("https://mybusiness.googleapis.com/v4/accounts/2012868177639913398/locations/10608303613899871506/reviews", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []) */
  return (
    <section className="section static" id='avis'>Avis</section>
  );
}
export default Avis;