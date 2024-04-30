import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import "../../assets/css/RiderApproval/RiderApprovalDashboard.css";
import Badge from "./Badge";
import images1 from "../../assets/image/carlo.jpg";
import images2 from "../../assets/image/cliff.jpg";
import images3 from "../../assets/image/cs3.png";
import RiderApprovalSearchFilter from "./RiderApprovalSearchAndFilter";
import { Row } from "reactstrap";

const RiderApprovalTablePage = ({ changeUserID, approvals }) => {
  const callChangeUserID = (id) => {
    changeUserID(id);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const [filterRiderApproval, setfilterRiderApproval] = useState("");

  const handleFilter = (value) => {
    let newValue;
    if (value === "pending") {
      newValue = null;
    } else if (value === "rejected") {
      newValue = false;
    } else if (value === "approved") {
      newValue = true;
    }

    setfilterRiderApproval(newValue);

    // console.log(newValue,"mao ni siya ang new value")
  };

  const filteredData = approvals.filter(
    (item) =>
      (item.firstName + " " + item.middleName + " " + item.lastName)
        .toLowerCase()
        .includes(searchTerm) || item.approvalStatus == searchTerm
    // item.approvalStatus.toLowerCase().includes(searchTerm)
  );

  const RiderApprovalFilterStatus = filteredData.filter(
    (item) =>
      (item.firstName + " " + item.middleName + " " + item.lastName)
        .toLowerCase()
        .includes(filterRiderApproval) ||
      item.approvalStatus == filterRiderApproval
  );

  if (filteredData == null) {
    return <></>;
  }
  console.log(approvals);

  return (
    <>
      <RiderApprovalSearchFilter
        onSearch={handleSearch}
        filterStatus={handleFilter}
      />

      <div className="rider-approval-table-container">
        <table className="table-in">
          <tbody>
            {RiderApprovalFilterStatus.map((item) => (
              <tr
                key={item.id}
                onClick={() => {
                  callChangeUserID(item.userId);
                }}
              >
                <td className="td-style">
                  <div
                    style={{
                      backgroundImage: `url(${
                        item.profilePath !== ""
                          ? `http://localhost:5180/img/rider_profile/${item.profilePath}`
                          : images1
                      })`,
                      backgroundSize: "cover",
                      height: "100px",
                      width: "100px",
                    }}
                    className="rider-table-image"
                  />
                </td>
                <td className="td-style">
                  {item.firstName} {item.middleName && item.middleName[0]}.{" "}
                  {item.lastName}
                </td>
                <td className="td-style">
                  <Badge
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

export default RiderApprovalTablePage;
