import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RiderUpdateModal = ({ isOpen, toggle }) => {

    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        middleName: 'Michael',
        sex: 'Female',
        civilStatus: 'Single',
        birthDate: '1990-01-01',
        job: 'Cab Rider',
        address: '123 Main St, City, Country',
        contactNumber: '123-456-7890',
        email: 'john.doe@example.com',
        Vehicle: '123345'
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
    return (<>
        <Modal isOpen={isOpen} toggle={toggle} centered>
            <ModalHeader toggle={toggle} className='commuterSuspensionHeader'>Rider Update Info</ModalHeader>
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
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle caret>
                                        {formData.sex ? formData.sex : 'Select Sex'}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => handleChange({ target: { name: "sex", value: "male" } })}>Male</DropdownItem>
                                        <DropdownItem onClick={() => handleChange({ target: { name: "sex", value: "female" } })}>Female</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
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
                        <Col xs="6">
                            <FormGroup>
                                <Label for="address"><strong>Job Position:</strong></Label>
                                <Input
                                    type="text"
                                    id="job"
                                    name="job"
                                    placeholder="Enter Job Position"
                                    value={formData.job}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col xs="6">
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
                        <Col xs="6" >
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
                        <Col xs="6">
                            <FormGroup>
                                <Label for="Vehicle"><strong>Vehicle Plate No.:</strong></Label>
                                <Input
                                    type="text"
                                    id="Vehicle"
                                    name="Vehicle"
                                    placeholder="Vehicle Plate"
                                    value={formData.Vehicle}
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
    </>);
}

export default RiderUpdateModal;