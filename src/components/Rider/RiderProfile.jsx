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
             
                        <Row>
                            <Col md={3} lg={3} sm={3} xs={2}  className="prof-col">
                                <Icon className="profile-img" icon={faCircleUser} color='black' />
                            </Col>

                            <Col md={6} lg={7} sm={5} xs={6} style={{marginLeft: "120px", marginTop: "10px"}}>
                                <Row className="name-row">
                                    <p className="text-ridername">Juan Dela Cruz</p>
                                </Row>
                                <Row className="details-row" >
                                    <p className="text-detailsrider">
                                        <span className="mr-4" >Address: Sudlonon Bogo City, Cebu</span>
                                        <br/>
                                        <span className="mr-4">Position: Cab Rider</span>
                                        <br />
                                        <span className="mr-4">Age: 20</span>
                                        <br/>
                                        <span className="mr-4">Vehicle No: 47548</span>
                                        <br />
                                        <span>Contact Number: 09564457889</span>
                                    </p>
                                </Row>
                            </Col>


                        </Row>
             

                </div>
            </div>
        </>
    );
}

export default RiderProfile;