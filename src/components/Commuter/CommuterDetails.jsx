import "../../assets/css/CommuterDetails.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faCircleUser
} from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Container } from 'reactstrap';

import CommuterAccordion from '../../components/Commuter/CommuterAccordion.jsx'

const CommuterDetails = () => {
    return (<>

        <Container className="commuterDetailsContainer" fluid>
            <Row>
                <Col md="2" sm="2" xs="2">
                    <Icon icon={faCircleUser} color='black' className="imageContainer"></Icon>
                </Col>
                <Col md="6" sm="6" xs="6" id="textInfoContainer">
                    <div className="text-name">Andrew Walker</div>
                    <div className="labelInfoPositioning">
                        <span className="labelInfo">Sex: <span className="textInfo">Male</span></span>
                        <div className="labelInfo">Birthdate: <span className="textInfo">November 01, 2000</span></div>
                        <div className="labelInfo">Civil Status: <span className="textInfo">Single</span></div>
                    </div>
                </Col>
                <Col md="4" sm="4" xs="4">
                    <div className="btn btn-warning btnViewDocuments">
                        Documents
                    </div>
                </Col>
            </Row>
            <Row className="containerCommuterDetails">
                <Col md={10} sm="10" xs="10">
                    <span className="labelInfo">Address: <span className="textInfo">Barangay Maya, Biringan City, Samar</span></span>
                    <div className="labelInfo">Contact Number: <span className="textInfo">09163345411</span></div>
                    <div className="labelInfo">Email Address: <span className="textInfo">andrewwalker@gmail.com</span></div>
                    <br />
                    <div className="labelInfo">Date Registered: <span className="textInfo">March 06, 2024</span></div>
                    <div className="labelInfo">Status: <span className={`textInfo ${'Suspended' === 'Suspended' ? 'text-danger' : 'text-success'}`}>Suspended</span></div>
                    <div style={{ display: 'Suspended' === 'Suspended' ? 'block' : 'none' }} className="labelInfo">
                        Duration: <span className={`textInfo ${'Suspended' === 'Suspended' ? 'text-danger' : 'text-success'}`}>1D : 06hrs: 32m: 06s</span>
                    </div>
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