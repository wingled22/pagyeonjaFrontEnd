import React, { useState, useEffect } from "react";
import "../../assets/css/RiderPage.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPenToSquare, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { Table } from "reactstrap";
import RiderDetailsModal from "./RiderDetailsModal";
import RiderSuspensionModal from "./RiderSuspensionModal";
import RiderUpdateModal from "../Rider/RiderUpdateModal.jsx";

const RiderTable = ({ onSelectRider }) => {
  const [riders, setRiders] = useState([]);
  const [filteredRiders, setFilteredRiders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuspension, setModalSuspension] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);
  const [modalUpdateRider, setModalUpdateRider] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRiders();
  }, []);

  useEffect(() => {
    const filtered = riders.filter((rider) =>
      riderMatchesSearchTerm(rider)
    );
    setFilteredRiders(filtered);
  }, [riders, searchTerm]);

  const fetchRiders = async () => {
    try {
      const response = await fetch("http://localhost:5180/api/RiderRegistration/GetRiders");
      if (!response.ok) {
        throw new Error("Failed to fetch riders");
      }
      const data = await response.json();
      setRiders(data);
    } catch (error) {
      console.error("Error fetching riders:", error);
    }
  };

  const riderMatchesSearchTerm = (rider) => {
    if (!searchTerm) return true;
    const fullName = `${rider.firstName} ${rider.middleName} ${rider.lastName}`.toLowerCase();
    const status = rider.suspensionStatus === false ? 'active' : 'suspended';
    return fullName.includes(searchTerm.toLowerCase()) || status.includes(searchTerm.toLowerCase());
  };

  const toggleModal = (rider) => {
    setSelectedRider(rider);
    setModalOpen(!modalOpen);
  };

  const toggleSuspension = () => {
    setModalSuspension(!modalSuspension);
  };

  const toggleUpdateModal = () => {
    setModalUpdateRider(!modalUpdateRider);
  };

  const getStatusColor = (status) => {
    return status === false ? "#38A843" : "#EA5943";
  };

  return (
    <>
      <RiderDetailsModal isOpen={modalOpen} toggle={() => toggleModal(null)} rider={selectedRider} />
      <RiderSuspensionModal isOpen={modalSuspension} untoggle={toggleSuspension} />
      <RiderUpdateModal isOpen={modalUpdateRider} toggle={toggleUpdateModal} rider={selectedRider} />
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for rider"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="rider-container">
        <Table className="rider-table">
          <thead>
            <tr>
              <th className="name-th">Name</th>
              <th className="occupation-th">Occupation</th>
              <th className="status-th">Status</th>
              <th className="act-th">Action</th>
            </tr>
          </thead>
          <tbody className="rider-tbody">
            {filteredRiders.map((rider) => (
              <tr key={rider.riderId} onClick={() => onSelectRider(rider)}>
                <td style={{ padding: "17px" }} className="rider-td">{rider.firstName} {rider.middleName} {rider.lastName}</td>
                <td style={{ padding: "17px" }} className="rider-td">{rider.occupation}</td>
                <td className="rider-td">
                  <p
                    className="status-circle"
                    style={{
                      backgroundColor: getStatusColor(rider.suspensionStatus),
                      margin: "0",
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
                    {rider.suspensionStatus === false ? 'Active' : 'Suspended'}
                  </p>
                </td>
                <td className="rider-td">
                  <button className="btn btn-primary" onClick={() => toggleModal(rider)}>
                    <Icon icon={faCircleInfo} color="white" />
                  </button>
                  <button className="btn btn-success" onClick={toggleUpdateModal}>
                    <Icon icon={faPenToSquare} color="white" />
                  </button>
                  <button className="btn btn-danger" onClick={toggleSuspension}>
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
