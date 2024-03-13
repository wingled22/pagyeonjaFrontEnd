import React from "react";
import "../../assets/css/AVg-Revenue.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faDollar,
  faDollarSign,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";

const AVGrevenue = () => {
  return (
    <>
      <div className="box">
        <div className="avg-Revenue">
          <div className="overlap-group-avgre">
            <FontAwesomeIcon icon={faEllipsisV} className="menu-avgr" />
            <div className="text-wrapper">150k</div>
            <div className="div">AVG. Revenue per Month</div>
            <FontAwesomeIcon icon={faMoneyBill1} className="dollar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AVGrevenue;
