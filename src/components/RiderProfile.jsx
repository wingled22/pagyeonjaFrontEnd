import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Input } from 'reactstrap';
const RiderProfile = () => {
    return (
        <>
            <div className="box-header">
                <div className="rectangle-header">
                    <div className="label">
                        <div className="text-wrapper">Rider Profile</div>
                    </div>
                </div>

                <div className="rect-profile">
                    <Row>
                        <Col md={2}>
                            <Icon className="profile-img" icon={faCircleUser} color='black' style={{ fontSize: "150px" }} />
                        </Col>
                        <Col md={9}>
                            <Row className="name-row">
                                <div className="text-name">Juan Dela Cruz</div>
                            </Row>
                            <Row className="details-row">
                                <div className="text-details">Address: Sudlonon Bogo City, Cebu
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    Position : Cab Rider
                                    <br></br>
                                    Age:20
                                    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    Vehicle No: 47548
                                    <br></br>
                                    Contact Number: 09564457889
                                    <br></br>

                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default RiderProfile;