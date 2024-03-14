import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const ViewDriversLicense = () => {
  const BoxReq = {
    width: "300px",
    height: "70px",
    backgroundColor: "#52459F",
    margin: "0 auto",
    marginTop: "130px",
    borderRadius: "10px",
    marginLeft: "40px",
  };

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
      <div className="boxReq" style={BoxReq}></div>

      <div className="Ellipse1" style={Elipse}>
        <FontAwesomeIcon icon={faCloudArrowUp} className="icon" />
      </div>

      <p className="TextReq">
        View Drivers License file
        <p className="Uploadtext">Select and view the files of your choice</p>
      </p>
    </>
  );
};

export default ViewDriversLicense;
