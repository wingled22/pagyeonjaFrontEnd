import "../../assets/css/CommuterDetails.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container, Button } from "reactstrap";
import CommuterAccordion from "../../components/Commuter/CommuterAccordion.jsx";
import CommuterDocumentViewerModal from "../../components/Commuter/CommuterDocumentViewerModal.jsx";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApprovedCommuter,
  getCommuterDocuments,
  getCommuterSuspension,
} from "../../utils/commuter/approvedCommuterSlice.js";

const formatDate = (dateString) => {
  const newDate = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("en-US", options);
};

const CommuterDetails = ({
  selectedCommuter,
  suspensionStatus,
  triggerChanges,
}) => {
  const [modalDocumentViewer, setModalDocumentViewer] = useState(false);
  const [document, setDocument] = useState([]);
  const [commuterInfo, setCommuterInfo] = useState([]);
  const [suspensionInfo, setSuspensionInfo] = useState([]);

  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.approvedCommuters);

  const toggleDocumentViewer = () =>
    setModalDocumentViewer(!modalDocumentViewer);

  const getCommuter = async () => {
    const { payload } = await dispatch(getApprovedCommuter(selectedCommuter));
    if (isSuccess) {
      setCommuterInfo(payload);
    }
  };

  const getLatestSuspension = async () => {
    const { payload } = await dispatch(getCommuterSuspension(selectedCommuter));
    if (isSuccess) {
      setSuspensionInfo(payload);
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

    setTimeLeft(timeLeft);
  };

  //This must be after calculateSuspensionDuration. This must be initialize after the calculateSuspensionDuration
  const [timeLeft, setTimeLeft] = useState([]);

  const getRequirements = async () => {
    if (!commuterInfo.commuterId) {
      return;
    }

    const { payload } = await dispatch(
      getCommuterDocuments(commuterInfo.commuterId)
    );
    if (isSuccess) {
      setDocument(payload);
    }
  };

  useEffect(() => {
    if (suspensionStatus === true) {
      const timer = setTimeout(() => {
        calculateSuspensionDuration();
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    getCommuter();
    getLatestSuspension();
  }, [selectedCommuter, suspensionStatus, triggerChanges, dispatch]);

  useEffect(() => {
    getRequirements();
  }, [commuterInfo, triggerChanges]);

  function ProfileImage({ commuterInfo }) {
    const [imageFailed, setImageFailed] = useState(false);

    return imageFailed ? (
      <Icon icon={faCircleUser} color="black" className="iconContainer"></Icon>
    ) : (
      <img
        className="imageContainer"
        src={`http://localhost:5180/img/commuter_profile/${commuterInfo.profilePath}`}
        alt=""
      />
    );
  }

  return (
    <>
      {commuterInfo.commuterId && modalDocumentViewer && (
        <CommuterDocumentViewerModal
          isOpen={modalDocumentViewer}
          untoggle={toggleDocumentViewer}
          document={document.documents}
          userName={`${document.firstName} ${
            document.middleName ? document.middleName[0] + "." : ""
          } ${document.lastName}`}
        />
      )}

      <Container className="commuterDetailsContainer" fluid>
        <Row>
          <Col md="2" sm="2" xs={12}>
            {commuterInfo.profilePath === "" ||
            commuterInfo.profilePath === null ||
            !commuterInfo.profilePath ? (
              <Icon
                icon={faCircleUser}
                color="black"
                className="iconContainer"
              ></Icon>
            ) : (
              <ProfileImage commuterInfo={commuterInfo} />
            )}
          </Col>
          <Col md="6" sm="6" xs={12} id="textInfoContainer">
            <div className="text-name">
              {commuterInfo.firstName} {commuterInfo.lastName}
            </div>
            <div className="labelInfoPositioning">
              <span className="labelInfo">
                Sex:{" "}
                <span className="textInfo">
                  {commuterInfo.sex === "M" ? "Male" : "Female"}
                </span>
              </span>
              <div className="labelInfo">
                Birthdate:{" "}
                <span className="textInfo">
                  {formatDate(commuterInfo.birthdate)}
                </span>
              </div>
              <div className="labelInfo">
                Civil Status:{" "}
                <span className="textInfo">{commuterInfo.civilStatus}</span>
              </div>
              <div className="labelInfo">
                Occupation:{" "}
                <span className="textInfo">{commuterInfo.occupation}</span>
              </div>
            </div>
          </Col>
          <Col md="4" sm="4" xs={12}>
            <Button
              className="btn btn-warning btnViewDocuments"
              onClick={() => {
                toggleDocumentViewer();
              }}
            >
              Documents
            </Button>
          </Col>
        </Row>
        <Row className="containerCommuterDetails">
          <Col md={10} sm="10" xs="10">
            <span className="labelInfo">
              Address: <span className="textInfo">{commuterInfo.address}</span>
            </span>
            <div className="labelInfo">
              Contact Number:{" "}
              <span className="textInfo">{commuterInfo.contactNumber}</span>
            </div>
            <span className="labelInfo">
              Email Address:{" "}
              <span className="textInfo">{commuterInfo.emailAddress}</span>
            </span>
            <br />
            <br />
            <div className="labelInfo">
              Date Registered:{" "}
              <span className="textInfo">
                {formatDate(commuterInfo.dateApplied)}
              </span>
            </div>
            <div className="labelInfo">
              Status:{" "}
              <span
                className={`textInfo ${
                  commuterInfo.suspensionStatus === true
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {commuterInfo.suspensionStatus === true
                  ? "Suspended"
                  : "Active"}
              </span>
            </div>
            {timeLeft.length === 0 ? (
              ""
            ) : (
              <div
                style={{
                  display:
                    commuterInfo.suspensionStatus === true ? "block" : "none",
                }}
                className="labelInfo"
              >
                Duration:{" "}
                <span
                  className={`textInfo ${
                    commuterInfo.suspensionStatus === true
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {timeLeft.days}D: {timeLeft.hours}hrs: {timeLeft.minutes}m:{" "}
                  {timeLeft.seconds}s
                </span>
              </div>
            )}
          </Col>
        </Row>
        <br />
        <span className="labelRideHistory">Ride History</span>
        <Row>
          <Col className="containerRideHistory" md={11} sm="11" xs="11">
            <CommuterAccordion selectedCommuter={selectedCommuter} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CommuterDetails;
