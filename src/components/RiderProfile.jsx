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
                            <Col md={2} lg={2} sm={2} xs={2}  className="prof-col">
                                <Icon className="profile-img" icon={faCircleUser} color='black' />
                            </Col>

                            <Col md={8} lg={7} sm={8} xs={8} style={{marginLeft: "60px", marginTop: "40px"}}>
                                <Row className="name-row">
                                    <p className="text-ridername">Juan Dela Cruz</p>
                                </Row>
                                <Row className="details-row" >
                                    <p className="text-detailsrider">
                                        <span className="mr-4" >Address: Sudlonon Bogo City, Cebu</span>
                                  
                                        <span style={{marginLeft: "50px"}} className="mr-4">Position: Cab Rider</span>
                                        <br />
                                        <span className="mr-4">Age: 20</span>

                                        <span style={{marginLeft: "330px"}} className="mr-4">Vehicle No: 47548</span>
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