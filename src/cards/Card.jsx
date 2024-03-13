import React from 'react';
import CardTotalRider from './CardTotalRider.jsx';
import AVGCommuters from './AVG-Commuters.jsx';
import AVGrevenue from './AVG-Revenue.jsx';
import './Cards.css'; // Make sure to import the CSS file
import AVGVerifiedRider from './AVG-VerifiedRider.jsx';

const Cards = () => {
    return (
        <div className="cards-container">
            <div ><CardTotalRider /></div>
            <div ><AVGCommuters /></div>
            <div><AVGrevenue /></div>
            <div><AVGVerifiedRider/></div>
        </div>
    );
}

export default Cards;
