import React , { useState ,useEffect}  from "react";
import { Button, Table,Row } from "reactstrap";
import "../../assets/css/CommuterApproval/CommuterApprovalTablePage.css";
import CommuterApprovalBadge from "./CommuterApprovalBadge";
import images1 from "../../assets/image/withHer.png";


import CommuterApprovalSearchAndFilter from "./CommuterApprovalSearchFilter";

const CommuterApprovalTablePage = ({ text, color, changeUserID , approvals }) => {
  // const data = [
  //   { id: 111, imageSrc: images1, firstName: "Carlo",middleName:"M.", lastName:"Gesta" ,status: "Approved" },
  //   { id: 11111, imageSrc: images1, firstName: "Cliff Richard",middleName:"N.", lastName:"Languido" ,status: "Pending" },
  //   { id: 1111, imageSrc: images1, firstName: "Charls Jay",middleName:"C.", lastName:"Magdalaga" ,status: "Rejected" },
  //   { id: 11, imageSrc: images1, firstName: "Axle",middleName:"D.", lastName:"Adolfo" ,status: "Approved" },
  //   { id: 1, imageSrc: images1, firstName: "Dawn Keith",middleName:"F.", lastName:"Francisco" ,status: "Pending" },
  //   { id: 22222, imageSrc: images1, firstName: "Neil Chris",middleName:"S.", lastName:"Ursal" ,status: "Rejected" },
  //   { id: 2222, imageSrc: images1, firstName: "Ademel",middleName:"V.", lastName:"Viagedor" ,status: "Approved" },
  //   { id: 222, imageSrc: images1, firstName: "Nino",middleName:"U.", lastName:"Abao" ,status: "Pending" },
  //   { id: 22, imageSrc: images1, firstName: "Client",middleName:"M.", lastName:"Booc" ,status: "Rejected" },
  //   { id: 2, imageSrc: images1, firstName: "Septh Krysler",middleName:"L.", lastName:"Camay" ,status: "Approved" },
  //   { id: 3, imageSrc: images1, firstName: "Septh Kryster",middleName:"L.", lastName:"Camay" ,status: "Approved" },
   
  // ];

  console.log("approval value nis table: ",approvals)

  const callChangeUserID = (id) => 
  {
    changeUserID(id);
    console.log("na click ko")
  }


  const [searchCommuterApprovalTerm, setSearchCommuterApprovalTerm] = useState('');

  const handleSearch = (value) => {
    setSearchCommuterApprovalTerm(value);
  };



  const [filterCommuterApproval, setfilterCommuterApproval] = useState('');
  const handleFilter = (value) => {
    setfilterCommuterApproval(value);

    console.log(value,'filter ni siya nga value')
  };


  

  // const CommuterApprovalFilteredData = approvals.filter(item =>

 
  //  ( item.firstName +' '+item.middleName +' '+item.lastName).toLowerCase().includes(searchCommuterApprovalTerm) ||
  //   item.status.toLowerCase().includes(searchCommuterApprovalTerm)
    
  // );
  
  // const CommuterApprovalFilterStatus = CommuterApprovalFilteredData.filter(item =>
  //   ( item.firstName +' '+item.middleName +' '+item.lastName).toLowerCase().includes(filterCommuterApproval) ||
  //   item.status.toLowerCase().includes(filterCommuterApproval)
  // );
  

  return (
  <>

  <Row sm={11}>
   <CommuterApprovalSearchAndFilter onSearchCommuterApproval={handleSearch} filterStatus={handleFilter}/>
   </Row>
    <div className="commuter-approval-table-container">
      <table className="commuter-table-in">
        <tbody>
          {approvals.map((item) => (
            
            <tr key={item.id} onClick={() => {callChangeUserID(item.userId)}}>
              <td className="commuter-td-style">
              <div
                    style={{
                      backgroundImage: `url(${
                        item.profilePath != null
                          ? `http://localhost:5180/img/commuter_profile/${item.profilePath}`
                          : images1
                      })`,
                      backgroundSize: "cover",
                      height: "100px",
                      width: "100px",
                    }}
                    className="commuter-table-image"
                  />
                {/* <img src={item.profilePath} className="commuter-table-image" /> */}
              </td>
              <td className="commuter-td-style">{item.firstName+' '+ item.middleName +' '+ item.lastName}</td>
              <td className="commuter-td-style">
                {/* <CommuterApprovalBadge text={item.approvalStatus} /> */}
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
