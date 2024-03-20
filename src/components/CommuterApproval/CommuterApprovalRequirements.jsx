import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import images1 from "../../assets/image/carlo.jpg";
import images2 from "../../assets/image/cliff.jpg";
import images3 from "../../assets/image/cs3.png";
import { auto } from "@popperjs/core";

// import ViewRequirements from "./RequirementsCards";
import CommuterApprovalViewRequirements from "./CommuterApprovalRequirementsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/CommuterApproval/CommuterApprovalRequirements.css";

const CommuterApprovalRequirements = () => {
  return (
    <>
      <div className="commuter-approval-rectangle-requiment">
        <Row>
          <img className="centered commuter-approval-profile" src={images1} />
          <h5 style={{ textAlign: "center", marginTop: "10px" }}>
            Carlo M. Gesta
          </h5>
          <div className="profile-line"></div>
        </Row>
        <Row>
         
          <CommuterApprovalViewRequirements
            viewText={"View OR/CR file"}
            viewFileText={"View the uploaded files from commuter"}
          />

          <CommuterApprovalViewRequirements
            viewText={"View Drivers License file"}
            viewFileText={"View the uploaded files from commuter"}
          />

          <CommuterApprovalViewRequirements
            viewText={"View NBI clearance file"}
            viewFileText={"View the uploaded files from commuter"}
          />
        </Row>

        <div className="btnAppRej">
          <Button
            className="btn-rider-approval"
            color="success"
            style={{ borderRadius: 50, fontWeight: "bold" }}
          >
            
            <FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Approve
          </Button>
          <Button
            className="btn-rider-approval"
            color="danger"
            style={{ borderRadius: 50, fontWeight: "bold" }}
          >
            <FontAwesomeIcon icon={faCircleXmark} /> &nbsp;Reject
          </Button>
        </div>
      </div>
    </>
  );
};

export default CommuterApprovalRequirements;
