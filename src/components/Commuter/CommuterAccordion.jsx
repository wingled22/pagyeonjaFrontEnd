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
                            <Col md={4} sm={4} xs={4}>
                                <span className='headerText'>{item.dropOffDate}</span>
                            </Col>
                            <Col>
                                <span className='headerText'>&emsp;|&emsp; {item.dropOFfTime} </span>
                            </Col>

                        </AccordionHeader>
                        <AccordionBody accordionId={item.id.toString()}>
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
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.riderName}</span>
                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <span className="riderHistoryLabelInfo">Rider ID</span>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.riderID}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={12}>
                                    <span className='riderHistoryLabelInfo'>Starting Time</span>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.startingTime}</span>
                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <span className='riderHistoryLabelInfo'>End Time</span>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.dropOFfTime}</span>
                                </Col>
                            </Row>
                            <Row className='newlineInfo'>
                                <Col md={6} sm={6} xs={12}>
                                    <span className="riderHistoryLabelInfo">Vehicle</span><span className='riderHistoryTextInfo'> : &emsp;{item.vehicleType}</span>
                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <span className="riderHistoryLabelInfo">Plate Number</span>
                                    <span className='riderHistoryTextInfo'> : &emsp;{item.vehiclePlate}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={12}>
                                    <span className='riderHistoryLabelInfo'>Fare</span>
                                    <span className='riderHistoryTextInfo text-success'> : &emsp;{item.fare}</span>
                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <span className='riderHistoryLabelInfo'>Rating</span>
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