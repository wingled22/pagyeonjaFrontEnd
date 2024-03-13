import React from "react";
import {Button, Table } from "reactstrap";
import "../assets/css/RiderApprovalDashboard.css";
import Badge from "./Badge";
import images1 from '../assets/image/carlo.jpg';
import images2 from '../assets/image/cliff.jpg';
import images3 from '../assets/image/cs3.png';



const Rider_Approval_TablePage = ({text, color}) => {
  const data = [
    { id: 111, imageSrc: images1, name: "Carlo", status: "Approved" },
    { id: 22, imageSrc: images2, name: "Cliff", status: "Approved" },
    { id: 333, imageSrc: images3, name: "Axle", status: "Approved" },
    { id: 32, imageSrc: images1,name: "Charls", status: "Rejected" },
    { id: 34, imageSrc: images2,name: "Client", status: "Approved" },
    { id: 35,imageSrc: images3, name: "Dawn Keith", status: "Approved" },
    { id: 14, imageSrc: images1,name: "John", status: "Pending" },
    { id: 223, imageSrc: images2,name: "Jane", status: "Approved" },
    { id: 335,imageSrc: images3, name: "Bob", status: "Rejected" },
    { id: 37, imageSrc: images1,name: "Bob", status: "Approved" },
    { id: 38, imageSrc: images2,name: "Bob", status: "Approved" },
    { id: 39, imageSrc: images3,name: "Bob", status: "Approved" },
    { id: 16, imageSrc: images1,name: "John", status: "Pending" },
    { id: 28, imageSrc: images2,name: "Jane", status: "Approved" },
    { id: 396,imageSrc: images3, name: "Bob", status: "Rejected" },
    { id: 30, imageSrc: images1,name: "Bob", status: "Approved" },
    { id: 345324,imageSrc: images2, name: "Bob", status: "Pending" },
    { id: 32342,imageSrc: images3, name: "Bob", status: "Approved" },
    
  ];

  const tableContainerStyles = {
    maxWidth: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
    marginLeft: '30px',
    padding: '50px',
    backgroundColor: "#F0F0F0",
    borderRadius: "10px",
  };
  
  const tableStyles = {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: "10px",
    padding: '30px',
  };
  
  const tdStyle = {
    padding: '50px 0px 10px 0px',
    borderBottom: '5px solid #52459F',
  

  };

  const tdNAME   = {
    // padding: '10px',
    padding: '50px 0px 10px 0px',
    borderBottom: '5px solid #52459F',
    fontSize: '20px',
   
  };
  
 
  
  return (
    <div style={tableContainerStyles}>
      <table style={tableStyles}>

        <tbody>

       
          {data.map((item) => (



            <tr key={item.id}>

              
             
              <td style={tdStyle}>
              <img src={item.imageSrc}  style={{ maxWidth: '80px', maxHeight: '80px' ,borderRadius: '50px'}} />
              </td>
              <td style={tdNAME}>{item.name}</td>
              <td style={tdStyle}>
                <Badge text={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  
};

export default Rider_Approval_TablePage;
