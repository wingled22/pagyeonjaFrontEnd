import React from "react";
import "../../assets/css/CommuterApproval/CommuterApprovalSearchAndFilter.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Col,
} from "reactstrap";

const CommuterApprovalSearchAndFilter = ({onSearchCommuterApproval }) => {

  const StatusData = [
    { id: 55, status: "Pending" },
    { id: 56, status: "Approved" },
    { id: 57, status: "Rejected" },
  ];

  const handleSearch = (event) => {
    onSearchCommuterApproval(event.target.value.toLowerCase());
  };
  

  return (
    <>

    <Col xs={8} sm={7} md={5} lg={4} xl={5} className="ms-md-4">
      <input
        type="text"
        className="form-control commuter-approval-search-field"
        placeholder="Search name"
        
        onChange={handleSearch}
      />
      </Col>


      
      <Col xs={4} sm={5} md={6} lg={4} xl={4}>
        
      <UncontrolledDropdown>
        <DropdownToggle
          caret
          color="dark"
          className="commuter-approval-filter-status"
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

export default CommuterApprovalSearchAndFilter;
