import React,{useState} from "react";
import "../../assets/css/CommuterApproval/CommuterApprovalSearchAndFilter.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Col,
} from "reactstrap";

const CommuterApprovalSearchAndFilter = ({onSearchCommuterApproval, filterStatus}) => {

  const StatusData = [
    { id: 55, status: "Pending" },
    { id: 56, status: "Approved" },
    { id: 57, status: "Rejected" },
  ];

  const handleSearch = (event) => {
    onSearchCommuterApproval(event.target.value.toLowerCase());
  };


  
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    filterStatus(status.toLowerCase()); /// mag himo og function then ilabay adtos table page

  };



 
  

  return (
    <>

    <Col xs={9} sm={9} md={8} lg={9} xl={9} className="me-xl-1 me-lg-3 me-md-3" >
      <input
        type="text"
        className="form-control commuter-approval-search-field"
        placeholder="Search name"
        
        onChange={handleSearch}
      />
      </Col>


      
      <Col xs={1} sm={2} md={2} lg={1} xl={1}>
        
      <UncontrolledDropdown>
        <DropdownToggle
          caret
          color="dark"
          className="commuter-approval-filter-status"
        >
        {selectedStatus ? selectedStatus : "Filter by status"}
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem header>Select to Filter</DropdownItem>
              {StatusData.map((item) => (
                <DropdownItem
                  key={item.id}
                  onClick={() => handleStatusSelect(item.status)}
                >
                  {item.status}
                </DropdownItem>
              ))}
            </DropdownMenu>
      </UncontrolledDropdown>
      </Col>
    </>
  );
};

export default CommuterApprovalSearchAndFilter;
