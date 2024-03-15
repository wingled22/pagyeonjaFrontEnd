import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Input, Container } from 'reactstrap';
const RiderProfile = () => {
    return (
        <>
            <div className="box-header">
                <div className="rectangle-header">
                    <div className="label">
                        <h2 className="text-wrapper">Rider Profile</h2>
                    </div>
                </div>

                <div className="rect-profile">
                    <Container>
                        <Row>
                            <Col md={2} className="prof-col">
                                <Icon className="profile-img" icon={faCircleUser} color='black' />
                            </Col>

                            <Col md={9}>
                                <Container className="text-containers">
                                    <Row className="name-row">
                                        <p className="text-ridername">Juan Dela Cruz</p>
                                    </Row>
                                    <Row className="details-row">
                                        <p className="text-detailsrider">Address: Sudlonon Bogo City, Cebu
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

                                        </p>
                                    </Row>
                                </Container>

                            </Col>


                        </Row>
                    </Container>

                </div>
            </div>
        </>
    );
}

export default RiderProfile;