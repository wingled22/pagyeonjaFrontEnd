import "../assets/css/RiderPage.css";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/Rider/RiderProfile.jsx";
// import RiderProfile from "../components/RiderProfile.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col, Container } from "reactstrap";
import { useState } from "react";
const RiderPage = () => {
  const [selectedRider, setSelectedRider] = useState(null);
  const updateSelectRider = (rider) => {
    setSelectedRider(rider);
  };

  return (
    <>
      <Container fluid={true}>
        <Row>
          <div className="rectangle-header">
            <div className="label">
              <h2 className="rider-profile-header">Rider Profile</h2>
            </div>
          </div>
          <Col>{selectedRider && <RiderProfile rider={selectedRider} />}</Col>
        </Row>
        <Row>
          <Col>
            <RiderTable onSelectRider={updateSelectRider} />
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RiderPage;
