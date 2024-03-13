import React from 'react';
import "../assets/css/AVG-Commuter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle,faEllipsisV, faUser } from '@fortawesome/free-solid-svg-icons';

const AVGCommuters = ({}) => {
  return (
    <div className="box">
      <div className="avg-commuters">
        <div className="overlap-group-avg">
        <FontAwesomeIcon icon={faEllipsisV} className='menu-avg'/>
          <div className="text-wrapper">12k</div>
          <div className="div">AVG. Commuters / month</div>
          {/* <img className="user" alt="User" src="user-2.svg" /> */}
          <FontAwesomeIcon icon={faUser} className='user'/>
        </div>
      </div>
    </div>
  );
};

export default AVGCommuters;
