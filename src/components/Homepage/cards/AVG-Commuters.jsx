import React from "react";
import "../../../assets/css/AVG-Commuter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faEllipsisV,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AVGCommuters = ({}) => {
  return (
    <div className="box d-flex flex-row align-items-center">
      <div className="overlap-group-avg" style={{ marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faEllipsisV} className="menu-avg" />
        <div className="wrapper-text">
          <div className="text-wrapper-number">12k</div>
        </div>
        <div className="div-user">
          <div className="div-usr">AVG. Commuters / month</div>
        </div>
        <FontAwesomeIcon icon={faUser} className="user" />
      </div>
    </div>
  );
};

export default AVGCommuters;
