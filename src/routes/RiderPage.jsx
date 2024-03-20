import "../assets/css/RiderPage.css";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/Rider/RiderProfile.jsx";
// import RiderProfile from "../components/RiderProfile.jsx";
import { Row, Col, Container } from "reactstrap";
import { useState } from "react";
const RiderPage = () => {

  const [selectedrider, setSelectedRider] = useState(null);
  const updateSelectRider = (id) => { setSelectedRider(id);}

  return (
    <>
      <Container fluid={true}>
        <Row>
          <div className="rectangle-header">
            <div className="label">
              <h2 className="rider-profile-header">Rider Profile</h2>
            </div>
          </div>
          <Col>
          {
            selectedrider && <RiderProfile />
          }
          </Col>
        </Row>
        <Row>
          <Col>
            <RiderTable selectRider={updateSelectRider} />
          </Col>
        </Row>
      </Container>
      {/* </Container> */}
    </>
  );
};

export default RiderPage;
