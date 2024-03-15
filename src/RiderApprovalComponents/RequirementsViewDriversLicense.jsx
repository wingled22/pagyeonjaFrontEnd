import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const ViewDriversLicense = () => {
 

  const Elipse = {
    width: 46.96,
    height: 44,
    background: "white",
    borderRadius: 9999,
    border: "3.12px #CBD0DC solid",

    textAlign: "center",
    marginTop: -55,
    marginLeft: 50,
  };

  return (
    <>
      <div className="box-requiremnets-driver-license"></div>

      <div className="Ellipse1" style={Elipse}>
        <FontAwesomeIcon icon={faCloudArrowUp} className="icon" />
      </div>

      <p className="TextReq">
        View Drivers License file
        <h6 className="Uploadtext">Select and view the files of your choice</h6>
      </p>
    </>
  );
};

export default ViewDriversLicense;
