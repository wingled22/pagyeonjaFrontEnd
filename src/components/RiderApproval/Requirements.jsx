import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import images1 from "../../assets/image/carlo.jpg";

import RiderDocumentViewerModal from "../Rider/RiderDocumentViewerModal";
import ApprovalResponseConfirmationModal from "./ApprovalResponseConfirmationModal";

import ViewRequirements from "./RequirementsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

const Requirements = ({ userId, getApprovals }) => {
  console.log("requirements", userId);
  const [document, setDocument] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [approvalResponse, setApprovalResponse] = useState(null);
  console.log(approvalResponse);
  // states for document modal
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // states for approval modal
  const [approvalModalIsOpen, setApprovalModalIsOpen] = useState(false);
  const toggleApprovaModal = () => setApprovalModalIsOpen(!approvalModalIsOpen);
  const [rejectionMessage, setRejectionMessage] = useState("");
  const onSetRejectionMessage = (message) => {
    setRejectionMessage(() => message);
    console.log(message);
  };

  const getRequirements = async () => {
    try {
      const response = await fetch(
        `http://localhost:5180/api/document/getdocuments?id=${userId}&usertype=Rider`
      );
      if (response.ok) {
        setDocument(await response.json());
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Dynamic selection of documents
  const onDocumentButtonClick = (documentType) => {
    setDocumentFiles(
      document.documents.filter(
        (item) =>
          item.documentName.includes(documentType) && item.userId === userId
      )
    );
  };

  // approve or reject the rider approval request
  const onResponseRiderApproval = async () => {
    try {
      const response = await fetch(
        `http://localhost:5180/api/Approval/UserApprovalResponse?usertype=Rider&userid=${userId}&response=${approvalResponse}&rejectionmessage=${rejectionMessage}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        toast.success('Rider approval successfully.');
        toggleApprovaModal();
        getRequirements();
        getApprovals();
        console.log({
          riderId: userId,
          response: approvalResponse,
          message: rejectionMessage,
        });
      } else {
        // This will show a rejection toast if the response is not OK
        toast.error('Rider was rejected.');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while recording rider approval response.');
    }
  };
  useEffect(() => {
    getRequirements();
  }, [userId]);
  return (
    <>
      <RiderDocumentViewerModal
        isOpen={isOpen}
        untoggle={toggle}
        document={documentFiles}
        userName={`${document.firstName} ${
          document.middleName && document.middleName[0]
        }. ${document.lastName}`}
      />
      <ApprovalResponseConfirmationModal
        isOpen={approvalModalIsOpen}
        toggle={toggleApprovaModal}
        response={approvalResponse}
        onResponse={onResponseRiderApproval}
        setRejectionMessage={onSetRejectionMessage}
        rejectionMessage={rejectionMessage}
        userType={"Rider"}
      />
      <div className="rectangle-requiment">
        <>
          <Row>
            <div
              style={{
                backgroundImage: `url(${
                  document.profilePath != null
                    ? `http://localhost:5180/img/rider_profile/${document.profilePath}`
                    : images1
                })`, // use default image if profilePath is null
                backgroundSize: "cover", // this will make sure the image covers the whole div
              }}
              className="rider-profile d-flex ms-auto me-auto mt-3"
            />
            <h5 style={{ textAlign: "center", marginTop: "10px" }}>
              {document.firstName}{" "}
              {document.middleName && document.middleName[0]}.{" "}
              {document.lastName}
            </h5>
            <div className="profile-line"></div>
          </Row>
          <Row>
            <ViewRequirements
              viewText={"View OR file"}
              viewFileText={"Select and upload the files of your choice"}
              onDocumentButtonClick={onDocumentButtonClick}
              documentType={"or"}
              toggle={toggle}
            />

            <ViewRequirements
              viewText={"View CR file"}
              viewFileText={"Select and upload the files of your choice"}
              onDocumentButtonClick={onDocumentButtonClick}
              documentType={"cr"}
              toggle={toggle}
            />

            <ViewRequirements
              viewText={"View Drivers License file"}
              viewFileText={"Select and upload the files of your choice"}
              onDocumentButtonClick={onDocumentButtonClick}
              documentType={"license"}
              toggle={toggle}
            />

            <ViewRequirements
              viewText={"View NBI clearance file"}
              viewFileText={"Select and upload the files of your choice"}
              onDocumentButtonClick={onDocumentButtonClick}
              documentType={"nbi"}
              toggle={toggle}
            />
          </Row>

          <div className="btnAppRej">
            <Button
              className="btn-rider-approval"
              color="success"
              style={{ borderRadius: 50, fontWeight: "bold" }}
              onClick={() => {
                setApprovalResponse(true);
                toggleApprovaModal();
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Approve
            </Button>
            <Button
              className="btn-rider-approval"
              color="danger"
              style={{ borderRadius: 50, fontWeight: "bold" }}
              onClick={() => {
                setApprovalResponse(false);
                toggleApprovaModal();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} /> &nbsp;Reject
            </Button>
          </div>
        </>
      </div>
    </>
  );
};

export default Requirements;
