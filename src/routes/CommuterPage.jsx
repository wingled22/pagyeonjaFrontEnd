import CommuterTable from "../components/Commuter/CommuterTable.jsx";
import CommuterDetails from "../components/Commuter/CommuterDetails.jsx";
import CommuterSearch from "../components/Commuter/CommuterSearch.jsx";
import { Row, Col, Container } from "reactstrap";

const CommuterPage = () => {

    return (
        <>
            <Container>
                <Row className="commuterPageContainer d-flex flex-md-row flex-lg-column">
                    <Col md={5} xs={12}>
                        <CommuterSearch/>
                    </Col>
                </Row>
                <Row className="d-flex">
                    <Col md={6} sm={12} xs={12} id="colContainerTable">
                        <CommuterTable />
                    </Col>
                    <Col md={6} sm={12} xs={12} id='colContainerDetails'>
                        <CommuterDetails/>
                    </Col>
                </Row>
            </Container>

            
        </>
    );
}

export default CommuterPage;
