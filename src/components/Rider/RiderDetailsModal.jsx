import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container } from "reactstrap";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Row, Col } from "reactstrap";
import "../../assets/css/RiderDetailsModal.css";
import RiderDocumentViewerModal from "./RiderDocumentViewerModal";
const RiderDetailsModal = ({ isOpen, toggle, rider}) => {
  // console.log("Rider Object:", rider);
  const [open, setOpen] = useState("0");
  const [modalDocumentViewer, setModalDocumentViewer] = useState(false);
  const toggleDocumentViewer = () => setModalDocumentViewer(!modalDocumentViewer);
  const toggleAct = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id); 
    }
  };


  const data = [
    {
      id: 1,
      name: "John Doe",
      status: "Active",
      dropOffDate: "March 11, 2024",
      dropOFfTime: "07: 00 PM",
      startingPoint: "Dela Vina St., Bogo City, Cebu",
      endDestination: "San Vicente St., Bogo City, Cebu",
      riderName: "Juan Parat",
      riderID: "00445",
      vehicleType: "Tricycle",
      vehiclePlate: "06X77V",
      startingTime: "06: 00PM",
      fare: "₱15.00",
    },
    {
      id: 2,
      name: "Jane Doe",
      status: "Inactive",
      dropOffDate: "March 12, 2024",
      dropOFfTime: "01: 37 PM",
      startingPoint: "Dela Vina St., Bogo City, Cebu",
      endDestination: "San Vicente St., Bogo City, Cebu",
      riderName: "Juan Parat",
      riderID: "00669",
      vehicleType: "Tricycle",
      vehiclePlate: "06X77V",
      startingTime: "06: 00PM",
      fare: "₱15.00",
    },
    {
      id: 3,
      name: "Bob Smith",
      status: "Active",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
      startingPoint: "Dela Vina St., Bogo City, Cebu",
      endDestination: "San Vicente St., Bogo City, Cebu",
      riderName: "Juan Parat",
      riderID: "00669",
      vehicleType: "Tricycle",
      vehiclePlate: "06X77V",
      startingTime: "06: 00PM",
      fare: "₱15.00",
    },
    {
      id: 4,
      name: "Bob Smith",
      status: "Active",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
      startingPoint: "Dela Vina St., Bogo City, Cebu",
      endDestination: "San Vicente St., Bogo City, Cebu",
      riderName: "Juan Parat",
      riderID: "00669",
      vehicleType: "Tricycle",
      vehiclePlate: "06X77V",
      startingTime: "06: 00PM",
      fare: "₱15.00",
    },
    {
      id: 5,
      name: "Bob Smith",
      status: "Active",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
      startingPoint: "Dela Vina St., Bogo City, Cebu",
      endDestination: "San Vicente St., Bogo City, Cebu",
      riderName: "Juan Parat",
      riderID: "00669",
      vehicleType: "Tricycle",
      vehiclePlate: "06X77V",
      startingTime: "06: 00PM",
      fare: "₱15.00",
    },
    {
      id: 6,
      name: "Bob Smith",
      status: "Active",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
      startingPoint: "Dela Vina St., Bogo City, Cebu",
      endDestination: "San Vicente St., Bogo City, Cebu",
      riderName: "Juan Parat",
      riderID: "00669",
      vehicleType: "Tricycle",
      vehiclePlate: "06X77V",
      startingTime: "06: 00PM",
      fare: "₱15.00",
    },
  ];
  return (
    <>
    <RiderDocumentViewerModal isOpen={modalDocumentViewer} untoggle={toggleDocumentViewer} />
      
      <Modal className="rider-modal-dialog"isOpen={isOpen} toggle={toggle} size="md">
        <ModalHeader className="rider-header-modal" toggle={toggle}>Rider Details</ModalHeader>
        <ModalBody>
          <Row>
            <div className="profile-container">
              <Row>
                <Col md={2}>
                  <Icon
                    className="profile-image"
                    icon={faCircleUser}
                    color="white"
                    style={{ fontSize: "90px" }}
                  />
                </Col>
                <Col md={7}>
                  <Row>
                    <p className="ridername">{rider.firstName} {rider.lastName}</p>
                  </Row>
                </Col>
                <Col md={3}>
                  <button style={{ fontWeight: "500", marginTop: "90px", borderRadius: "50px", width: "170px" }} className="btn btn-warning" onClick={() => {toggleDocumentViewer()}}>View Documents</button>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <Col md={5}>
              <p style={{fontSize: "23px", fontWeight: "600", marginTop: "30px", marginLeft: "50px"}}> Rider Information</p>
              <Container
                style={{
                  borderRadius: '10px',
                  boxShadow: '0px 2px 4px 1.5px #00000080',
                  maxWidth: '449px',
                  margin: 'auto',
                  height: '70%',
                   
                  marginTop: '25px',
                  padding: "40px",
                  marginLeft: "50px"
                }}>
                <span className="label-text">Vehicle No: <span className="text-value">{rider.vehicleNumber}</span></span>
                <br />
                <span className="label-text">Occupation: <span className="text-value">{rider.occupation}</span></span>
                <br />
                <span className="label-text">Address: <span className="text-value">{rider.address}</span></span>
                <br />
                <span className="label-text">Age: <span className="text-value">{rider.age}</span></span>
                <br />
                <span className="label-text">Contact Number: <span className="text-value">{rider.contactNumber}</span></span>
                <br />
                <span className="label-text">Birthdate: <span className="text-value">{rider.birthdate}</span></span>
                <br />
                <span className="label-text">Email Address: <span className="text-value">{rider.emailAddress}</span></span>
                <br />
                <span className="label-text">Sex: <span className="text-value">{rider.sex}</span></span>
                <br />
                <span className="label-text">Date Registered: <span className="text-value">{rider.dateApplied}</span></span>

                <div className="label-text">Status: <span className={`text-value ${rider.suspensionStatus === true ? 'text-danger' : 'text-success'}`}>{rider.suspensionStatus === true ? 'Suspended' : 'Active'}</span></div>
                    <div style={{ display: rider.suspensionStatus === true ? 'block' : 'none' }} className="label-text">
                        Duration: <span className={`textInfo ${rider.suspensionStatus === true ? 'text-danger' : 'text-success'}`}>1D : 06hrs: 32m: 06s</span>
                    </div>
              </Container>
            </Col>
            <Col md={7}>
            <p style={{fontSize: "23px", fontWeight: "600", marginTop: "29px", marginLeft: "50px"}}> Ride History</p>
              <Container style={{ overflow: 'hidden', overflowY: "auto", marginTop: "20px", borderRadius: "30px", background: "#DDDBDB", maxHeight: "100%", width: "90%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Accordion
                  flush
                  open={open}
                  toggle={toggleAct}
                  id="accordionContainer"
                  style={{
                    padding: "20px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {data.map((item) => (
                    <AccordionItem key={item.id}>
                      <AccordionHeader
                        className="accordionHeader"
                        id="accordionHeaderStyle"
                        targetId={item.id.toString()}
                      >
                        <Col md={3}>{item.dropOffDate}</Col>
                        <Col>&emsp;|&emsp; {item.dropOFfTime}</Col>
                      </AccordionHeader>
                      <AccordionBody accordionId={item.id.toString()}>
                        <Row>
                          <Col md={4}>
                            <span className="riderHistoryLabelInfo">
                              Starting Point{" "}
                            </span>
                          </Col>
                          <Col md={8}>
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
                          <Col md={8}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.endDestination}
                            </span>
                          </Col>
                        </Row>
                        <Row className="newlineInfo">
                          <Col md={2}>
                            <span className="riderHistoryLabelInfo">Rider</span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.riderName}
                            </span>
                          </Col>
                          <Col md={3} style={{ marginLeft: "20px" }}>
                            <span className="riderHistoryLabelInfo">
                              Starting Time
                            </span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.startingTime}
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={2}>
                            <span className="riderHistoryLabelInfo">Rider ID</span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.riderID}
                            </span>
                          </Col>
                          <Col md={3} style={{ marginLeft: "20px" }}>
                            <span className="riderHistoryLabelInfo">End Time</span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.dropOFfTime}
                            </span>
                          </Col>
                        </Row>
                        <Row className="newlineInfo">
                          <Col md={3}>
                            <span className="riderHistoryLabelInfo">Vehicle</span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.vehicleType}
                            </span>
                          </Col>
                          <Col md={2} style={{ marginLeft: "20px" }}>
                            <span className="riderHistoryLabelInfo">Fare</span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo text-success">
                              {" "}
                              : &emsp;{item.fare}
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={3}>
                            <span className="riderHistoryLabelInfo">
                              Plate Number
                            </span>
                          </Col>
                          <Col md={3}>
                            <span className="riderHistoryTextInfo">
                              {" "}
                              : &emsp;{item.vehiclePlate}
                            </span>
                          </Col>
                          <Col md={2} style={{ marginLeft: "20px" }}>
                            <span className="riderHistoryLabelInfo">Rate</span>
                          </Col>
                          <Col md={3}>
                            <span
                              className={`riderHistoryTextInfo ${2.7 >= 1.0 && 2.7 <= 2.9
                                ? "text-danger"
                                : 2.7 >= 3.0 && 2.7 <= 3.9
                                  ? "text-warning"
                                  : "text-success"
                                }`}
                            >
                              {" "}
                              : &emsp;2.7
                            </span>
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
