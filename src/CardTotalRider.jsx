import React from 'react';
import "./assets/CardTotalRider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle,faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const CardTotalRider = ({}) => {
  return (
    <div className="box">
    <div className="total-riders">
      <div className="overlap-group">
       <FontAwesomeIcon icon={faEllipsisV} className='menu'/>
        <div className="text-wrapper">2.5k</div>
        <FontAwesomeIcon icon={faBicycle}  className="bicycle" alt="Bicycle" />
        <div className="div">Total Riders</div>
      </div>
    </div>
  </div>
    
  );
};

export default CardTotalRider;
