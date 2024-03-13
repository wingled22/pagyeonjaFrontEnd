import React from 'react';
import "../assets/css/CardTotalRider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const CardTotalRider = ({ }) => {
  return (
    <div className="box">
      <div className="total-riders" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="overlap-group" style={{ marginBottom: '20px' }}>
          <FontAwesomeIcon icon={faEllipsisV} className='menu' />
          <div className='wrapper-rider'>
            <div className="text-wrapper-Rider">2.5k</div>
          </div>
          <FontAwesomeIcon icon={faBicycle} className="bicycle" alt="Bicycle" />
          <div className="div-total">Total Riders</div>
        </div>

      </div>
    </div>


  );
};

export default CardTotalRider;
