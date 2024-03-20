import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import "../../assets/css/RiderApprovalDashboard.css";
import Badge from "../../components/RiderApprovalComponents/Badge";
import images1 from "../../assets/image/carlo.jpg";
import images2 from "../../assets/image/cliff.jpg";
import images3 from "../../assets/image/cs3.png";

const Rider_Approval_TablePage = ({ text, color }) => {
  const data = [
    { id: 111, imageSrc: images1, name: "Carlo M. Gesta", status: "Approved" },
    {
      id: 22,
      imageSrc: images2,
      name: "Cliff Richard N. Languido",
      status: "Approved",
    },
    {
      id: 333,
      imageSrc: images3,
      name: "Axle Deimitry Adolfo",
      status: "Approved",
    },
    {
      id: 32,
      imageSrc: images1,
      name: "Charls Jay C. Magdalaga",
      status: "Rejected",
    },
    { id: 34, imageSrc: images2, name: "Client", status: "Approved" },
    { id: 35, imageSrc: images3, name: "Dawn Keith", status: "Approved" },
    { id: 14, imageSrc: images1, name: "John", status: "Pending" },
    { id: 223, imageSrc: images2, name: "Jane", status: "Approved" },
    { id: 335, imageSrc: images3, name: "Bob", status: "Rejected" },
    { id: 37, imageSrc: images1, name: "Bob", status: "Approved" },
    { id: 38, imageSrc: images2, name: "Bob", status: "Approved" },
    { id: 39, imageSrc: images3, name: "Bob", status: "Approved" },
    { id: 16, imageSrc: images1, name: "John", status: "Pending" },
    { id: 28, imageSrc: images2, name: "Jane", status: "Approved" },
    { id: 396, imageSrc: images3, name: "Bob", status: "Rejected" },
    { id: 30, imageSrc: images1, name: "Bob", status: "Approved" },
    { id: 345324, imageSrc: images2, name: "Bob", status: "Pending" },
    { id: 32342, imageSrc: images3, name: "Bob", status: "Approved" },
  ];
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
  console.log(approvals);

  const tdNAME = {
    // padding: '10px',
    padding: "50px 0px 10px 0px",
    borderBottom: "3px solid #52459F",
    fontSize: "20px",
  };

  useEffect(() => {
    getApprovalList();
  }, []);

  return (
    <div className="rider-approval-table-container">
      <table className="table-in">
        <tbody>
          {approvals.map((item) => (
            <tr key={item.id}>
              <td className="td-style">
                <img src={images1} className="rider-table-image" />
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
  );
};

export default Rider_Approval_TablePage;
