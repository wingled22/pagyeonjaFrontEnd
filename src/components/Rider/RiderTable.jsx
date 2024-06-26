import React, { useState, useEffect } from "react";
import "../../assets/css/RiderPage.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faPenToSquare,
  faCirclePause,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Table } from "reactstrap";
import RiderDetailsModal from "./RiderDetailsModal";
import RiderSuspensionModal from "./RiderSuspensionModal";
import RiderUpdateModal from "../Rider/RiderUpdateModal.jsx";
import RiderTopUpModal from "./RiderTopUpModal.jsx";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  updateRiders,
  getApprovedRiderSuspension,
  addRiderSuspension,
  updateRiderSuspension,
  revokeRiderSuspension,
} from "../../utils/riders/approvedRiderSlice.js";
import { useDispatch } from "react-redux";

const RiderTable = ({ onSelectRider }) => {
  const [filteredRiders, setFilteredRiders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuspension, setModalSuspension] = useState(false);
  const [modalTopUpRider, setModalTopUpRider] = useState(false);
  const [selectedRider, setSelectedRider] = useState([]);
  const [modalUpdateRider, setModalUpdateRider] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // accessing global state for riders
  const { approvedRiders, isSuccess } = useSelector(
    (state) => state.approvedRiders
  );
  const [reason, setReason] = useState("");
  const [suspensionDate, setSuspensionDate] = useState("");
  const [suspensionId, setSuspensionId] = useState(null);

  // Dynamic update for the riders state
  const updateRidersTable = (
    rider,
    isForDetailsUpdate = true,
    isForRevoke = false
  ) => {
    dispatch(updateRiders({ rider, isForDetailsUpdate, isForRevoke }));
  };

  const onChangeSelectedRider = async (rider) => {
    onSelectRider(rider);
  };

  const riderMatchesSearchTerm = (rider) => {
    if (!searchTerm) return true;
    const fullName =
      `${rider.firstName} ${rider.middleName} ${rider.lastName}`.toLowerCase();
    const status = rider.suspensionStatus === false ? "active" : "suspended";
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      status.includes(searchTerm.toLowerCase())
    );
  };

  const toggleModal = (rider) => {
    setModalOpen((modalOpen) => !modalOpen);
    setSelectedRider(rider);
  };

  const toggleTopUpModal = (rider) => {
    setModalTopUpRider((modalTopUpRider) => !modalTopUpRider);
    setSelectedRider(rider);
  };
  const toggleSuspension = (rider) => {
    setModalSuspension((modalSuspension) => !modalSuspension);
    setSelectedRider(rider);
  };

  const toggleUpdateModal = (rider) => {
    setModalUpdateRider((modalUpdateRider) => !modalUpdateRider);
    setSelectedRider(rider);
    console.log("Rider Data:", rider); // Logging rider data
  };

  const getStatusColor = (status) => {
    return status === false ? "#38A843" : "#EA5943";
  };

  const updateReason = (e) => {
    setReason(e);
  };
  const updateSuspensionDate = (e) => {
    setSuspensionDate(e);
  };

  const getSuspension = async (suspendStatus, riderId) => {
    if (suspendStatus === true) {
      const { payload } = await dispatch(getApprovedRiderSuspension(riderId));
      if (isSuccess) {
        setReason(payload.reason);
        setSuspensionDate(payload.suspensionDate);
        setSuspensionId(payload.suspensionId);
      }
    } else {
      clearSuspensionEntry();
    }
  };

  const clearSuspensionEntry = () => {
    setReason("");
    setSuspensionDate("");
  };

  const handleUpdateSuspensionRider = (suspendStatus) => {
    const formData = {
      userId: selectedRider.riderId,
      userType: "Rider",
      reason: reason,
      suspensionDate: suspensionDate,
    };

    const updateFormData = {
      suspensionId: suspensionId,
      userId: selectedRider.riderId,
      userType: "Rider",
      reason: reason,
      suspensionDate: suspensionDate,
      status: true,
    };

    if (suspendStatus === false) {
      dispatch(addRiderSuspension(formData));
      isSuccess
        ? toast.success("Rider Suspended")
        : toast.error("Rider suspension failed");
    } else {
      dispatch(updateRiderSuspension({ updateFormData, suspensionId }));
      isSuccess
        ? toast.success("Rider suspension updated")
        : toast.error("Rider suspension update fail");
    }

    if (isSuccess) {
      clearSuspensionEntry();
      selectedRider.suspensionStatus
        ? updateRidersTable(selectedRider, false)
        : updateRidersTable(selectedRider, false, true);
      toggleSuspension();
    }
  };

  const handleRevokeSuspension = () => {
    const formData = {
      suspensionId: suspensionId,
      userId: selectedRider.riderId,
      userType: "Rider",
      reason: reason,
      suspensionDate: suspensionDate,
      status: false,
    };

    dispatch(revokeRiderSuspension(formData));

    if (isSuccess) {
      toast.success("Rider suspension revoked");
      clearSuspensionEntry();
      updateRidersTable(selectedRider, false, true);
      toggleSuspension();
    } else {
      toast.error("Rider suspension revoked failed");
    }
  };

  useEffect(() => {
    let isComponentLoaded = true;
    if (isComponentLoaded) {
      const filtered = approvedRiders.filter((rider) =>
        riderMatchesSearchTerm(rider)
      );
      setFilteredRiders(filtered);
    }
    return () => {
      isComponentLoaded = false;
    };
  }, [approvedRiders, searchTerm, dispatch]);
  return (
    <>
      {selectedRider ? (
        <RiderDetailsModal
          isOpen={modalOpen}
          toggle={() => toggleModal()}
          rider={selectedRider}
        />
      ) : (
        ""
      )}
      {selectedRider ? (
        <RiderSuspensionModal
          isOpen={modalSuspension}
          untoggle={toggleSuspension}
          rider={selectedRider}
          reason={reason}
          suspensionDate={suspensionDate}
          updateReason={updateReason}
          updateSuspensionDate={updateSuspensionDate}
          handleUpdateSuspensionRider={handleUpdateSuspensionRider}
          handleRevokeSuspension={handleRevokeSuspension}
        />
      ) : (
        ""
      )}
      <RiderUpdateModal
        isOpen={modalUpdateRider}
        toggle={toggleUpdateModal}
        rider={selectedRider}
        updateRidersTable={updateRidersTable}
        onSelectRider={onChangeSelectedRider}
      />
      {selectedRider ? (
        <RiderTopUpModal
          isOpen={modalTopUpRider}
          untoggle={toggleTopUpModal}
          rider={selectedRider}
        />
      ) : (
        ""
      )}

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
              <tr
                className="rider-table-row"
                key={rider.riderId}
                onClick={() => onSelectRider(rider)}
              >
                <td style={{ padding: "17px" }} className="rider-td">
                  {rider.firstName} {rider.middleName} {rider.lastName}
                </td>
                <td style={{ padding: "17px" }} className="rider-td">
                  {rider.occupation}
                </td>
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
                    {rider.suspensionStatus === false ? "Active" : "Suspended"}
                  </p>
                </td>
                <td className="rider-td">
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleModal(rider)}
                  >
                    <Icon icon={faCircleInfo} color="white" />
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => toggleUpdateModal(rider)}
                  >
                    <Icon icon={faPenToSquare} color="white" />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      toggleSuspension(rider),
                        getSuspension(rider.suspensionStatus, rider.riderId);
                    }}
                  >
                    <Icon icon={faCirclePause} color="white" />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      toggleTopUpModal(rider);
                      // console.log("rider.riderId",rider.riderId)
                    }}
                  >
                    <Icon icon={faWallet} color="white" />
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
