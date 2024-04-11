import React, { useState, useEffect } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Row, Col } from 'reactstrap';

const CommuterAccordion = ({selectedCommuter}) => {
    const [commuterRideInfo, setCommuterRideInfo] = useState([]);
    const [open, setOpen] = useState('0');

    const toggle = (id) => {
        if (open === id) {
            setOpen("0");
        } else {
            setOpen(id);
        }
    };

  function formatDate(dateTimeString){
    const dateTime = new Date(dateTimeString);
    const options = {year : "numeric", month: "long", day: "numeric",}
    return dateTime.toLocaleDateString("en-US", options);
  }

  function formatTime(dateTimeString)
  {
    const dateTime = new Date(dateTimeString);
    const options = {
        hour : "numeric",
        minute : "numeric",
    }

    return dateTime.toLocaleTimeString("en-US", options);
  }

    const getRideHistory = async () => {
        try {
            const response = await fetch(`http://localhost:5180/api/RideHistory/GetUserRideHistory?id=${selectedCommuter}&usertype=Commuter`);
            if (response.ok) {
                console.log('Ride history data fetched successfully.');
                const data = await response.json();
                console.log('Ride history data:', data);
                setCommuterRideInfo(data); // Set the ride history data to a state variable
            } else {
                console.error('Failed to fetch ride history data. HTTP status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching ride history data:', error);
        }
    };
    
    

    useEffect(() => {
        // Assuming you have a commuterId stored somewhere in your ride history data
        if (selectedCommuter.length > 0) {
            const commuterId = selectedCommuter[0].commuterId; // Get the commuterId from the first ride history object
            getRideHistory(commuterId);
        }
       
    }, [selectedCommuter]);
    

    return (
        <>
            <Accordion flush open={open} toggle={toggle} id='accordionContainer'>
                {commuterRideInfo.length === 0 && <center>No ride history</center>}
                {commuterRideInfo.map((item) => (
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
                                {/* <Col md={6} sm={6} xs={12}>
                                    <span className="riderHistoryLabelInfo">Rider ID</span>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.riderId}</span>
                                </Col> */}
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
                ))}
            </Accordion>
        </>
    );
};

export default CommuterAccordion;
