import React, { useState, useEffect } from "react";
import { Button, Table, Row } from "reactstrap";
import "../../assets/css/CommuterApproval/CommuterApprovalTablePage.css";
import CommuterApprovalBadge from "./CommuterApprovalBadge";
import images1 from "../../assets/image/withHer.png";
import CommuterApprovalSearchAndFilter from "./CommuterApprovalSearchFilter";

const CommuterApprovalTablePage = ({changeUserID , approvals }) => {

  console.log("approval value nis table: ",approvals)

  const callChangeUserID = (id) => {
    changeUserID(id);
    console.log("na click ko");
  };

  const [searchCommuterApprovalTerm, setSearchCommuterApprovalTerm] =
    useState("");

  const handleSearch = (value) => {
    setSearchCommuterApprovalTerm(value);
  };

  const [filterCommuterApproval, setfilterCommuterApproval] = useState("");
  const handleFilter = (value) => {
    setfilterCommuterApproval(value);

    console.log(value,'filter ni siya nga value')
  };

  const CommuterApprovalFilteredData = approvals.filter(
    (item) =>
      (item.firstName + " " + item.middleName + " " + item.lastName)
        .toLowerCase()
        .includes(filterCommuterApproval) ||
      item.approvalStatus == filterCommuterApproval
  );

  

  

  return (
    <>
      <Row sm={11}>
        <CommuterApprovalSearchAndFilter
          onSearchCommuterApproval={handleSearch}
          filterStatus={handleFilter}
        />
      </Row>
      <div className="commuter-approval-table-container">
        <table className="commuter-table-in">
          <tbody>
            {CommuterApprovalFilteredData.map((item) => (
              <tr
                key={item.id}
                onClick={() => {
                  callChangeUserID(item.userId);
                }}
              >
                <td className="commuter-td-style">
                  <div
                    style={{
                      backgroundImage: `url(${
                        item.profilePath != "" && item.profilePath != null
                          ? `http://localhost:5180/img/commuter_profile/${item.profilePath}`
                          : images1
                      })`,
                      backgroundSize: "cover",
                      height: "100px",
                      width: "100px",
                    }}
                    className="commuter-table-image"
                  />
                </td>
                <td className="commuter-td-style">
                  {item.firstName + " " + item.middleName + " " + item.lastName}
                </td>
                <td className="commuter-td-style">
                  <CommuterApprovalBadge
                    text={
                      item.approvalStatus === true
                        ? "approved"
                        : item.approvalStatus == false
                        ? "rejected"
                        : "Pending"
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommuterApprovalTablePage;
