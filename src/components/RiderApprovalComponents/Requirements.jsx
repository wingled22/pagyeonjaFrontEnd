import React from "react";
import { Button,  Modal,ModalHeader, ModalBody,ModalFooter,FormGroup,Label,Input,Row,Col,} from "reactstrap";
import images1 from "../../assets/image/carlo.jpg";
import images2 from "../../assets/image/cliff.jpg";
import images3 from "../../assets/image/cs3.png";
import { auto } from "@popperjs/core";

import ViewORCR from "../../components/RiderApprovalComponents/RequirementsViewOrCr";
import ViewDriversLicense from "../../components/RiderApprovalComponents/RequirementsViewDriversLicense";
import ViewNBIClearance from "../../components/RiderApprovalComponents/RequirementsViewNBIClearance";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Requirements = () => {
 

 

  return (
    <>
      <div className="rectangle-requiment" >

        <Row>
          <img className="centered rider-profile" src={images1}  />
          <h5 style={{ textAlign: "center", marginTop: "10px" }}>
            
            Carlo M. Gesta
          </h5>
          <div className="profile-line"></div>
        
        </Row>
        
        <ViewORCR className="me-md-5" />
        <ViewDriversLicense />
        <ViewNBIClearance/>
       

        <div className="btnAppRej">
        <Button className="btn-rider-approval" color="success" style={{borderRadius:50 , fontWeight: "bold"}}> <FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Approve</Button>
        <Button className="btn-rider-approval" color="danger" style={{borderRadius:50 , fontWeight: "bold"}}><FontAwesomeIcon icon={faCircleXmark} /> &nbsp;Reject</Button>
        </div>
        
      </div>
    </>
  );
};

export default Requirements;