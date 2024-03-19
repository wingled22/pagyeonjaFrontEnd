import React from "react";
import { useState } from "react";
import "../../assets/css/RiderPage.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faPenToSquare,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Table } from "reactstrap";
import RiderDetailsModal from "./RiderDetailsModal";
import RiderUpdateModal from "../Rider/RiderUpdateModal.jsx";
const RiderTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = (rider) => {
    setModalOpen(!modalOpen);
  };

  const [modalupdaterider, setModalupdaterider] =useState(false);
  const updatetoggle = () =>{
    setModalupdaterider(!modalupdaterider);
  }

  const data = [
    { id: 1, riderId: "123123", name: "Mark Zuckerberg", status: "suspended" },
    { id: 2, riderId: "456456", name: "Jacob Wikowski", status: "active" },
    {
      id: 3,
      riderId: "789789",
      name: "Larry Myersekerist",
      status: "suspended",
    },
    { id: 4, riderId: "123123", name: "Mark Zuckerberg", status: "suspended" },
    { id: 5, riderId: "456456", name: "Jacob Wikowski", status: "active" },
    {
      id: 6,
      riderId: "789789",
      name: "Larry Myersekerist",
      status: "suspended",
    },
    {
      id: 7,
      riderId: "789789",
      name: "Larry Myersekerist",
      status: "suspended",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "#38A843";
      case "suspended":
        return "#EA5943";
      default:
        return "transparent";
    }
  };

  return (
    <>
      <RiderDetailsModal isOpen={modalOpen} toggle={() => toggleModal(null)} />
      <RiderUpdateModal isOpen={modalupdaterider} toggle={()=> updatetoggle()} />
      <div className="search-box">
        <input type="text" placeholder="Search for rider" />
      </div>
      <div className="rider-container">
        <Table className="rider-table">
          <thead>
            <tr>
              <th className="rider-id-th">Rider ID No.</th>
              <th className="name-th">Name</th>
              <th className="status-th">Status</th>
              <th className="act-th">Action</th>
            </tr>
          </thead>
          <tbody className="rider-tbody">
            {data.map((rider) => (
              <tr key={rider.id}>
                <td className="rider-td">{rider.riderId}</td>
                <td className="rider-td">{rider.name}</td>
                <td className="rider-td">
                  <p
                    className="status-circle"
                    style={{
                      backgroundColor: getStatusColor(rider.status),
                      borderRadius: "20px",
                      width: "100px",
                      height: "30px",
                      padding: "3px",
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    {rider.status}
                  </p>
                </td >
                <td className="rider-td">
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleModal(rider)}
                  >
                    <Icon icon={faCircleInfo} color="white" />
                  </button>
                  <button className="btn btn-success" onClick={() => updatetoggle()}>
                    <Icon icon={faPenToSquare} color="white" />
                  </button>
                  <button className="btn btn-danger">
                    <Icon icon={faCirclePause} color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default RiderTable;
