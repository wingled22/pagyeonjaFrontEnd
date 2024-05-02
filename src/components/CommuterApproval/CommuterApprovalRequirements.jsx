import React from "react";
import { Button, Row } from "reactstrap";
import images1 from "../../assets/image/carlo.jpg";
import { useState, useEffect } from "react";

// import ViewRequirements from "./RequirementsCards";
import CommuterDocumentViewerModal from "../Commuter/CommuterDocumentViewerModal";
import ApprovalResponseConfirmationModal from "../RiderApproval/ApprovalResponseConfirmationModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommuterApprovalViewRequirements from "./CommuterApprovalRequirementsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/CommuterApproval/CommuterApprovalRequirements.css";

import { useDispatch, useSelector } from "react-redux";
import {
  getCommuter,
  getCommuterApprovalRequirements,
  respondCommuterApprovalRequest,
} from "../../utils/commuterApproval/commuterApprovalSlice";
import { addCommuter } from "../../utils/commuter/approvedCommuterSlice";

const CommuterApprovalRequirements = ({ userId, updateApprovalTable }) => {
  const [document, setDocument] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [approvalResponse, setApprovalResponse] = useState(null);

  // states for document modal
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // states for approval modal
  const [approvalModalIsOpen, setApprovalModalIsOpen] = useState(false);
  const toggleApprovaModal = () => setApprovalModalIsOpen(!approvalModalIsOpen);
  const [rejectionMessage, setRejectionMessage] = useState("");
  const onSetRejectionMessage = (message) => {
    setRejectionMessage(() => message);
  };
  const [approval, setApproval] = useState([]);

  // redux stuffs
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.commuterApprovals);

  const getRequirements = async () => {
    const { payload } = await dispatch(getCommuterApprovalRequirements(userId));
    if (isSuccess) {
      setDocument(payload);
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
  const onResponseRiderApproval = () => {
    dispatch(
      respondCommuterApprovalRequest({
        userId,
        approvalResponse,
        rejectionMessage,
      })
    );
    if (isSuccess) {
      toggleApprovaModal();
      updateApprovalTable(userId, approvalResponse);
      if (approvalResponse) {
        toast.success("Successfully approved Commuter request!");
        dispatch(addCommuter({ approval }));
      } else {
        toast.success("Request rejected!");
      }
    } else {
      toast.error("Something went wrong");
    }
  };
  // console.log(approval);
  const getApproval = async () => {
    const { payload } = await dispatch(getCommuter(userId));
    if (isSuccess) {
      setApproval(payload);
    }
  };

  useEffect(() => {
    getRequirements();
    getApproval();
  }, [userId, dispatch]);

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
      <ApprovalResponseConfirmationModal
        isOpen={approvalModalIsOpen}
        toggle={toggleApprovaModal}
        response={approvalResponse}
        onResponse={onResponseRiderApproval}
        setRejectionMessage={onSetRejectionMessage}
        rejectionMessage={rejectionMessage}
        userType={"Commuter"}
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
            viewText={"View Valid ID file"}
            viewFileText={"View the uploaded files from commuter"}
            onDocumentButtonClick={onDocumentButtonClick}
            documentType={"valid ID"}
            toggle={toggle}
          />
        </Row>

        <div className="btnAppRej">
          {approval.approvalStatus === "" ||
          approval.approvalStatus === null ? (
            <>
              <Button
                className="btn-rider-approval"
                color="success"
                style={{
                  borderRadius: 50,
                  fontWeight: "bold",
                  marginTop: "220px",
                }}
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
                style={{
                  borderRadius: 50,
                  fontWeight: "bold",
                  marginTop: "220px",
                }}
                onClick={() => {
                  setApprovalResponse(false);
                  toggleApprovaModal();
                }}
              >
                <FontAwesomeIcon icon={faCircleXmark} /> &nbsp;Reject
              </Button>
            </>
          ) : (
            <Button
              className="btn-rider-approval"
              color="success"
              style={{
                borderRadius: 50,
                fontWeight: "bold",
                marginTop: "220px",
              }}
              onClick={() => {
                setApprovalResponse(true);
                toggleApprovaModal();
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Approve
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CommuterApprovalRequirements;
