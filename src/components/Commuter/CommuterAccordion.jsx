import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

import { Row, Col } from 'reactstrap';



const CommuterAccordion = () => {

    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const data = [
        { id: 1, name: 'John Doe', status: 'Active', dropOffDate: 'March 11, 2024', dropOFfTime: '07: 00 PM', startingPoint: 'Dela Vina St., Bogo City, Cebu', endDestination: 'San Vicente St., Bogo City, Cebu', riderName: 'Juan Parat', riderID: '00445', vehicleType: 'Tricycle', vehiclePlate: '06X77V', startingTime: '06: 00PM', fare: '₱15.00'  },
        { id: 2, name: 'Jane Doe', status: 'Inactive', dropOffDate: 'March 12, 2024', dropOFfTime: '01: 37 PM', startingPoint: 'Dela Vina St., Bogo City, Cebu', endDestination: 'San Vicente St., Bogo City, Cebu', riderName: 'Juan Parat', riderID: '00669', vehicleType: 'Tricycle', vehiclePlate: '06X77V', startingTime: '06: 00PM', fare: '₱15.00'  },
        { id: 3, name: 'Bob Smith', status: 'Active', dropOffDate: 'March 13, 2024', dropOFfTime: '08: 54 AM', startingPoint: 'Dela Vina St., Bogo City, Cebu', endDestination: 'San Vicente St., Bogo City, Cebu', riderName: 'Juan Parat', riderID: '00669', vehicleType: 'Tricycle', vehiclePlate: '06X77V', startingTime: '06: 00PM', fare: '₱15.00'  },
    ];

    return (
        <>
            <Accordion flush open={open} toggle={toggle} id='accordionContainer'>

                {data.map((item) => (
                    <AccordionItem key={item.id}>
                        <AccordionHeader id='accordionHeaderStyle' targetId={item.id.toString()}>
                            <Col md={3}>
                                {item.dropOffDate}
                            </Col>
                            <Col>
                                &emsp;|&emsp; {item.dropOFfTime}
                            </Col>

                        </AccordionHeader>
                        <AccordionBody accordionId={item.id.toString()}>
                            <Row>
                                <Col md={4}>
                                    <span className="riderHistoryLabelInfo">Starting Point </span>
                                </Col>
                                <Col md={8}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.startingPoint}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <span className="riderHistoryLabelInfo">End Destination</span>
                                </Col>
                                <Col md={8}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.endDestination}</span>
                                </Col>
                            </Row>
                            <Row className='newlineInfo'>
                                <Col md={2}>
                                    <span className="riderHistoryLabelInfo">Rider</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.riderName}</span>
                                </Col>
                                <Col md={3} style={{marginLeft:'20px'}}>
                                    <span className='riderHistoryLabelInfo'>Starting Time</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.startingTime}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <span className="riderHistoryLabelInfo">Rider ID</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.riderID}</span>
                                </Col>
                                <Col md={3} style={{marginLeft:'20px'}}>
                                    <span className='riderHistoryLabelInfo'>End Time</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.dropOFfTime}</span>
                                </Col>
                            </Row>
                            <Row className='newlineInfo'>
                                <Col md={3}>
                                    <span className="riderHistoryLabelInfo">Vehicle</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.vehicleType}</span>
                                </Col>
                                <Col md={2} style={{marginLeft:'20px'}}>
                                    <span className='riderHistoryLabelInfo'>Fare</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo text-success'> : &emsp;{item.fare}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <span className="riderHistoryLabelInfo">Plate Number</span>
                                </Col>
                                <Col md={3}>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.vehiclePlate}</span>
                                </Col>
                                <Col md={2} style={{marginLeft:'20px'}}>
                                    <span className='riderHistoryLabelInfo'>Rate</span>
                                </Col>
                                <Col md={3}>
                                    <span className={`riderHistoryTextInfo ${2.7 >= 1.0 && 2.7 <= 2.9 ? 'text-danger' : 2.7 >= 3.0  && 2.7 <= 3.9? 'text-warning' : 'text-success'}`}> : &emsp;2.7</span>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                ))}
            </Accordion>
        </>);
}

export default CommuterAccordion;