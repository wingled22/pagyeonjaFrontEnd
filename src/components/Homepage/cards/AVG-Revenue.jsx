import React from "react";
import "../../../assets/css/AVg-Revenue.css";
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
        <div className="overlap-group-avgre" style={{ marginBottom: "20px" }}>
          <FontAwesomeIcon icon={faEllipsisV} className="menu-avgr" />
          <div className="wrapper-avgre">
            <div className="text-wrapper-avgre">150k</div>
          </div>
          <div className="avgre-text">
            <div className="div-avgre">AVG. Revenue per Month</div>
          </div>
          <div className="dollar-logo">
            <FontAwesomeIcon icon={faMoneyBill1} className="dollar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AVGrevenue;
