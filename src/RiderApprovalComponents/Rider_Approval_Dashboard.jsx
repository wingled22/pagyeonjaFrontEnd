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
 
} from "reactstrap";
import { useState } from "react";
import "../assets/css/RiderApprovalDashboard.css";
import SearchBar from "./SearchBox";
import FilterStatus from "./FilterStatus";
import Rider_Approval_TablePage from "./Rider_Approval_Table";


const RiderApprovalDashboard = () => {

  const RowStyle = {
    /* top right bottom left */
   margin: "0px 0px 30px 0px",
  };

  return (
    <>
      <Row>
        <div className="label">
          <div className="text-wrapper">Approval List</div>
        </div>
      </Row>

      <Row style={RowStyle}>
        <SearchBar />
        <FilterStatus />
      </Row>
      <Row>
        <Rider_Approval_TablePage />
      </Row>
      
    </>
  );
};

export default RiderApprovalDashboard;
