import RiderPage from "./routes/RiderPage.jsx";
import { useState } from "react";
import HomePage from "./routes/HomePage";
import { Row, Col } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import CommuterPage from './routes/CommuterPage'
import RiderApprovalDashboard from './RiderApprovalComponents/Rider_Approval_Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
      <Row>
        <Col xs={2} sm={2} md={2} lg={1} xl={1} className="Nav">
          <NavigationBar />
        </Col>

      
        <Col xs={10} sm={10} md={8} lg={11} xl={11}>
        <RiderApprovalDashboard/>
        </Col>
        
      </Row>
    </>
  );
}

export default App;
