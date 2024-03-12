import CommuterTable from '../components/CommuterTable.jsx'
import CommuterDetails from '../components/CommuterDetails.jsx'
import CommuterSearch from '../components/CommuterSearch.jsx'
import { Row, Col } from 'reactstrap';

const CommuterPage = () => {

    return (
        <>
            <div>
                <Row>
                    <Col md={4}>
                        <CommuterSearch/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" id='colContainerTable'>
                        <CommuterTable />
                    </Col>
                    <Col  id='colContainerDetails'>
                        <CommuterDetails/>
                    </Col>
                </Row>
            </div>

            
        </>
    );
}

export default CommuterPage;