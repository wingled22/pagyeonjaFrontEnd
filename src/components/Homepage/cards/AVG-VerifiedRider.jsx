import React from "react";
import "../../../assets/css/AVg-VerifiedRider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const AVGVerifiedRider = () => {
  return (
    <>
      <div className="box">
        <div className="overlap-group-avgre" style={{ marginBottom: "20px" }}>
          <FontAwesomeIcon icon={faEllipsisV} className="menu-avgr" />
          <div className="wrapper-avgre">
            <div className="text-wrapper-avgre">1.2k</div>
          </div>
          <div className="avgre-text">
            <div className="div-avgre">AVG. Verified Rider / Month</div>
          </div>
          <div className="dollar-logo">
            <FontAwesomeIcon icon={faCertificate} className="dollar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AVGVerifiedRider;
