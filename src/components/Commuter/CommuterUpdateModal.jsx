import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const CommuterUpdateModal = ({ isOpen, untoggle }) => {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        middleName: 'Michael',
        sex: 'Male',
        civilStatus: 'Single',
        birthDate: '1990-01-01',
        address: '123 Main St, City, Country',
        contactNumber: '123-456-7890',
        email: 'john.doe@example.com'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file
        });
    };

    return (
        <>
            <Modal isOpen={isOpen} toggle={untoggle} centered>
                <ModalHeader toggle={untoggle} className='commuterSuspensionHeader'>Commuter Update Info</ModalHeader>
                <Form>
                    <ModalBody>
                        <Row>
                        <Col >
                                <FormGroup>
                                    <Label for="image"><strong>Image:</strong></Label>
                                    <Input
                                        type="file"
                                        id="image"
                                        name="image"
                                        onChange={handleImageChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col className="col-6 col-sm-4">
                                <FormGroup>
                                    <Label for="firstName"><strong>First Name:</strong></Label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="col-6 col-sm-4">
                                <FormGroup>
                                    <Label for="lastName"><strong>Last Name:</strong></Label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="col-sm-4">
                                <FormGroup>
                                    <Label for="middleName"><strong>Middle Name:</strong></Label>
                                    <Input
                                        type="text"
                                        id="middleName"
                                        name="middleName"
                                        placeholder="Enter Middle Name"
                                        value={formData.middleName}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col className="col-6 col-sm-4">
                                <FormGroup>
                                    <Label for="sex"><strong>Sex:</strong></Label>
                                    <Input
                                        type="text"
                                        id="sex"
                                        name="sex"
                                        placeholder="Enter Sex"
                                        value={formData.sex}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="col-6 col-sm-4">
                                <FormGroup>
                                    <Label for="civilStatus"><strong>Civil Status:</strong></Label>
                                    <Input
                                        type="text"
                                        id="civilStatus"
                                        name="civilStatus"
                                        placeholder="Enter Civil Status"
                                        value={formData.civilStatus}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="col-sm-4">
                                <FormGroup>
                                    <Label for="birthDate"><strong>Birth Date:</strong></Label>
                                    <Input
                                        type="date"
                                        id="birthDate"
                                        name="birthDate"
                                        placeholder="Enter Birth Date"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="address"><strong>Address:</strong></Label>
                                    <Input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Enter Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col >
                                <FormGroup>
                                    <Label for="contactNumber"><strong>Contact Number:</strong></Label>
                                    <Input
                                        type="text"
                                        id="contactNumber"
                                        name="contactNumber"
                                        placeholder="Enter Contact Number"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <FormGroup>
                                    <Label for="email"><strong>Email Address:</strong></Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                    </ModalBody>
                    <ModalFooter className='updateModalFooter' style={{ justifyContent: 'space-between' }}>
                        <Button className='btn btnConfirmSuspension'>Confirm</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

export default CommuterUpdateModal;
