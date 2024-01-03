import React from 'react';
import './tarifs.css';


const Tarifs = () => {
  return (
    <section className="section parallax black"id='tarifs'>
      <div className="tarifsPage">
        <h2 className="tarifsPage-title">Tarifs</h2>
        <ul className="tarifsPage-ul">
          <li className="tarifsPage-li"><span className="tarifsPage-li-title">Solo</span><span className="tarifsPage-li-tarifs">40€/<span className="tarifsPage-li-info">séance</span></span></li>
          <li className="tarifsPage-li"><span className="tarifsPage-li-title">Duo</span><span className="tarifsPage-li-tarifs">25€/<span className="tarifsPage-li-info">séance</span></span></li>
          <li className="tarifsPage-li"><span className="tarifsPage-li-title">Small Group <span className="tarifsPage-li-info">(Max 4 pers.)</span></span><span className="tarifsPage-li-tarifs">20€/<span className="tarifsPage-li-info">séance</span></span></li>

        </ul>
      </div>
    </section>
  );
}
export default Tarifs;