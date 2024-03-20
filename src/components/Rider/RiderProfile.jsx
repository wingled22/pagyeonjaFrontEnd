import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";

const RiderProfile = ({ rider = {}, visible }) => {
  const {
    name = "Unknown",
    address = "Unknown",
    position = "Unknown",
    age = "Unknown",
    vehicle = "Unknown",
    contactNumber = "Unknown",
  } = rider;

  return (
    <div className={`box-header ${visible ? "visible" : "hidden"}`}>
      <div className="rect-profile">
        <Row>
          <Col md={3} lg={2} sm={3} xs={2} className="prof-col">
            <Icon className="profile-img" icon={faCircleUser} color="black" />
          </Col>
          <Col md={7} lg={8} sm={7} xs={10}>
            <Row className="name-row mt-5">
              <p className="text-ridername">{name}</p>
            </Row>
            <Row className="mt-2">
              <Row style={{ marginBottom: -15 }}>
                <Col>
                  <p>Address: {address}</p>
                </Col>
                <Col>
                  <p>Position: {position}</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -15 }}>
                <Col>
                  <p>Age: {age}</p>
                </Col>
                <Col>
                  <p>Vehicle: {vehicle}</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -15 }}>
                <Col>
                  <p>Contact Number: {contactNumber}</p>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RiderProfile;
