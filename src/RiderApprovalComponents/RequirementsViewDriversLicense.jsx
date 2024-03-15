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
      <div className="box-requirements-drivers-license container-fluid">
        <div className="ellipse-container">
          <div className="ellipse-first">
            <div className="ellipse-second">
              <FontAwesomeIcon icon={faCloudArrowUp} className="icon-view" />
            </div>

            <p className="fw-bold text-white view-file">View Drivers License file</p>
            <p className="text-white view-select">Select and upload the files of your choice</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDriversLicense;
