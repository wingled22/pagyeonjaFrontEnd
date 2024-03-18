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
import "../../assets/css/RiderApprovalDashboard.css";
import SearchBar from "../../components/RiderApprovalComponents/SearchBox";
import FilterStatus from "../../components/RiderApprovalComponents/FilterStatus";
import Rider_Approval_TablePage from "../../components/RiderApprovalComponents/Rider_Approval_Table";
import Requirements from "../../components/RiderApprovalComponents/Requirements";

const RiderApprovalDashboard = () => {
 
  return (
    <>
      

      

    
     <div className="text-wrapper">Approval List</div>
    
    
      
     <Row >
        <Col  xs={8} sm={7} md={5} lg={4} xl={5} className="ms-md-4">
          <SearchBar />
        </Col>

        <Col xs={4} sm={5} md={6} lg={4} xl={4}>
          <FilterStatus />
        </Col>

      </Row>

      <Row className="mt-xs-1 mt-lg-1 mt-sm-1 mt-md-1 mt-xl-1 ms-sm-1" xs={1}  sm={6} md={12} lg={2} xl={2}>

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
