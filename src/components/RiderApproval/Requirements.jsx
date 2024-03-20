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

import ViewRequirements from "./RequirementsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Requirements = () => {
  return (
    <>
      <div className="rectangle-requiment">
        <Row>
          <img className="centered rider-profile" src={images1} />
          <h5 style={{ textAlign: "center", marginTop: "10px" }}>
            Carlo M. Gesta
          </h5>
          <div className="profile-line"></div>
        </Row>
        <Row>
          {/* <ViewORCR className="me-md-5" />
         <ViewDriversLicense />
        <ViewNBIClearance/>
        */}
          <ViewRequirements
            viewText={"View OR/CR file"}
            viewFileText={"Select and upload the files of your choice"}
          />

          <ViewRequirements
            viewText={"View Drivers License file"}
            viewFileText={"Select and upload the files of your choice"}
          />

          <ViewRequirements
            viewText={"View NBI clearance file"}
            viewFileText={"Select and upload the files of your choice"}
          />
        </Row>

        <div className="btnAppRej">
          <Button
            className="btn-rider-approval"
            color="success"
            style={{ borderRadius: 50, fontWeight: "bold" }}
          >
            {" "}
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

export default Requirements;
