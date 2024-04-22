import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import { reset, getApproveRiders } from "./utils/riders/approvedRiderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApproveRiders());
    return () => {
      dispatch(reset());
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
