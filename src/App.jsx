import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  reset as resetRiders,
  getApproveRiders,
} from "./utils/riders/approvedRiderSlice";
import {
  reset as resetCommuters,
  getApprovedCommuters,
} from "./utils/commuter/approvedCommuterSlice";
import {
  getRiderApprovalRequests,
  reset as resetRiderApprovalRequests,
} from "./utils/riderApproval/riderApprovalSlice";
import {
  getCommuterApprovalRequests,
  reset as resetCommuterApprovalRequests,
} from "./utils/commuterApproval/commuterApprovalSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApproveRiders());
    dispatch(getApprovedCommuters());
    dispatch(getRiderApprovalRequests());
    dispatch(getCommuterApprovalRequests());
    return () => {
      dispatch(resetRiders());
      dispatch(resetCommuters());
      dispatch(resetRiderApprovalRequests());
      dispatch(resetCommuterApprovalRequests());
    };
  }, []);
  return (
    <>
      <Row>
        <Col xs="2" sm="2" md="2" lg="1" xl="1">
          <NavigationBar />
        </Col>
        <Col xs="10" sm="10" md="9" lg="11" xl="11">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default App;
