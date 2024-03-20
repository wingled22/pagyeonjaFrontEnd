import CommuterTable from "../components/Commuter/CommuterTable.jsx";
import CommuterDetails from "../components/Commuter/CommuterDetails.jsx";
import CommuterSearch from "../components/Commuter/CommuterSearch.jsx";
import { Row, Col, Container } from "reactstrap";
import { useState } from "react";

const CommuterPage = () => {

    const [selectedCommuter, setSelectedCommuter] = useState(null); //change this to null if you want to hide the commuter details

    const updateSelectCommuter = (id) => { setSelectedCommuter(id); }

    return (
        <>
            <Container>
                <Row className="commuterPageContainer d-flex flex-md-row flex-lg-column">
                    <Col md={5} xs={12}>
                        <CommuterSearch/>
                    </Col>
                </Row>
                <Row className="d-flex">
                    <Col md={selectedCommuter === null ? 12 : 6} sm={12} xs={12} id="colContainerTable">
                        <CommuterTable selectUser={updateSelectCommuter} />
                    </Col>

                    {selectedCommuter && <Col md={6} sm={12} xs={12} id='colContainerDetails'>
                        <CommuterDetails selectedCommuter={selectedCommuter} />
                    </Col>}
                </Row>
            </Container>

            
        </>
    );
}

export default CommuterPage;
