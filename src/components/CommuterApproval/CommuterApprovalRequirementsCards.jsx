import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/CommuterApproval/CommuterApprovalCards.css"

const CommuterApprovalViewRequirements = ({viewText,viewFileText}) => {


  return (
    <>
     <div className="commuter-approval-boxRequirements container-fluid">
        <div className="ellipse-container">
          <div className="ellipse-first">
            <div className="ellipse-second">
              <FontAwesomeIcon icon={faCloudArrowUp} className="icon-view" />
            </div>

             <p className="fw-bold text-white view-file">{viewText}</p>
            <p className="text-white view-select">{viewFileText}</p>

      
          </div>
        </div>
      </div>
    </>
  );
};

export default CommuterApprovalViewRequirements;
