import React, { useState, useEffect } from 'react';
import { Accordion } from 'reactstrap';
import CommuterAccordionList from "../../components/Commuter/CommuterAccordionList.jsx";

const CommuterAccordion = ({ selectedCommuter }) => {
    const [commuterRideInfo, setCommuterRideInfo] = useState([]);
    const [open, setOpen] = useState('0');

    const toggle = (id) => {
        if (open === id) {
            setOpen("0");
        } else {
            setOpen(id);
        }
    };

    const getRideHistory = async () => {
        try {
            const response = await fetch(`http://localhost:5180/api/RideHistory/GetUserRideHistory?id=${selectedCommuter}&usertype=Commuter`);
            if (response.ok) {
                // console.log('Ride history data fetched successfully.');
                const data = await response.json();
                // console.log('Ride history data:', data);
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
                    <CommuterAccordionList key={item.rideHistoryId} item={item} />
                ))}
            </Accordion>
        </>
    );
};

export default CommuterAccordion;
