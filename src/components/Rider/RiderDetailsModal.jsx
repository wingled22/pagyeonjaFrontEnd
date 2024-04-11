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

function formatDate(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateTime.toLocaleDateString("en-US", options);
}

function formatTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  return dateTime.toLocaleTimeString("en-US", options);
}

const RiderDetailsModal = ({ isOpen, toggle, rider }) => {
  // console.log("Rider Object:", rider);
  const [open, setOpen] = useState("0");
  const [document, setDocument] = useState([]);
  const [rideHistoryData, setRideHistoryData] = useState([]);
  const [modalDocumentViewer, setModalDocumentViewer] = useState(false);
  // const [isComponentLoaded, setIsComponentLoaded] = useState(true);
  const toggleDocumentViewer = () =>
    setModalDocumentViewer(!modalDocumentViewer);
  const toggleAct = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

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
      getRideHistory();
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
              <Container
                style={{
                  overflow: "hidden",
                  overflowY: "auto",
                  marginTop: "20px",
                  borderRadius: "30px",
                  background: "#DDDBDB",
                  maxHeight: "500px",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Accordion
                  flush
                  open={open}
                  toggle={toggleAct}
                  id="accordionContainer"
                  style={{
                    padding: "20px",
                    width: "100%",
                    maxHeight: "500px",
                  }}
                >
                  {rideHistoryData.length === 0 && <center>No ride history</center>}
                  {rideHistoryData.map((item) => (
                    <AccordionItem key={item.rideHistoryId}>
                      <AccordionHeader
                        className="accordionHeader"
                        id="accordionHeaderStyle"
                        targetId={item.rideHistoryId.toString()}
                      >
                        <Col md={4}>{formatDate(item.endTime)}</Col>
                        <Col md={4}>
                          &emsp;|&emsp;{formatTime(item.endTime)}
                        </Col>
                      </AccordionHeader>
                      <AccordionBody
                        accordionId={item.rideHistoryId.toString()}
                      >
                        <Row>
                          <Col md={4}>
                            <span className="riderHistoryLabelInfo">
                              Starting Point{" "}
                            </span>
                          </Col>
                          <Col md={4}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.startingPoint}
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <span className="riderHistoryLabelInfo">
                              End Destination
                            </span>
                          </Col>
                          <Col md={5}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.endDestination}
                            </span>
                          </Col>
                        </Row>
                        <Row className="newlineInfo">
                          <Col md={4}>
                            <span className="riderHistoryLabelInfo">Rider</span>
                          </Col>
                          <Col md={4}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.firstName}   {rider.middleName
                                ? rider.middleName[0] + "."
                                : ""}{" "}
                              {item.lastName}
                            </span>
                          </Col>
                          <Row>
                            <Col md={4}>
                              <span className="riderHistoryLabelInfo">
                                Starting Time
                              </span>
                            </Col>
                            <Col md={5} style={{ marginLeft: "8px" }}>
                              <span className="riderHistoryTextInfo">
                                {" "}
                                : &emsp;{formatTime(item.startingTime)}
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <span className="riderHistoryLabelInfo">
                                End Time
                              </span>
                            </Col>
                            <Col md={5} style={{ marginLeft: "8px" }}>
                              <span className="riderHistoryTextInfo">
                                {" "}
                                : &emsp;{formatTime(item.endTime)}
                              </span>
                            </Col>
                          </Row>
                        </Row>

                        <Row className="newlineInfo">
                          <Col md={3}>
                            <span className="riderHistoryLabelInfo">Fare</span>
                          </Col>
                          <Col md={3}>
                            <span
                              className="riderHistoryTextInfo text-success"
                              style={{ marginLeft: "39px" }}
                            >
                              {" "}
                              : &emsp;{item.fare}
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <span className="riderHistoryLabelInfo">
                              Plate Number
                            </span>
                          </Col>
                          <Col md={4}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.vehicleNumber}
                            </span>
                          </Col>
                          <Col md={1} style={{ marginLeft: "20px" }}>
                            <span className="riderHistoryLabelInfo">Rate</span>
                          </Col>
                          <Col md={2}>
                            <span className={`riderHistoryTextInfo ${item.rate >= 1.0 && item.rate <= 2.9 ? 'text-danger' : item.rate >= 3.0 && item.rate <= 3.9 ? 'text-warning' : item.rate >= 4.0 && item.rate <= 5.0 ? 'text-success' : 'text-danger'}`}> : &emsp; <strong>{item.rate ? parseFloat(item.rate).toFixed(1) : "N/A"}</strong></span>
                          </Col>
                        </Row>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Container>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="rider-footer-modal"></ModalFooter>
      </Modal>
    </>
  );
};

export default RiderDetailsModal;
