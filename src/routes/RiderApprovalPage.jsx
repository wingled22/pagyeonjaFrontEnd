import React from "react";
import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import "../assets/css/RiderApproval/RiderApprovalDashboard.css";
import RiderApprovalTablePage from "../components/RiderApproval/Rider_Approval_Table";
import Requirements from "../components/RiderApproval/Requirements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { updateRiderApprovalList } from "../utils/riderApproval/riderApprovalSlice";
import { addRider } from "../utils/riders/approvedRiderSlice";

const RiderApprovalDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null); // reciever from rider table approval
  // const [approvals, setApprovals] = useState([]);
  const dispatch = useDispatch();
  const { riderApprovalRequests } = useSelector(
    (state) => state.riderApprovals
  );

  // Changes the approvals state without fetching the approvals
  const updateApprovalTable = (userId, isApprove) => {
    dispatch(updateRiderApprovalList({ userId, isApprove }));
  };

  const addRiderToTable = (approval) => {
    const rider = { ...approval, approvalStatus: true };
    dispatch(addRider({ rider }));
  };

  const setChangeUserID = (userId) => {
    setSelectedUser(userId);
  };
  useEffect(() => {}, [dispatch]);
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
          <RiderApprovalTablePage
            changeUserID={setChangeUserID}
            approvals={riderApprovalRequests}
          />
          <ToastContainer />
        </Col>

        {selectedUser && (
          <Col sm={1} md={6} lg={5}>
            <Requirements
              userId={selectedUser}
              updateApprovalTable={updateApprovalTable}
              addRider={addRiderToTable}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default RiderApprovalDashboard;
