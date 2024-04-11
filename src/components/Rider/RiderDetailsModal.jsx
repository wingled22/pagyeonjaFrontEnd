import React, { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Container,
} from "reactstrap";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Row, Col } from "reactstrap";
import "../../assets/css/RiderDetailsModal.css";
import RiderDocumentViewerModal from "./RiderDocumentViewerModal";
import RiderAccordion from "./RiderAccordion";


const RiderDetailsModal = ({ isOpen, toggle, rider }) => {
  // console.log("Rider Object:", rider);
  const [open, setOpen] = useState("0");
  const [document, setDocument] = useState([]);
  const [rideHistoryData, setRideHistoryData] = useState([]);
  const [modalDocumentViewer, setModalDocumentViewer] = useState(false);
  // const [isComponentLoaded, setIsComponentLoaded] = useState(true);
  const toggleDocumentViewer = () =>
    setModalDocumentViewer(!modalDocumentViewer);


  function ProfileImage({ rider }) {
    const [imageFailed, setImageFailed] = useState(false);

    return imageFailed ? (
      <Icon icon={faCircleUser} color="white" className="modal-icon-img" />
    ) : (
      <img
        className="modal-profile-img"
        src={`http://localhost:5180/img/rider_profile/${rider.profilePath}`}
        alt="Rider Profile"
        onError={() => setImageFailed(true)}
      />
    );
  }

  const [suspensionInfo, setSuspensionInfo] = useState([]);

  const getLatestSuspension = async () => {
    try {
      if (rider.suspensionStatus === true) {
        //If suspended, then get the latest end date suspension
        const response = await fetch(
          `http://localhost:5180/api/Suspension/GetSuspension?userid=${rider.riderId}&usertype=Rider`
        );
        const data = await response.json();

        setSuspensionInfo(() => data);
      }
    } catch (error) {
      setSuspensionInfo([]);
    }
  };

  const calculateSuspensionDuration = () => {
    let difference =
      +new Date(`${suspensionInfo.suspensionDate}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    setTimeLeft(() => timeLeft);
  };

  const [timeLeft, setTimeLeft] = useState([]);

  const getRideHistory = async () => {

    if (!rider.riderId) {

      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5180/api/RideHistory/GetUserRideHistory?id=${rider.riderId}&usertype=Rider`
      );
      if (response.ok) {
        const data = await response.json();
        setRideHistoryData(data); // Set the ride history data to a state variable
      } else {
        console.error("Failed to fetch ride history data");
      }
    } catch (error) {
      console.error("Error fetching ride history data:", error);
    }
  };

  const getRequirements = async () => {
    if (!rider.riderId) {
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5180/api/document/getdocuments?id=${rider.riderId}&usertype=Rider`
      );
      if (response.ok) {
        const data = await response.json();
        setDocument(data);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateSuspensionDuration();
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    let isComponentLoaded = true;
    if (isComponentLoaded) {
      getRequirements();
      getLatestSuspension();
    }
    return () => (isComponentLoaded = false);
  }, [rider]);
  return (
    <>
      {rider.riderId && modalDocumentViewer && (
        <RiderDocumentViewerModal
          isOpen={modalDocumentViewer}
          untoggle={toggleDocumentViewer}
          rider={rider}
          document={document.documents}
          userName={`${document.firstName} ${document.middleName ? document.middleName[0] + "."
            : ""
            } ${document.lastName}`}
        />
      )}

      <Modal
        className="rider-modal-dialog"
        isOpen={isOpen}
        toggle={toggle}
        size="md"
      >
        <ModalHeader className="rider-header-modal" toggle={toggle}>
          Rider Details
        </ModalHeader>
        <ModalBody>
          <Row>
            <div className="profile-container">
              <Row>
                <Col style={{ padding: "25px" }} md={2}>
                  {rider.profilePath === "" ||
                    rider.profilePath === null ||
                    !rider.profilePath ? (
                    <Icon
                      icon={faCircleUser}
                      color="white"
                      className="modal-icon-img"
                    ></Icon>
                  ) : (
                    <ProfileImage rider={rider} />
                  )}
                </Col>
                <Col md={7}>
                  <Row>
                    <p className="ridername">
                      {rider.firstName}  {rider.middleName
                        ? rider.middleName[0] + "."
                        : ""}{" "}
                      {rider.lastName}
                    </p>
                  </Row>
                  <Row>
                    <span style={{ marginLeft: "40px", fontSize: "22px", color: "white" }}>Balance:
                      <span style={{ marginLeft: "10px", color: "lightgreen" }}>₱{rider.balance}</span></span>
                  </Row>
                </Col>
                <Col md={3}>
                  <button
                    style={{
                      fontWeight: "500",
                      marginTop: "90px",
                      borderRadius: "50px",
                      width: "170px",
                    }}
                    className="btn btn-warning"
                    onClick={() => {
                      toggleDocumentViewer();
                    }}
                  >
                    View Documents
                  </button>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <Col md={5}>
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  marginTop: "30px",
                  marginLeft: "50px",
                }}
              >
                {" "}
                Rider Information
              </p>
              <Container
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 2px 4px 1.5px #00000080",
                  maxWidth: "410px",
                  margin: "auto",
                  height: "70%",

                  marginTop: "25px",
                  padding: "40px",
                  marginLeft: "50px",
                }}
              >
                <span className="label-text">
                  Vehicle No:{" "}
                  <span className="text-value">{rider.vehicleNumber}</span>
                </span>
                <br />
                <span className="label-text">
                  Occupation:{" "}
                  <span className="text-value">{rider.occupation}</span>
                </span>
                <br />
                <span className="label-text">
                  Address: <span className="text-value">{rider.address}</span>
                </span>
                <br />
                <span className="label-text">
                  Age: <span className="text-value">{rider.age}</span>
                </span>
                <br />
                <span className="label-text">
                  Contact Number:{" "}
                  <span className="text-value">{rider.contactNumber}</span>
                </span>
                <br />
                <span className="label-text">
                  Birthdate:{" "}
                  <span className="text-value">{rider.birthdate}</span>
                </span>
                <br />
                <span className="label-text">
                  Email Address:{" "}
                  <span className="text-value">{rider.emailAddress}</span>
                </span>
                <br />
                <span className="label-text">
                  Sex: <span className="text-value">{rider.sex}</span>
                </span>
                <br />
                <span className="label-text">
                  Date Registered:{" "}
                  <span className="text-value">{rider.dateApplied}</span>
                </span>

                <div className="label-text">
                  Status:{" "}
                  <span
                    className={`text-value ${rider.suspensionStatus === true
                      ? "text-danger"
                      : "text-success"
                      }`}
                  >
                    {rider.suspensionStatus === true ? "Suspended" : "Active"}
                  </span>
                </div>
                {timeLeft.length === 0 ? (
                  ""
                ) : (
                  <div
                    style={{
                      display:
                        rider.suspensionStatus === true ? "block" : "none",
                    }}
                    className="label-text"
                  >
                    Duration:{" "}
                    <span
                      style={{ fontSize: "17px" }}
                      className={`textInfo ${rider.suspensionStatus === true
                        ? "text-danger"
                        : "text-success"
                        }`}
                    >
                      {timeLeft.days}D: {timeLeft.hours}hrs: {timeLeft.minutes}
                      m: {timeLeft.seconds}s
                    </span>
                  </div>
                )}
              </Container>
            </Col>
            <Col md={7}>
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  marginTop: "29px",
                  marginLeft: "50px",
                }}
              >
                {" "}
                Ride History
              </p>
              <RiderAccordion
             
                rider={rider}
         
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="rider-footer-modal"></ModalFooter>
      </Modal>
    </>
  );
};

export default RiderDetailsModal;
