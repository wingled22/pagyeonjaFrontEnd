import React from "react";
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
import { useState, useEffect } from "react";
import { auto } from "@popperjs/core";

// import ViewRequirements from "./RequirementsCards";
import CommuterDocumentViewerModal from "../Commuter/CommuterDocumentViewerModal";
// import RiderApprovalResponseConfirmationModal from "./ApprovalResponseConfirmationModal";
import RiderApprovalResponseConfirmationModal from "../RiderApproval/ApprovalResponseConfirmationModal";

import CommuterApprovalViewRequirements from "./CommuterApprovalRequirementsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/CommuterApproval/CommuterApprovalRequirements.css";

const CommuterApprovalRequirements = ({ userId, getApprovals }) => {
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
        `http://localhost:5180/api/document/getdocuments?id=${userId}&usertype=Commuter`
      );
      if (response.ok) {
        setDocument(await response.json());
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        `http://localhost:5180/api/Approval/UserApprovalResponse?usertype=Commuter&userid=${userId}&response=${approvalResponse}&rejectionmessage=${rejectionMessage}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        toggleApprovaModal();
        getRequirements();
        getApprovals();
        console.log({
          commuterId: userId,
          response: approvalResponse,
          message: rejectionMessage,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRequirements();
  }, [userId]);

  return (
    <>
      <CommuterDocumentViewerModal
        isOpen={isOpen}
        untoggle={toggle}
        document={documentFiles}
        userName={`${document.firstName} ${
          document.middleName && document.middleName[0]
        }. ${document.lastName}`}
      />
      <RiderApprovalResponseConfirmationModal
        isOpen={approvalModalIsOpen}
        toggle={toggleApprovaModal}
        response={approvalResponse}
        onResponse={onResponseRiderApproval}
        setRejectionMessage={onSetRejectionMessage}
        rejectionMessage={rejectionMessage}
      />
      <div className="commuter-approval-rectangle-requiment">
        <Row>
          <div
            style={{
              backgroundImage: `url(${
                document.profilePath != null
                  ? `http://localhost:5180/img/commuter_profile/${document.profilePath}`
                  : images1
              })`,
              backgroundSize: "cover",
            }}
            className="rider-profile d-flex ms-auto me-auto mt-3"
          />
          <h5 style={{ textAlign: "center", marginTop: "10px" }}>
            {document.firstName} {document.middleName && document.middleName[0]}
            . {document.lastName}
          </h5>
          <div className="profile-line"></div>
        </Row>
        <Row>
          <CommuterApprovalViewRequirements
            viewText={"View OR file"}
            viewFileText={"View the uploaded files from commuter"}
            onDocumentButtonClick={onDocumentButtonClick}
            documentType={"or"}
            toggle={toggle}
          />

          <CommuterApprovalViewRequirements
            viewText={"View CR file"}
            viewFileText={"View the uploaded files from commuter"}
            onDocumentButtonClick={onDocumentButtonClick}
            documentType={"cr"}
            toggle={toggle}
          />

          <CommuterApprovalViewRequirements
            viewText={"View Driver's License file"}
            viewFileText={"View the uploaded files from commuter"}
            onDocumentButtonClick={onDocumentButtonClick}
            documentType={"license"}
            toggle={toggle}
          />

          <CommuterApprovalViewRequirements
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
      </div>
    </>
  );
};

export default CommuterApprovalRequirements;
