import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Row>
        <Col md={1} sm={1}>
          <NavigationBar />
        </Col>
        <Col md={11}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default App;
