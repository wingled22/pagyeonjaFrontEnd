import React, { useState, useEffect } from "react";

import { Container } from "reactstrap";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import { Row, Col } from "reactstrap";
import "../../assets/css/RiderDetailsModal.css";

const RiderAccordion = ({ rider }) => {
    // console.log("Rider Object:", rider);
    const [open, setOpen] = useState("0");

    const [rideHistoryData, setRideHistoryData] = useState([]);
    const toggleAct = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    function formatDate(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return dateTime.toLocaleDateString("en-US", options);
    }

    function formatTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const options = {
            hour: "numeric",
            minute: "numeric",
        };
        return dateTime.toLocaleTimeString("en-US", options);
    }


    const getRideHistory = async () => {

        if (!rider.riderId) {

            return;
        }
        try {
            const response = await fetch(
                `http://localhost:5180/api/RideHistory/GetUserRideHistory?id=${rider.riderId}&usertype=Rider`
            );
            if (response.ok) {
                const data = await response.json();
                setRideHistoryData(data); // Set the ride history data to a state variable
            } else {
                console.error("Failed to fetch ride history data");
            }
        } catch (error) {
            console.error("Error fetching ride history data:", error);
        }
    };

    useEffect(() => {
        let isComponentLoaded = true;
        if (isComponentLoaded) {

            getRideHistory();
        }
        return () => (isComponentLoaded = false);
    }, [rider]);


    return (
        <>
            <Container
                style={{
                    overflow: "hidden",
                    overflowY: "auto",
                    marginTop: "20px",
                    borderRadius: "30px",
                    background: "#DDDBDB",
                    maxHeight: "500px",
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Accordion
                    flush
                    open={open}
                    toggle={toggleAct}
                    id="accordionContainer"
                    style={{
                        padding: "20px",
                        width: "100%",
                        maxHeight: "500px",
                    }}
                >
                    {rideHistoryData.length === 0 && <center>No ride history</center>}
                    {rideHistoryData.map((item) => (
                        <AccordionItem key={item.rideHistoryId}>
                            <AccordionHeader
                                className="accordionHeader"
                                id="accordionHeaderStyle"
                                targetId={item.rideHistoryId.toString()}
                            >
                                <Col md={4}>{formatDate(item.endTime)}</Col>
                                <Col md={4}>
                                    &emsp;|&emsp;{formatTime(item.endTime)}
                                </Col>
                            </AccordionHeader>
                            <AccordionBody
                                accordionId={item.rideHistoryId.toString()}
                            >
                                <Row>
                                    <Col md={4}>
                                        <span className="riderHistoryLabelInfo">
                                            Starting Point{" "}
                                        </span>
                                    </Col>
                                    <Col md={4}>
                                        <span className="riderHistoryTextInfo">
                                            {" "}
                                            : &emsp;{item.startingPoint}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <span className="riderHistoryLabelInfo">
                                            End Destination
                                        </span>
                                    </Col>
                                    <Col md={5}>
                                        <span className="riderHistoryTextInfo">
                                            {" "}
                                            : &emsp;{item.endDestination}
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="newlineInfo">
                                    <Col md={4}>
                                        <span className="riderHistoryLabelInfo">Rider</span>
                                    </Col>
                                    <Col md={4}>
                                        <span className="riderHistoryTextInfo">
                                            {" "}
                                            : &emsp;{item.firstName}   {rider.middleName
                                                ? rider.middleName[0] + "."
                                                : ""}{" "}
                                            {item.lastName}
                                        </span>
                                    </Col>
                                    <Row>
                                        <Col md={4}>
                                            <span className="riderHistoryLabelInfo">
                                                Starting Time
                                            </span>
                                        </Col>
                                        <Col md={5} style={{ marginLeft: "8px" }}>
                                            <span className="riderHistoryTextInfo">
                                                {" "}
                                                : &emsp;{formatTime(item.startingTime)}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <span className="riderHistoryLabelInfo">
                                                End Time
                                            </span>
                                        </Col>
                                        <Col md={5} style={{ marginLeft: "8px" }}>
                                            <span className="riderHistoryTextInfo">
                                                {" "}
                                                : &emsp;{formatTime(item.endTime)}
                                            </span>
                                        </Col>
                                    </Row>
                                </Row>

                                <Row className="newlineInfo">
                                    <Col md={3}>
                                        <span className="riderHistoryLabelInfo">Fare</span>
                                    </Col>
                                    <Col md={3}>
                                        <span
                                            className="riderHistoryTextInfo text-success"
                                            style={{ marginLeft: "39px" }}
                                        >
                                            {" "}
                                            : &emsp;{item.fare}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <span className="riderHistoryLabelInfo">
                                            Plate Number
                                        </span>
                                    </Col>
                                    <Col md={4}>
                                        <span className="riderHistoryTextInfo">
                                            {" "}
                                            : &emsp;{item.vehicleNumber}
                                        </span>
                                    </Col>
                                    <Col md={1} style={{ marginLeft: "20px" }}>
                                        <span className="riderHistoryLabelInfo">Rate</span>
                                    </Col>
                                    <Col md={2}>
                                        <span className={`riderHistoryTextInfo ${item.rate >= 1.0 && item.rate <= 2.9 ? 'text-danger' : item.rate >= 3.0 && item.rate <= 3.9 ? 'text-warning' : item.rate >= 4.0 && item.rate <= 5.0 ? 'text-success' : 'text-danger'}`}> : &emsp; <strong>{item.rate ? parseFloat(item.rate).toFixed(1) : "N/A"}</strong></span>
                                    </Col>
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>

        </>
    );
};

export default RiderAccordion;
