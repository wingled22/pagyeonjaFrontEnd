import React from "react";
import "../../assets/css/RiderApproval/RiderApprovalDashboard.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Col,
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
    
    <Col xs={8} sm={5} md={6} lg={7} xl={7} className="ms-md-4 " >
        <input
          type="text"
          className="form-control search-field"
          placeholder="Search name" 
          onChange={handleSearch}
        />
      </Col>


   <Col xs={1} sm={1} md={1} lg={1} xl={1} className="ms-md-4" >
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
    
    </>
  );
};

export default RiderApprovalSearchFilter;
