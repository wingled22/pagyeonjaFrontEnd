import React from "react";
import { Button,  Modal,ModalHeader, ModalBody,ModalFooter,FormGroup,Label,Input,Row,Col,} from "reactstrap";
import images1 from "../assets/image/carlo.jpg";
import images2 from "../assets/image/cliff.jpg";
import images3 from "../assets/image/cs3.png";
import { auto } from "@popperjs/core";

import ViewORCR from "./RequirementsViewOrCr";
import ViewDriversLicense from "./RequirementsViewDriversLicense";
import ViewNBIClearance from "./RequirementsViewNBIClearance";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Requirements = () => {
  const rectStyle = {
    width: "400px",
    height: "530px",
    backgroundColor: "#F0F0F0",
    borderRadius: "20px",
    boxShadow: "0px 4px 14.1px -1px #00000080",
    marginLeft: "50px",
    marginTop: "-30px",
  };
  const Profile = {
    maxWidth: "100px",
    maxHeight: "100px",
    borderRadius: "50%",
    marginTop: "30px",
    marginLeft: "150px",
  };
  const Line = {
    width: "300px",
    height: "3px",
    backgroundColor: "#52459F",
    margin: "0 auto",
  };

  return (
    <>
      <div className="rectangle" style={rectStyle}>
        <Row>
          <img className="centered" src={images1} style={Profile} />
          <h5 style={{ textAlign: "center", marginTop: "10px" }}>
            {" "}
            Carlo M. Gesta
          </h5>
          <div className="profileLine" style={Line}></div>
        </Row>

        <ViewORCR />
        <ViewDriversLicense />
        <ViewNBIClearance/>
        <div className="btnAppRej">
        <Button className="btn" color="success" style={{borderRadius:50 , fontWeight: "bold"}}> <FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Approve</Button>
        <Button className="btn" color="danger" style={{borderRadius:50 , fontWeight: "bold"}}><FontAwesomeIcon icon={faCircleXmark} /> &nbsp;Reject</Button>
        </div>
        
      </div>
    </>
  );
};

export default Requirements;
