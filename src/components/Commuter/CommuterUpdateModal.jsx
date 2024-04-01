import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const CommuterUpdateModal = ({ isOpen, untoggle, CommuterUpdate ,fetchCommuter ,onSelectCommuter}) => {

    function formatDate(dateString) {
        const newDate = new Date(dateString);
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const year = newDate.getFullYear();
        return `${year}-${month}-${day}`;
    }
    const [formDatas, setformDatas] = useState({
        commuterId:'',
        firstName: '',
        middleName: '',
        lastName: '',
        civilStatus: '',
        occupation: '',
        age: '',
        contactNumber: '',
        birthdate: '',
        emailAddress: '',
        sex: '',
        address: ''
    });

    
    useEffect(() => {
        if (CommuterUpdate) {
            setformDatas(CommuterUpdate);
        }
    }, [CommuterUpdate]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformDatas(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // console.log(formData);
        try {
            const response = await fetch(
                `http://localhost:5180/api/CommuterRegistration/UpdateCommuter?id=${formDatas.commuterId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDatas),
            }
            );
            if (response.ok) {
               alert("Update na intawn",formDatas);
                // fetchRiders()
                // onSelectRider(formDatas)
                untoggle();
              
            }
            else {
                const errorData = await response.json();
                console.error(`Error ${response.status}: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    };


    return (
        <Modal isOpen={isOpen} toggle={untoggle} centered>
            <ModalHeader toggle={untoggle} className='commuterSuspensionHeader'>Commuter Update Info</ModalHeader>
            <Form  onSubmit={handleSubmit}>
                <ModalBody>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="firstName"><strong>First Name:</strong></Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter First Name"
                                    value={formDatas.firstName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="lastName"><strong>Last Name:</strong></Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter Last Name"
                                    value={formDatas.lastName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="middleName"><strong>Middle Name:</strong></Label>
                                <Input
                                    type="text"
                                    id="middleName"
                                    name="middleName"
                                    placeholder="Enter Middle Name"
                                    value={formDatas.middleName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="civilStatus"><strong>Civil Status:</strong></Label>
                                <Input
                                    type="text"
                                    id="civilStatus"
                                    name="civilStatus"
                                    placeholder="Enter Civil Status"
                                    value={formDatas.civilStatus}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="occupation"><strong>Occupation:</strong></Label>
                                <Input
                                    type="text"
                                    id="occupation"
                                    name="occupation"
                                    placeholder="Enter Occupation"
                                    value={formDatas.occupation}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="age"><strong>Age:</strong></Label>
                                <Input
                                    type="number"
                                    id="age"
                                    name="age"
                                    placeholder="Enter Age"
                                    value={formDatas.age}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="contactNumber"><strong>Contact Number:</strong></Label>
                                <Input
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    placeholder="Enter Contact Number"
                                    value={formDatas.contactNumber}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="birthdate"><strong>Birthdate:</strong></Label>
                                <Input
                                    type="date"
                                    id="birthdate"
                                    name="birthdate"
                                    placeholder="Enter Birthdate"
                                    value={formDatas.birthdate ? formatDate(formDatas.birthdate) : ''}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="emailAddress"><strong>Email Address:</strong></Label>
                                <Input
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    placeholder="Enter Email Address"
                                    value={formDatas.emailAddress}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="sex"><strong>Sex:</strong></Label>
                                <Input
                                    type="text"
                                    id="sex"
                                    name="sex"
                                    placeholder="Enter Sex"
                                    value={formDatas.sex }
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
                                    value={formDatas.address}
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
    );
}

export default CommuterUpdateModal;
