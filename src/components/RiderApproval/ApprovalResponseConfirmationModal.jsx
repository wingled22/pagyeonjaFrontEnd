import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import "../../assets/css/RiderDocumentViewerModal.css";
import { Row, Col, Input } from "reactstrap";
const RiderApprovalResponseConfirmationModal = ({
  isOpen,
  toggle,
  response,
  onResponse,
  setRejectionMessage,
  rejectionMessage,
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
              {response && (
                <>
                  Are you sure you want to
                  <strong className="text-primary">Approve </strong>
                  this Rider?
                </>
              )}
            </h5>
          </center>
          {!response && (
            <>
              <p>Message:</p>
              <Input
                className="inputReason"
                name="Reason"
                multiple
                type="textarea"
                value={rejectionMessage}
                onChange={(e) => setRejectionMessage(e.target.value)}
              />
            </>
          )}

          {/* <Container className="documentViewerContainer">Hello</Container> */}
        </ModalBody>
        <ModalFooter
          className="riderSuspensionFooter"
          style={{ justifyContent: "space-between" }}
        >
          <Row className="">
            <Col className="ms-auto">
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </Col>
            <Col>
              {!response ? (
                <Button color="warning" size="md" onClick={onResponse}>
                  Reject
                </Button>
              ) : (
                <Button color="primary" size="md" onClick={onResponse}>
                  Approve
                </Button>
              )}
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default RiderApprovalResponseConfirmationModal;
