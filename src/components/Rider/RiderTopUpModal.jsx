import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Col,
  Row,
  Container,
} from "reactstrap";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "../../assets/css/RiderTopUpModal.css";
import { useState } from "react";

const RiderTopUpModal = ({ isOpen, untoggle, rider }) => {
  const [open, setOpen] = useState("0");

 

  const data = [
    {
      id: 1111,
      BalanceBeforeTopup: 0.0,
      BalanceAfterTopup: 100.0,
      TopupAmount: 100.0,
      Status: "Success",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
    },
    {
      id: 11,
      BalanceBeforeTopup: 0.0,
      BalanceAfterTopup: 100.0,
      TopupAmount: 100.0,
      Status: "Failed",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
    },
    {
      id: 111,
      BalanceBeforeTopup: 0.0,
      BalanceAfterTopup: 100.0,
      TopupAmount: 100.0,
      Status: "Pending",
      dropOffDate: "March 13, 2024",
      dropOFfTime: "08: 54 AM",
    },
    // {
    //   id: 1,
    //   name: "John Doe",
    //   status: "Active",
    //   dropOffDate: "March 11, 2024",
    //   dropOFfTime: "07: 00 PM",
    //   startingPoint: "Dela Vina St., Bogo City, Cebu",
    //   endDestination: "San Vicente St., Bogo City, Cebu",
    //   riderName: "Juan Parat",
    //   riderID: "00445",
    //   vehicleType: "Tricycle",
    //   vehiclePlate: "06X77V",
    //   startingTime: "06: 00PM",
    //   fare: "₱15.00",
    // },
  ];

  const toggleAct = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} toggle={untoggle} centered size="lg">
        <ModalHeader toggle={untoggle} className="riderTopUpModalHeader">
          Rider Top-up History
        </ModalHeader>
        <Form form="true">
          <ModalBody>
            <center>
              <h5>
                <strong>
                  {rider.firstName}{" "}
                  {rider.middleName ? rider.middleName[0] + "." : ""}{" "}
                  {rider.lastName}
                </strong>
              </h5>
            </center>{" "}
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
                            Balance before Top-up{" "}
                          </span>
                        </Col>
                        <Col md={8}>
                          <span className="riderHistoryTextInfo">
                            {" "}
                            : &emsp;
                            <span className="h5 fw-bold">P</span>
                            <span className="h6 fw-bold">
                              {" "}
                              {item.BalanceBeforeTopup.toFixed(2)}
                            </span>
                          </span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <span className="riderHistoryLabelInfo">
                            Balance after Top-up
                          </span>
                        </Col>
                        <Col md={8}>
                          <span className="riderHistoryTextInfo ">
                            {" "}
                            : &emsp;
                            <span className="h5 fw-bold">P</span>
                            <span className="h6 fw-bold">
                              {" "}
                              {item.BalanceAfterTopup.toFixed(2)}
                            </span>
                          </span>
                        </Col>
                      </Row>

                      <Row className="mt-5">
                        <Col md={4}>
                          <span className="riderHistoryLabelInfo">
                            Top-up Amount
                          </span>
                        </Col>
                        <Col md={4}>
                          <span className="riderHistoryTextInfo text-success">
                            {" "}
                            : &emsp;
                            <span className="h4 fw-bold">P</span>
                            <span className="h5 fw-bold">
                              {" "}
                              {item.TopupAmount.toFixed(2)}
                            </span>
                          </span>
                        </Col>

                        <Col md={1} className="ms-5">
                          <span className="riderHistoryLabelInfo">Status</span>
                        </Col>
                        <Col md={2}>
                          <span
                            className={`riderHistoryTextInfo fw-bold ${
                              item.Status == "Failed"
                                ? "text-danger"
                                : item.Status == "Pending"
                                ? "text-warning"
                                : "text-success"
                            }`}
                          >
                            {" "}
                            : &emsp;{item.Status}
                          </span>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </ModalBody>
          <ModalFooter className="topup-footer-modal"></ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default RiderTopUpModal;
