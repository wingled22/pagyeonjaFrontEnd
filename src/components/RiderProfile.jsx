import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Input, Container } from "reactstrap";
const RiderProfile = () => {
  return (
    <>
      <div className="box-header">
        <div className="rectangle-header">
          <div className="label">
            <h2 className="rider-profile-header">Rider Profile</h2>
          </div>
        </div>

        <div className="rect-profile">
          <Row>
            <Col md={3} lg={2} sm={3} xs={2} className="prof-col">
              <Icon className="profile-img" icon={faCircleUser} color="black" />
            </Col>

            <Col
              md={7}
              lg={8}
              sm={7}
              xs={10}
              // style={{ marginLeft: "60px", marginTop: "40px" }}
            >
              <Row className="name-row mt-5">
                <p className="text-ridername">Juan Dela Cruz</p>
              </Row>
              <Row className="mt-2">
                <Row style={{}}>
                  <Col>
                    <p>Address: Sudlonon Bogo City, Cebu</p>
                  </Col>
                  <Col>
                    <p>Position: Tricy Rider</p>
                  </Col>
                </Row>
                <Row style={{}}>
                  <Col>
                    <p>Age: 20</p>
                  </Col>
                  <Col>
                    <p>Vehicle: Tricycle</p>
                  </Col>
                </Row>
                <Row style={{}}>
                  <Col>
                    <p>Contact Number: 123456</p>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default RiderProfile;
