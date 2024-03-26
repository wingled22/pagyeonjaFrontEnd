import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import "../../assets/css/RiderApproval/RiderApprovalDashboard.css";
import Badge from "./Badge";
import images1 from "../../assets/image/carlo.jpg";
import images2 from "../../assets/image/cliff.jpg";
import images3 from "../../assets/image/cs3.png";
import RiderApprovalSearchFilter from "./RiderApprovalSearchAndFilter";
import { Row } from "reactstrap";

const RiderApprovalTablePage = ({ text, color, changeUserID, approvals }) => {
  const callChangeUserID = (id) => {
    changeUserID(id);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredData = approvals.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchTerm) ||
      item.lastName.toLowerCase().includes(searchTerm)
    // item.approvalStatus.toLowerCase().includes(searchTerm)
  );

  console.log(filteredData);
  // Add isFetched as a dependency

  if (filteredData == null) {
    return <></>;
  }

  return (
    <>
      <RiderApprovalSearchFilter onSearch={handleSearch} />

      <div className="rider-approval-table-container">
        <table className="table-in">
          <tbody>
            {filteredData.map((item) => (
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
                        item.profilePath != null
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
                  {item.firstName} {item.middleName[0]}. {item.lastName}
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
