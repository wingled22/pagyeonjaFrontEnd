import React from "react";
import { Row, Col } from "reactstrap";
import { useState } from "react";
import CommuterApprovalSearchAndFilter from "../components/CommuterApproval/CommuterApprovalSearchFilter";
import CommuterApprovalTablePage from "../components/CommuterApproval/CommuterApprovalTablePage";
import CommuterApprovalRequirements from "../components/CommuterApproval/CommuterApprovalRequirements";
const CommuterApprovalPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const setChangeUserID = (id) => {
    setSelectedUser(id);
  };

  return (
    <>
      <div className="commuter-approval-text-wrapper fw-bold ms-md-5 mt-md-2">
        Commuter Approval List
      </div>

      {/* <Row>
        <CommuterApprovalSearchAndFilter />
      </Row> */}

      <Row
        className="mt-xs-1 mt-lg-1 mt-sm-1 mt-md-1 mt-xl-1 ms-sm-1"
        xs={1}
        sm={6}
        md={12}
        lg={2}
        xl={2}
      >
        <Col
          className="mt-xs-5 "
          xs={5}
          sm={5}
          md={selectedUser === null ? 12 : 8}
          lg={selectedUser === null ? 11 : 6}
          xl={selectedUser === null ? 11 : 6}
        >
          <CommuterApprovalTablePage changeUserID={setChangeUserID} />
        </Col>

        {selectedUser && (
          <Col xs={11} sm={11} md={11} lg={6}>
            <CommuterApprovalRequirements />
          </Col>
        )}
      </Row>
    </>
  );
};

export default CommuterApprovalPage;
