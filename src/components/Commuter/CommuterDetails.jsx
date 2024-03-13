import "../../assets/css/CommuterDetails.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { Row, Col } from "reactstrap";

const CommuterDetails = () => {
  return (
    <>
      <div className="commuterDetailsContainer">
        <Row>
          <Col md="2">
            <Icon
              icon={faCircleUser}
              color="black"
              className="imageContainer"
            ></Icon>
          </Col>
          <Col md="6" id="textInfoContainer">
            <div className="text-name">Andrew Walker</div>
            <div className="labelInfoPositioning">
              <span className="labelInfo">
                Sex: <span className="textInfo">Male</span>
              </span>
              <div className="labelInfo">
                Birthdate: <span className="textInfo">November 01, 2000</span>
              </div>
              <div className="labelInfo">
                Civil Status: <span className="textInfo">Single</span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="btn btn-warning btnViewDocuments">
              View Documents
            </div>
          </Col>
        </Row>
        <Row>
          <div className="containerCommuterDetails">
            <span className="labelInfo">
              Address:{" "}
              <span className="textInfo">
                Barangay Maya, Biringan City, Samar
              </span>
            </span>
            <div className="labelInfo">
              Contact Number: <span className="textInfo">09163345411</span>
            </div>
            <div className="labelInfo">
              Email Address:{" "}
              <span className="textInfo">andrewwalker@gmail.com</span>
            </div>
            <br />
            <div className="labelInfo">
              Date Registered: <span className="textInfo">March 06, 2024</span>
            </div>
            <div className="labelInfo">
              Status: <span className="textInfo">Suspended</span>
            </div>
            <div className="labelInfo">
              Duration: <span className="textInfo">1D : 06hrs: 32m: 06s</span>
            </div>
          </div>
        </Row>
        <br />
        <br />
        <Row>
          <div className="labelRideHistory">Ride History</div>
        </Row>
      </div>
    </>
  );
};

export default CommuterDetails;
