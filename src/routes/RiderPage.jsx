import "../assets/css/RiderPage.css";
import { useState } from "react";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/Rider/RiderProfile.jsx";
import { Row, Col, Container } from "reactstrap";

const RiderPage = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col>
            <div className="rectangle-header">
              <div className="label">
                <h2 className="rider-profile-header">Rider Profile</h2>
              </div>
            </div>
            <RiderProfile visible={profileVisible} />
          </Col>
        </Row>
        <Row>
          <Col>
            <RiderTable setProfileVisible={setProfileVisible} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RiderPage;
