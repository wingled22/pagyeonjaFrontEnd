import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import "../../assets/css/RiderSuspensionModal.css";

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

const RiderSuspensionModal = ({ isOpen, untoggle, rider, reason, suspensionDate, updateReason, updateSuspensionDate, handleUpdateSuspensionRider, handleRevokeSuspension }) => {

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <Modal isOpen={isOpen} toggle={untoggle} centered>
                <ModalHeader toggle={untoggle} className='riderSuspensionHeader'>Rider Suspension</ModalHeader>
                <Form>
                    <ModalBody>
                        <center><h5><strong>{rider.firstName} {rider.middleName ? rider.middleName[0] + '.' : ''} {rider.lastName}</strong></h5></center>                        <div>
                            <label htmlFor="" style={{ margin: '5px' }}><strong>Reason : </strong></label>
                            <Input className='inputReason'
                                name='Reason'
                                multiple
                                type="textarea"
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

                    </ModalBody>
                    <ModalFooter className='riderSuspensionFooter' style={{ justifyContent: 'space-between' }}>
                        {rider.suspensionStatus ? <Button className='btn btn-warning btnRiderRevokeSuspension' onClick={() => {handleRevokeSuspension()}}>Revoke Suspension</Button> : ''}
                        {reason !== "" && suspensionDate !== "" ?  <Button className='btn btnRiderConfirmSuspension' onClick={() => { handleUpdateSuspensionRider(rider.suspensionStatus) }}>Confirm</Button> : ''}
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

export default RiderSuspensionModal;