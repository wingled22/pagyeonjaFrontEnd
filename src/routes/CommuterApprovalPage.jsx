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
import CommuterApprovalSearchBox from "../components/CommuterApproval/CommuterApprovalSearchBox";
import CommuterFilterStatus from "../components/CommuterApproval/CommuterApprovalFilter";
import CommuterApprovalTablePage from "../components/CommuterApproval/CommuterApprovalTablePage";
const CommuterApprovalPage = () => {

    const [selectedUser, setSelectedUser] = useState(null);

    const setChangeUserID = (id) => 
    {
        setSelectedUser(id);
    }

  return (
    <>
      
     <div className="commuter-approval-text-wrapper fw-bold ms-md-5 mt-md-2">Commuter Approval List</div>
      
     <Row >
        <Col  xs={8} sm={7} md={5} lg={4} xl={5} className="ms-md-4">
        <CommuterApprovalSearchBox/>
        </Col>

        <Col xs={4} sm={5} md={6} lg={4} xl={4}>
          <CommuterFilterStatus />
        </Col>

      </Row>

      <Row className="mt-xs-1 mt-lg-1 mt-sm-1 mt-md-1 mt-xl-1 ms-sm-1" xs={1}  sm={6} md={12} lg={2} xl={2}>

      <Col   className="mt-xs-5 " xs={5} sm={5} md={8} lg={12} xl={12}>
          <CommuterApprovalTablePage changeUserID={setChangeUserID} />
        </Col>

        {selectedUser && <Col sm={1} >
          <Requirements /> <h1>HAHAHA</h1>
        </Col>}
        
      </Row>
    </>
  );
};

export default CommuterApprovalPage;
