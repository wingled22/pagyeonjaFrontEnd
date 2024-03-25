import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import "../../assets/css/RiderApproval/RiderApprovalDashboard.css";
import Badge from "./Badge";
import images1 from "../../assets/image/carlo.jpg";
import images2 from "../../assets/image/cliff.jpg";
import images3 from "../../assets/image/cs3.png";
import RiderApprovalSearchFilter from "./RiderApprovalSearchAndFilter";
import { Row } from "reactstrap";

const RiderApprovalTablePage = ({ text, color, changeUserID }) => {
  const [approvals, setApprovals] = useState([]);

  const getApprovalList = async () => {
    try {
      const response = await fetch(
        "http://localhost:5180/api/Approval/GetApprovals?usertype=Rider"
      );
      const data = await response.json();
      setApprovals(data);
    } catch (error) {
      console.error(error);
    }
  };

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

  console.log(filteredData)
  useEffect(() => {
    getApprovalList();
  }, []); // Add isFetched as a dependency


  if(filteredData == null){
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
                  callChangeUserID(item.id);
                  console.log(item.id)
                }}
              >
                <td className="td-style">
                  <img
                    src={
                      item.profilePath != null
                        ? `http://localhost:5180/img/rider_profile/${item.profilePath}`
                        : images1
                    } // use default image if profilePath is null
                    className="rider-table-image"
                  />
                </td>
                <td className="td-style">
                  {item.firstName} {item.middleName} {item.lastName}
                </td>
                <td className="td-style">
                  <Badge
                    text={item.approvalStatus === true ? "Approved" : "Pending"}
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
