import React from "react";
import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import CommuterApprovalSearchAndFilter from "../components/CommuterApproval/CommuterApprovalSearchFilter";
import CommuterApprovalTablePage from "../components/CommuterApproval/CommuterApprovalTablePage";
import CommuterApprovalRequirements from "../components/CommuterApproval/CommuterApprovalRequirements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CommuterApprovalPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [approvals, setApprovals] = useState([]);

  const getApprovalList = async () => {
    try {
      const response = await fetch(
        "http://localhost:5180/api/Approval/GetApprovals?usertype=Commuter"
      );
      const data = await response.json();
      setApprovals(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Changes the approvals state without fetching the approvals
  const updateApprovalTable = (userId, isApprove) => {
    setApprovals((prevApprovals) => {
      if (isApprove) {
        return prevApprovals.filter((item) => item.userId !== userId);
      }
      return prevApprovals.map((item) => {
        if (item.userId === userId)
          return { ...item, approvalStatus: isApprove };
      });
    });
  };

  const setChangeUserID = (userId) => {
    setSelectedUser(userId);
    console.log(userId, "commuter page");
  };
  useEffect(() => {
    getApprovalList();
  }, []);

  return (
    <>
      <div className="commuter-approval-text-wrapper">
        Commuter Approval List
      </div>

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
          lg={selectedUser === null ? 11 : 7}
          xl={selectedUser === null ? 11 : 7}
        >
          <CommuterApprovalTablePage
            changeUserID={setChangeUserID}
            approvals={approvals}
          />
        </Col>

        {selectedUser && (
          <Col sm={1} md={6} lg={5}>
            <CommuterApprovalRequirements
              userId={selectedUser}
              updateApprovalTable={updateApprovalTable}
            />
            <ToastContainer />
          </Col>
        )}
      </Row>
    </>
  );
};

export default CommuterApprovalPage;
