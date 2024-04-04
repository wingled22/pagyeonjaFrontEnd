import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Input, Container } from "reactstrap";
import { useEffect, useState } from "react";
const RiderProfile = ({ rider }) => {
  const [imageFailed, setImageFailed] = useState(false);

  function ProfileImage({ rider }) {
    return imageFailed ? (
      <Icon icon={faCircleUser} color="black" className="icon-img" />
    ) : (
      <img
        className="profile-img"
        src={`http://localhost:5180/img/rider_profile/${rider.profilePath}`}
        alt="Rider Profile"
        onError={() => setImageFailed(true)}
      />
    );
  }
  return (
    <div className="box-header">
      <div className="rect-profile">
        <Row>
          <Col
            style={{ padding: "60px" }}
            md={3}
            lg={2}
            sm={3}
            xs={2}
            className="prof-col"
          >
            {rider.profilePath === "" ||
            rider.profilePath === null ||
            !rider.profilePath ? (
              <Icon
                icon={faCircleUser}
                color="black"
                className="icon-img"
              ></Icon>
            ) : (
              <ProfileImage rider={rider} />
            )}
          </Col>

          <Col style={{ padding: "20px" }} md={7} lg={8} sm={7} xs={10}>
            <Row className="name-row mt-5">
              <p className="text-ridername">
                {rider.firstName} {rider.middleName[0]}. {rider.lastName}
              </p>
            </Row>
            <Row className="mt-2">
              <Row style={{ marginBottom: -15 }}>
                <Col>
                  <p>Address: {rider.address}</p>
                </Col>
                <Col>
                  <p>Position: {rider.occupation}</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -15 }}>
                <Col>
                  <p>Age: {rider.age}</p>
                </Col>
                <Col>
                  <p>Vehicle Number: {rider.vehicleNumber}</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -15 }}>
                <Col>
                  <p>Contact Number: {rider.contactNumber}</p>
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
