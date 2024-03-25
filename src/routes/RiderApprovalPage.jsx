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
import { useState } from "react";
import "../assets/css/RiderApproval/RiderApprovalDashboard.css";
import RiderApprovalTablePage from "../components/RiderApproval/Rider_Approval_Table";
import Requirements from "../components/RiderApproval/Requirements";
const RiderApprovalDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null); // reciever from rider table approval
  
 
  const setChangeUserID = (userId) => {
    setSelectedUser(userId);
    console.log(userId,"rider page")
  
  };


  return (
    <>
      <div className="rider-approval-text-wrapper">Rider Approval List</div>

      <Row
        className="mt-xs-1 mt-lg-1 mt-sm-1 mt-md-1 mt-xl-1"
        xs={1}
        sm={6}
        md={11}
        lg={11}
        xl={11}
      >
        <Col
          className="mt-xs-5 "
          xs={5}
          sm={5}
          md={selectedUser === null ? 12 : 8}
          lg={selectedUser === null ? 11 : 7}
          xl={selectedUser === null ? 11 : 7}
        >
          <RiderApprovalTablePage changeUserID={setChangeUserID} />
        </Col>

        {selectedUser && (
          <Col sm={1} md={6} lg={5}>
            <Requirements userId={selectedUser} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default RiderApprovalDashboard;
