import { useState } from "react";
import HomePage from "./routes/HomePage";
import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
// import BarChart from "./components/BarChart";

function App() {
  return (
    <>
      <Row>
        <Col md={1}>
          <NavigationBar />
        </Col>

        {/* routing */}
        <Col>
          <HomePage />
        </Col>
      </Row>
    </>
  );
}

export default App;
