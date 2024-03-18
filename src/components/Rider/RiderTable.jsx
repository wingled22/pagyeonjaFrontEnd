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
const RiderTable = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (rider) => {
    setModalOpen(!modalOpen);
  };

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
      <RiderDetailsModal
        isOpen={modalOpen}
        toggle={() => toggleModal(null)}
      />

      <div className="search-box">
        <input type="text" placeholder="Search for rider" />
      </div>
      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <th className="id-header">Rider ID No.</th>
              <th>Name</th>
              <th>Status</th>
              <th className="act-header">Action</th>
            </tr>
          </thead>
          <tbody className="rider-body">
            {data.map((rider) => (
              <tr key={rider.id}>
                <td>{rider.riderId}</td>
                <td>{rider.name}</td>
                <td>
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
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleModal(rider)}
                  >
                    <Icon icon={faCircleInfo} color="white" />
                  </button>
                  <button className="btn btn-success">
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
