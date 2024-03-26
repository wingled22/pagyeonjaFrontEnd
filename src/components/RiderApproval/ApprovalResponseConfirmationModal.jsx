import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import "../../assets/css/RiderDocumentViewerModal.css";
import { useState } from "react";
import { Row, Col } from "reactstrap";
const RiderApprovalResponseConfirmationModal = ({
  isOpen,
  toggle,
  response,
  onResponse,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} centered size="md">
        <ModalHeader toggle={toggle} className="riderDocumentViewerHeader">
          {response ? "Approve" : "Reject"} rider request
        </ModalHeader>
        <ModalBody>
          <center className="mt-3">
            <h5>
              Are you sure you want to{" "}
              {response ? (
                <strong className="text-primary">Approve</strong>
              ) : (
                <strong className="text-danger">Reject</strong>
              )}{" "}
              this rider approval request?
            </h5>

            <Row className="mt-4">
              <Col>
                <Button color="primary" onClick={onResponse}>
                  Yes
                </Button>
              </Col>
              <Col>
                <Button color="danger" onClick={toggle}>
                  No
                </Button>
              </Col>
            </Row>
          </center>
          {/* <Container className="documentViewerContainer">Hello</Container> */}
        </ModalBody>
      </Modal>
    </>
  );
};

export default RiderApprovalResponseConfirmationModal;
