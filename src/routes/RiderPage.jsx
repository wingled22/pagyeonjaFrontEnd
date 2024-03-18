import "../assets/css/RiderPage.css";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/RiderProfile.jsx";
import { Row, Col, Container } from "reactstrap";
const RiderPage = () => {
  return (
    <>
      {/* <Container> */}
      {/* <Row className="Row1">
        <RiderProfile />
      </Row>

      <Row className="Row2">
        <RiderTable />
      </Row> */}
      <Container fluid={true}>
        <Row>
          <Col>
            <RiderProfile />
          </Col>
        </Row>
        <Row>
          <Col>
            <RiderTable />
          </Col>
        </Row>
      </Container>
      {/* </Container> */}
    </>
  );
};

export default RiderPage;
