import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import "../../assets/css/RiderSuspensionModal.css";
const RiderSuspensionModal = ({ isOpen, untoggle }) => {

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <Modal isOpen={isOpen} toggle={untoggle} centered>
                <ModalHeader toggle={untoggle} className='riderSuspensionHeader'>Rider Suspension</ModalHeader>
                <Form>
                    <ModalBody>
                        <center><h5><strong>Juan Dela Cruz</strong></h5></center>                        <div>
                            <label htmlFor="" style={{ margin: '5px' }}><strong>Reason : </strong></label>
                            <Input className='inputReason'
                                name='Reason'
                                multiple
                                type="textarea"
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
                            />
                        </div>

                    </ModalBody>
                    <ModalFooter className='riderSuspensionFooter' style={{ justifyContent: 'space-between' }}>
                        <Button className='btn btn-warning btnRiderRevokeSuspension'>Revoke Suspension</Button>
                        <Button className='btn btnRiderConfirmSuspension'>Confirm</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

export default RiderSuspensionModal;