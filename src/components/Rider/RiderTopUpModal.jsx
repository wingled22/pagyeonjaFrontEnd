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
import { useState, useEffect } from "react";

const RiderTopUpModal = ({ isOpen, untoggle, rider }) => {


  
  const [open, setOpen] = useState("0");

  const [TopUpHistory, setTopUpHistory] = useState([]);


  const getsetTopUpHistoryList = async () => {

    if(!rider.riderId) return;
    try {
      const response = await fetch(
        `http://localhost:5180/api/TopupHistory/GetRiderTopupHistory?id=${rider.riderId}`
      );
      const data = await response.json();
      setTopUpHistory(data);

      console.log("data nis getsetTopUpHistoryList rider: ",data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getsetTopUpHistoryList();
  }, [rider.riderId]);



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
                {TopUpHistory.length === 0 && <center>No Record of Topup History</center>}
                {TopUpHistory.map((item) => (
                  <AccordionItem key={item.id}>
                    <AccordionHeader
                      className="accordionHeader"
                      id="accordionHeaderStyle"
                      targetId={item.topupId}
                    >
                      <Col md={3}>{formatDate(item.topupDate)}</Col>
                      <Col>&emsp;|&emsp; {formatTime(item.topupDate)}</Col>
                    </AccordionHeader>
                    <AccordionBody accordionId={item.topupId}>
                 
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
                              {item.topupBefore.toFixed(2)}
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
                              {item.topupAfter.toFixed(2)}
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
                              {item.topupAmount.toFixed(2)}
                            </span>
                          </span>
                        </Col>

                        <Col md={1} className="ms-5">
                          <span className="riderHistoryLabelInfo">Status</span>
                        </Col>
                        <Col md={2}>
                          :
                          <span  className={`riderHistoryTextInfo fw-bold ${item.status.toLowerCase() == "failed"
                                ? "text-danger"
                                :  item.status.toLowerCase() == "pending"
                                  ? "text-warning"
                                  : "text-success"
                                }`}>
                            
                            {" "}
                             &emsp;{item.status}
                          </span>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </ModalBody>
          <ModalFooter className="topup-footer-modal">

          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default RiderTopUpModal;
