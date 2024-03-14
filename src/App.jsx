import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Row>
        <Col md={1}>
          <NavigationBar />
        </Col>
        <Col md={11} className="outlet">
          <div className="outlet">
            <Outlet />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
