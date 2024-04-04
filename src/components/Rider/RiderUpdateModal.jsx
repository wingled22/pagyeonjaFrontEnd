import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RiderUpdateModal = ({
  isOpen,
  toggle,
  rider,
  fetchRiders,
  onSelectRider,
}) => {
  function formatDate(dateString) {
    const newDate = new Date(dateString);
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const day = newDate.getDate().toString().padStart(2, "0");
    const year = newDate.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const [formData, setFormData] = useState({
    riderId: "",
    firstName: "",
    lastName: "",
    middleName: "",
    sex: "",
    civilStatus: "",
    birthdate: "",
    occupation: "",
    address: "",
    contactNumber: "",
    email: "",
    vehicleNumber: "",
    dateApplied: "",
  });

  useEffect(() => {
    if (rider) {
      setFormData(rider);
    }
  }, [rider]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:5180/api/RiderRegistration/UpdateRider`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Update successful!"); // Show success toast
        console.log("Update na intawn");
        fetchRiders();
        onSelectRider(formData);
        toggle();
      } else {
        const errorData = await response.json();
        toast.error(`Error ${response.status}: ${errorData.message}`); // Show error toast
        console.error(`Error ${response.status}: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("Error submitting form data: " + error.message); // Show error toast
      console.error("Error submitting form data:", error);
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle} className="commuterSuspensionHeader">
          Rider Update Info
        </ModalHeader>
        <Form onSubmit={handleSubmit} form={"true"}>
          <ModalBody>
            <Input
              type="date"
              id="hiddenField"
              name="hiddenField"
              style={{ display: "none" }}
              value={formData.dateApplied || ""}
              onChange={handleChange}
            />

            <Row form>
              <Col className="col-6 col-sm-4">
                <FormGroup>
                  <Label for="firstName">
                    <strong>First Name:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col className="col-6 col-sm-4">
                <FormGroup>
                  <Label for="lastName">
                    <strong>Last Name:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col className="col-sm-4">
                <FormGroup>
                  <Label for="middleName">
                    <strong>Middle Name:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="middleName"
                    name="middleName"
                    placeholder="Enter Middle Name"
                    value={formData.middleName || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col className="col-6 col-sm-4">
                <FormGroup>
                  <Label for="sex">
                    <strong>Sex:</strong>
                  </Label>
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                      {formData.sex || "Select Sex"}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() =>
                          handleChange({
                            target: { name: "sex", value: "Male" },
                          })
                        }
                      >
                        Male
                      </DropdownItem>
                      <DropdownItem
                        onClick={() =>
                          handleChange({
                            target: { name: "sex", value: "Female" },
                          })
                        }
                      >
                        Female
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </FormGroup>
              </Col>
              <Col className="col-6 col-sm-4">
                <FormGroup>
                  <Label for="civilStatus">
                    <strong>Civil Status:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="civilStatus"
                    name="civilStatus"
                    placeholder="Enter Civil Status"
                    value={formData.civilStatus || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col className="col-sm-4">
                <FormGroup>
                  <Label for="birthDate">
                    <strong>Birth Date:</strong>
                  </Label>
                  <Input
                    type="date"
                    id="birthDate"
                    name="birthdate"
                    placeholder="Enter Birth Date"
                    value={
                      formData.birthdate ? formatDate(formData.birthdate) : ""
                    }
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label for="occupation">
                    <strong>Occupation:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="occupation"
                    name="occupation"
                    placeholder="Enter Occupation"
                    value={formData.occupation || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="address">
                    <strong>Address:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Address"
                    value={formData.address || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="contactNumber">
                    <strong>Contact Number:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter Contact Number"
                    value={formData.contactNumber || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label for="email">
                    <strong>Email Address:</strong>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="emailAddress"
                    placeholder="Enter Email Address"
                    value={formData.emailAddress || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="vehicleNumber">
                    <strong>Vehicle Plate No.:</strong>
                  </Label>
                  <Input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    placeholder="Vehicle Plate"
                    value={formData.vehicleNumber || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter
            className="updateModalFooter"
            style={{ justifyContent: "space-between" }}
          >
            <Button className="btn btnConfirmSuspension" type="submit">
              Confirm
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default RiderUpdateModal;
