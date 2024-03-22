import "../../assets/css/CommuterDetails.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faCircleUser
} from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Container, Button } from 'reactstrap';

import CommuterAccordion from '../../components/Commuter/CommuterAccordion.jsx'
import CommuterDocumentViewerModal from "../../components/Commuter/CommuterDocumentViewerModal.jsx";

import { useState, useEffect } from "react";

const CommuterDetails = ({selectedCommuter, suspensionStatus}) => {

    const [modalDocumentViewer, setModalDocumentViewer] = useState(false);
    const [commuterInfo, setCommuterInfo] = useState([]);
    const [suspensionInfo, setSuspensionInfo] = useState([]);
    const toggleDocumentViewer = () => setModalDocumentViewer(!modalDocumentViewer);

    const [startTime, setStartTime] = useState(true);

    function formatDate(dateString) {
        const newDate = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return newDate.toLocaleDateString('en-US', options);
    }

    const getCommuter = async () => {
        try {
    
          const response = await fetch('http://localhost:5180/api/CommuterRegistration/GetCommuter?id=' + selectedCommuter);
          const data = await response.json();
          setCommuterInfo(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    const getLatestSuspension = async () => 
    {
        try
        {
            if(suspensionStatus === true)
            {
                //If suspended, then get the latest end date suspension
                const response = await fetch(`http://localhost:5180/api/Suspension/GetSuspension?userid=${selectedCommuter}&usertype=Commuter`)
                const data = await response.json();
                setSuspensionInfo(data);
            }
        }
        catch(error)
        {
            console.error("Error fetching data:", error);
        }
    }

    const calculateSuspensionDuration = () => {

        let difference = +new Date(`${suspensionInfo.suspensionDate}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        setTimeLeft(timeLeft)
    }

    //This must be after calculateSuspensionDuration. This must be initialize after the calculateSuspensionDuration
    const [timeLeft, setTimeLeft] = useState([]);

    useEffect(() => {
        getCommuter();
        getLatestSuspension();
    }, [selectedCommuter])

    useEffect(() => {
        if(suspensionStatus === true)
        {
            // calculateSuspensionDuration();

            const timer = setTimeout(() => {
                calculateSuspensionDuration();
            }, 1000);
    
            return () => clearTimeout(timer);
        }
    }, [timeLeft])

    return (<>

        {commuterInfo.commuterId && modalDocumentViewer && <CommuterDocumentViewerModal isOpen={modalDocumentViewer} untoggle={toggleDocumentViewer} commuterInfo={commuterInfo}/>}

        <Container className="commuterDetailsContainer" fluid>
            <Row>
                <Col md="2" sm="2" xs={12}>
                    <Icon icon={faCircleUser} color='black' className="imageContainer"></Icon>
                </Col>
                <Col md="6" sm="6" xs={12} id="textInfoContainer">
                    <div className="text-name">{commuterInfo.firstName} {commuterInfo.lastName}</div>
                    <div className="labelInfoPositioning">
                        <span className="labelInfo">Sex: <span className="textInfo">{commuterInfo.sex === 'M' ? 'Male' : 'Female'}</span></span>
                        <div className="labelInfo">Birthdate: <span className="textInfo">{formatDate(commuterInfo.birthdate)}</span></div>
                        <div className="labelInfo">Civil Status: <span className="textInfo">{commuterInfo.civilStatus}</span></div>
                        <div className="labelInfo">Occupation: <span className="textInfo">{commuterInfo.occupation}</span></div>
                    </div>
                </Col>
                <Col md="4" sm="4" xs={12}>
                    <Button className="btn btn-warning btnViewDocuments" onClick={() => {toggleDocumentViewer()}}>
                        Documents
                    </Button>
                </Col>
            </Row>
            <Row className="containerCommuterDetails">
                <Col md={10} sm="10" xs="10">
                    <span className="labelInfo">Address: <span className="textInfo">{commuterInfo.address}</span></span>
                    <div className="labelInfo">Contact Number: <span className="textInfo">{commuterInfo.contactNumber}</span></div>
                    <span className="labelInfo">Email Address: <span className="textInfo">{commuterInfo.emailAddress}</span></span>
                    <br />
                    <br />
                    <div className="labelInfo">Date Registered: <span className="textInfo">{formatDate(commuterInfo.dateApplied)}</span></div>
                    <div className="labelInfo">Status: <span className={`textInfo ${commuterInfo.suspensionStatus === true ? 'text-danger' : 'text-success'}`}>{commuterInfo.suspensionStatus === true ? 'Suspended' : 'Active'}</span></div>
                    {timeLeft.length === 0 ? '' : <div style={{ display: commuterInfo.suspensionStatus === true ? 'block' : 'none' }} className="labelInfo">
                        Duration: <span className={`textInfo ${commuterInfo.suspensionStatus === true ? 'text-danger' : 'text-success'}`}>{timeLeft.days}D: {timeLeft.hours}hrs: {timeLeft.minutes}m: {timeLeft.seconds}s</span>
                    </div>}
                </Col>
            </Row>
            <br />
            <span className="labelRideHistory">Ride History</span>
            <Row>
                <Col className="containerRideHistory" md={11} sm="11" xs="11">
                    <CommuterAccordion />
                </Col>
            </Row>
        </Container>

    </>);
}

export default CommuterDetails;