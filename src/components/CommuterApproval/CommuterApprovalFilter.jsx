import React from "react";
import { useState } from "react";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import "../../assets/css/CommuterApproval/CommuterApprovalFilterStatus.css";

const CommuterFilterStatus = () => {
  const StatusData = [
    { id: 55, status: "Pending" },
    { id: 56, status: "Approved" },
    { id: 57, status: "Rejected" },
  ];

 





  return (
    <>


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


    </>
  );
};

export default CommuterFilterStatus;
