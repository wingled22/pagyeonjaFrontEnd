import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import "../../assets/css/CommuterSuspensionModal.css";

import { useState, useEffect } from "react";

const formatDate = (dateString) => {
    let date = new Date(dateString);
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0")
    );
  };

const CommuterSuspensionModal = ({ isOpen, untoggle, commuterID, reason, updateReason, suspensionDate, updateSuspensionDate, handleUpdateSuspensionCommuter, handleRevokeSuspension}) => {

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const [commuterInfo, setCommuterInfo] = useState([]);

    const getCommuter = async () => {
        try {

            const response = await fetch('http://localhost:5180/api/CommuterRegistration/GetCommuter?id=' + commuterID);
            const data = await response.json();
            setCommuterInfo(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getCommuter();
    }, [commuterID])

    return (
        <>
            <Modal isOpen={isOpen} toggle={untoggle} centered>
                <ModalHeader toggle={untoggle} className='commuterSuspensionHeader'>Commuter Suspension</ModalHeader>
                <ModalBody>
                    <form>
                        <center><h5><strong>{commuterInfo.firstName} {commuterInfo.middleName ? commuterInfo.middleName[0] + '.' : ''} {commuterInfo.lastName}</strong></h5></center>                        <div>
                            <label htmlFor="" style={{ margin: '5px' }}><strong>Reason : </strong></label>
                            <Input className='inputReason'
                                multiple
                                type="textarea"
                                id="reason"
                                name="reason"
                                value={reason}
                                onChange={(e) => updateReason(e.target.value)}
                            />
                        </div>

                        {/* <Button onClick={untoggle} color='warning' type='submit'>Update</Button> */}
                        <hr />
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="" style={{ margin: '5px' }}><strong>End Date of Suspension : </strong></label>
                            <Input
                                id="exampleDate"
                                name="date"
                                placeholder="date placeholder"
                                type="date"
                                min={today}
                                value={formatDate(suspensionDate)}
                                onChange={(e) => updateSuspensionDate(e.target.value)}
                            />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter className='commuterSuspensionFooter' style={{ justifyContent: 'space-between' }}>
                    <Button className='btn btn-warning btnRevokeSuspension' onClick={() => {handleRevokeSuspension()}}>Revoke Suspension</Button>
                    <Button className='btn btnConfirmSuspension' onClick={() => {handleUpdateSuspensionCommuter()}}>Confirm</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default CommuterSuspensionModal;