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
import "../assets/css/RiderApprovalDashboard.css";
import SearchBar from "./SearchBox";
import FilterStatus from "./FilterStatus";
import Rider_Approval_TablePage from "./Rider_Approval_Table";
import Requirements from "./Requirements";

const RiderApprovalDashboard = () => {
 
  return (
    <>
      

      <Row className="me-md-5 ms-sm-1">

     
        <div className="text-wrapper">Approval List</div>
      


        <Col  xs={8} sm={7} md={5} lg={4} xl={4} className="ms-md-2 ">
          <SearchBar />
        </Col>

        <Col xs={4} sm={5} md={6} lg={4} xl={4} className="ms-md-4">
          <FilterStatus />
        </Col>

      </Row>

      <Row className="mt-xs-2 mt-lg-4 mt-sm-4 mt-md-4 mt-xl-4 ms-sm-1" xs={1}  sm={6} md={12} lg={2} xl={2}>

      <Col   className="mt-xs-5 " xs={5} sm={5} md={8} lg={6} xl={6}>
          <Rider_Approval_TablePage />
        </Col>

        <Col sm={1}>
          <Requirements />
        </Col>
      </Row>
    </>
  );
};

export default RiderApprovalDashboard;
