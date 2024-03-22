import React from "react";
import "../../assets/css/RiderApproval/RiderApprovalDashboard.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Col,
  Row,
} from "reactstrap";

const RiderApprovalSearchFilter = ({onSearch }) => {

  const StatusData = [
    { id: 55, status: "Pending" },
    { id: 56, status: "Approved" },
    { id: 57, status: "Rejected" },
  ];
  const handleSearch = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <>
    <Row sm={11}>
    
    <Col xs={9} sm={9} md={8} lg={9} xl={9} className="me-xl-3 me-lg-3 me-md-3">
        <input
          type="text"
          className="form-control search-field"
          placeholder="Search name" 
          onChange={handleSearch}
        />
      </Col>


   <Col xs={1} sm={2} md={2} lg={1} xl={1} >
      <UncontrolledDropdown>
        <DropdownToggle
          caret
          color="dark"
          className="rider-approval-filter-status"
        >
          Filter by status
        </DropdownToggle>
        <DropdownMenu dark>
          <DropdownItem header>Select to Filter</DropdownItem>
          {StatusData.map((item) => (
            <DropdownItem key={item.id}>{item.status}</DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>

    </Col>
    </Row>
    
    </>
  );
};

export default RiderApprovalSearchFilter;
