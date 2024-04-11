import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Row, Col } from 'reactstrap';


function formatDate(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = { year: "numeric", month: "long", day: "numeric", }
    return dateTime.toLocaleDateString("en-US", options);
}

function formatTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = {
        hour: "numeric",
        minute: "numeric",
    }

    return dateTime.toLocaleTimeString("en-US", options);
}

const CommuterAccordionList = ({ item }) => {
    return (
        <>
            <AccordionItem key={item.rideHistoryId}>
                <AccordionHeader id='accordionHeaderStyle' targetId={item.rideHistoryId.toString()}>
                    <Col md={4} sm={4} xs={4}>
                        <span className='headerText'>{formatDate(item.endTime)}</span>
                    </Col>
                    <Col>
                        <span className='headerText'>&emsp;|&emsp; {formatTime(item.endTime)}</span>
                    </Col>
                </AccordionHeader>
                <AccordionBody accordionId={item.rideHistoryId.toString()}>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <span className="riderHistoryLabelInfo">Starting Point </span>
                            <span className='riderHistoryTextInfo'> : &emsp;{item.startingPoint}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <span className="riderHistoryLabelInfo">End Destination</span>
                            <span className='riderHistoryTextInfo'> : &emsp;{item.endDestination}</span>
                        </Col>
                    </Row>
                    <Row className='newlineInfo'>
                        <Col md={6} sm={6} xs={12}>
                            <span className="riderHistoryLabelInfo">Rider</span>
                            <span className='riderHistoryTextInfo'> : &emsp;{item.firstName} {item.middleName ? item.middleName[0] + "." : ""}{" "} {item.lastName}</span>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <span className="riderHistoryLabelInfo">Plate Number</span>
                            <span className='riderHistoryTextInfo'> : &emsp;{item.vehicleNumber}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <span className='riderHistoryLabelInfo'>Starting Time</span>
                            <span className='riderHistoryTextInfo'> : &emsp;{formatTime(item.startingTime)}</span>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <span className='riderHistoryLabelInfo'>End Time</span>
                            <span className='riderHistoryTextInfo'> : &emsp;{formatTime(item.endTime)}</span>
                        </Col>
                    </Row> <br />
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <span className='riderHistoryLabelInfo'>Fare</span>
                            <span className='riderHistoryTextInfo text-success'> : &emsp;<strong>₱{parseFloat(item.fare).toFixed(2)}</strong></span>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <span className='riderHistoryLabelInfo'>Rating</span>
                            <span className={`riderHistoryTextInfo ${item.rate >= 1.0 && item.rate <= 2.9 ? 'text-danger' : item.rate >= 3.0 && item.rate <= 3.9 ? 'text-warning' : item.rate >= 4.0 && item.rate <= 5.0 ? 'text-success' : 'text-danger'}`}> : &emsp; <strong>{item.rate ? parseFloat(item.rate).toFixed(1) : "N/A"}</strong></span>
                        </Col>
                    </Row>
                </AccordionBody>
            </AccordionItem>
        </>
    );
}

export default CommuterAccordionList;