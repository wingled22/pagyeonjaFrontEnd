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
import SearchBar from "../components/RiderApproval/SearchBox";
import FilterStatus from "../components/RiderApproval/FilterStatus";
import Rider_Approval_TablePage from "../components/RiderApproval/Rider_Approval_Table";
import Requirements from "../components/RiderApproval/Requirements";
import RiderApprovalSearchFilter from "../components/RiderApproval/RiderApprovalSearchAndFilter";
const RiderApprovalDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null); // reciever from rider table approval
  const setChangeUserID = (id) => {
    setSelectedUser(id);
  };

  return (
    <>
      <div className="text-wrapper">Approval List</div>

      <Row>
        {/* <Col xs={8} sm={7} md={5} lg={4} xl={5} className="ms-md-4">
          <SearchBar />
        </Col>

        <Col xs={4} sm={5} md={6} lg={4} xl={4}>
          <FilterStatus />
        </Col> */}

        <RiderApprovalSearchFilter/>


      </Row>

      <Row
        className="mt-xs-1 mt-lg-1 mt-sm-1 mt-md-1 mt-xl-1 ms-sm-1"
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
          lg={selectedUser === null ? 11 : 6}
          xl={selectedUser === null ? 11 : 6}
        >
          <Rider_Approval_TablePage changeUserID={setChangeUserID} />
        </Col>

        {selectedUser && (
          <Col sm={1} md={6} lg={6}>
            <Requirements />
          </Col>
        )}
      </Row>
    </>
  );
};

export default RiderApprovalDashboard;
