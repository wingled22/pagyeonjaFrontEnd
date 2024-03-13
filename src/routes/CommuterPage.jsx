import CommuterTable from "../components/Commuter/CommuterTable.jsx";
import CommuterDetails from "../components/Commuter/CommuterDetails.jsx";
import CommuterSearch from "../components/Commuter/CommuterSearch.jsx";
import { Row, Col } from "reactstrap";

const CommuterPage = () => {

    return (
        <>
            <div>
                <Row>
                    <Col md={5} sm={12}>
                        <CommuterSearch/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12} id='colContainerTable'>
                        <CommuterTable />
                    </Col>
                    <Col md={6} id='colContainerDetails'>
                        <CommuterDetails/>
                    </Col>
                </Row>
            </div>

            
        </>
    );
}

export default CommuterPage;
