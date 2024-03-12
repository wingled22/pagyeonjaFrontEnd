import { useState } from "react";
import HomePage from "./routes/HomePage";
import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import CommuterPage from './routes/CommuterPage'

function App() {
  return (
    <>
      <Row>
        <Col md={1}>
          <NavigationBar />
        </Col>

        {/* routing */}
        <Col>
          <Row>
            <HomePage />
          </Row>
          <Row>
            <CommuterPage />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
