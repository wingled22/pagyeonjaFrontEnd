import { Table, Button, Badge } from "reactstrap";
import "../../assets/css/CommuterTable.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Container } from "reactstrap";
import CommuterSuspensionModal from "../../components/Commuter/CommuterSuspensionModal.jsx";
import { useState, useEffect } from "react";
import CommuterUpdateModal from "../../components/Commuter/CommuterUpdateModal.jsx";

const CommuterTable = ({
  selectUser,
  searchValueCommuter,
  suspensionStatus,
  onSelectCommuter,
  toggleTriggerChanges,
}) => {
  const [commuters, setCommuters] = useState([]);
  const [filteredCommuters, setFilteredCommuters] = useState([]);

  const [commuterID, setCommuterID] = useState(null);
  const [commuterSuspensionStatus, setCommuterSuspensionStatus] =
    useState(null);
  // const updateSuspensionStatus = () => setCommuterSuspensionStatus(!commuterSuspensionStatus);

  const commuterMatchesSearchTerm = (commuter) => {
    if (!searchValueCommuter) return true;
    const fullName = `${commuter.firstName} ${
      commuter.middleName ? commuter.middleName + " " : ""
    }${commuter.lastName}`.toLowerCase();
    const status = commuter.suspensionStatus === false ? "active" : "suspended";
    const fullNameWords = fullName.split(" ");
    const searchWords = searchValueCommuter
      .toLowerCase()
      .split(" ")
      .filter((word) => word);

    return (
      searchWords.some((searchWord) =>
        fullNameWords.some((fullNameWord) => fullNameWord.includes(searchWord))
      ) || status.includes(searchValueCommuter.toLowerCase())
    );
  };

  useEffect(() => {
    const filtered = commuters.filter((commuter) =>
      commuterMatchesSearchTerm(commuter)
    );
    setFilteredCommuters(filtered);
  }, [commuters, searchValueCommuter]);

  const getCommuters = async () => {
    try {
      const response = await fetch(
        "http://localhost:5180/api/CommuterRegistration/GetCommutersApproved"
      );
      const data = await response.json();
      setCommuters(data);
    } catch (error) {
      console.log(error);
    }
  };

  // for updating the commuter state
  const updateCommuterTable = (
    commuter,
    isForDetailsUpdate = true,
    isForRevoke = false
  ) => {
    setCommuters((prevCommuters) => {
      return prevCommuters.map((item) => {
        if (item.commuterId === commuter.commuterId) {
          if (isForDetailsUpdate && !isForRevoke) {
            return { ...item, ...commuter };
          } else if (!isForDetailsUpdate && !isForRevoke) {
            return {
              ...item,
              ...commuter,
              suspensionStatus: commuter.suspensionStatus,
            };
          }
          return {
            ...item,
            ...commuter,
            suspensionStatus: !commuter.suspensionStatus,
          };
        }
        return item;
      });
    });
  };

  const onChangeSelectedCommuter = async (commuter) => {
    onSelectCommuter(commuter);
    console.log("OnselectCommuter", commuter);
  };

  const [reason, setReason] = useState("");
  const [suspensionDate, setSuspensionDate] = useState("");
  const [suspensionId, setSuspensionId] = useState(null);

  const updateReason = (e) => {
    setReason(e);
  };
  const updateSuspensionDate = (e) => {
    setSuspensionDate(e);
  };

  const getSuspension = async (suspendStatus, commuterId) => {
    try {
      setCommuterSuspensionStatus(suspendStatus);
      if (suspendStatus === true) {
        //If suspended, then get the latest end date suspension
        const response = await fetch(
          `http://localhost:5180/api/Suspension/GetSuspension?userid=${commuterId}&usertype=Commuter`
        );
        const data = await response.json();

        setReason(data.reason);
        setSuspensionDate(data.suspensionDate);
        setSuspensionId(data.suspensionId);
      } else {
        clearSuspensionEntry();
      }
    } catch (error) {
      // console.error("Error fetching data:", error);
      clearSuspensionEntry();
    }
  };

  const handleUpdateSuspensionCommuter = async (suspendStatus) => {
    try {
      //Add a condition here that if the suspension status is already true then update the data instead
      const formData = {
        userId: commuterID,
        userType: "Commuter",
        reason: reason,
        suspensionDate: suspensionDate,
      };

      const updateFormData = {
        suspensionId: suspensionId,
        userId: commuterID,
        userType: "Commuter",
        reason: reason,
        suspensionDate: suspensionDate,
        status: true,
      };

      if (suspendStatus === false) {
        const response = await fetch(
          "http://localhost:5180/api/Suspension/RegisterSuspension",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        toast.success("Commuter Suspended");
      } else if (suspendStatus === true) {
        //update instead
        const response = await fetch(
          "http://localhost:5180/api/Suspension/UpdateSuspension",
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateFormData),
          }
        );
        toast.success("Commuter suspension updated");
      }

      selectedCommuter.suspensionStatus
        ? updateCommuterTable(selectedCommuter, false)
        : updateCommuterTable(selectedCommuter, false, true);
      clearSuspensionEntry();
      toggleSuspension();
      toggleTriggerChanges();

      //toggle so that the suspension status is true
      suspensionStatus(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleRevokeSuspension = async () => {
    try {
      const formData = {
        suspensionId: suspensionId,
        userId: commuterID,
        userType: "Commuter",
        reason: reason,
        suspensionDate: suspensionDate,
        status: false,
      };

      const response = await fetch(
        "http://localhost:5180/api/Suspension/RevokeSuspension",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      updateCommuterTable(selectedCommuter, false, true);
      clearSuspensionEntry();
      toggleSuspension();
      toggleTriggerChanges();
      toast.success("Commuter Suspension Revoked");
      //toggle so that the suspension status is true
      suspensionStatus(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const clearSuspensionEntry = () => {
    setReason("");
    setSuspensionDate("");
  };

  useEffect(() => {
    getCommuters();
  }, []);

  const [modalSuspension, setModalSuspension] = useState(false);
  const toggleSuspension = (commuter) => {
    setModalSuspension((modalSuspension) => !modalSuspension);
    setSelectedCommuter(() => commuter);
  };

  const [selectedCommuter, setSelectedCommuter] = useState([]);
  const [modalupdate, setModalUpdate] = useState(false);
  const toggleUpdate = (CommuterUpdate) => {
    setModalUpdate((modalupdate) => !modalupdate);
    setSelectedCommuter(() => CommuterUpdate);
    console.log("Update selected", CommuterUpdate);
  };
  console.log(selectedCommuter);
  return (
    <>
      <CommuterUpdateModal
        isOpen={modalupdate}
        untoggle={toggleUpdate}
        CommuterUpdate={selectedCommuter}
        updateCommuterTable={updateCommuterTable}
        onSelectCommuter={onChangeSelectedCommuter}
        toggleTriggerChanges={toggleTriggerChanges}
      />
      {commuterID ? (
        <CommuterSuspensionModal
          isOpen={modalSuspension}
          untoggle={toggleSuspension}
          commuterID={commuterID}
          reason={reason}
          suspensionDate={suspensionDate}
          updateReason={updateReason}
          updateSuspensionDate={updateSuspensionDate}
          handleUpdateSuspensionCommuter={handleUpdateSuspensionCommuter}
          handleRevokeSuspension={handleRevokeSuspension}
          commuterSuspensionStatus={commuterSuspensionStatus}
        />
      ) : (
        ""
      )}
      <div className="CommuterTableContainer">
        <table className="tableCommuterTable">
          <thead
            className="theadCommuterTable"
            style={{ position: "sticky", top: 0, zIndex: 1 }}
          >
            <tr className="trCommuterTable">
              <th
                id="thCommuter"
                className="thCommuterTable col-6 col-sm-5"
                style={{
                  paddingLeft: "20px",
                  borderRadius: "20px 0 0 0",
                  marginBottom: "10px",
                  position: "sticky",
                }}
              >
                Name
              </th>
              <th
                id="thCommuter"
                className="thCommuterTable col-1 col-sm-1 statusTh"
                style={{ padding: "20px" }}
              >
                Status
              </th>
              <th
                id="thCommuter"
                className="thCommuterTable col-3 col-sm-5"
                style={{
                  padding: "20px",
                  borderRadius: "0 20px 0 0",
                  textAlign: "center",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {commuters.length === 0 && (
              <tr>
                <td>No commuters on the list</td>
              </tr>
            )}
            {filteredCommuters.map((commuterUpdate) => (
              <tr
                className="commuterRow"
                key={commuterUpdate.commuterId}
                onClick={() => {
                  selectUser(commuterUpdate.commuterId),
                    suspensionStatus(commuterUpdate.suspensionStatus),
                    onSelectCommuter(commuterUpdate);
                }}
              >
                <td
                  className="commuterName"
                  style={{
                    borderBottom: "groove",
                    padding: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  {commuterUpdate.firstName}{" "}
                  {commuterUpdate.middleName
                    ? commuterUpdate.middleName[0] + "."
                    : ""}{" "}
                  {commuterUpdate.lastName}
                </td>
                <td style={{ borderBottom: "groove", padding: "20px" }}>
                  <Badge
                    className="badgeStatusCommuter"
                    color={
                      commuterUpdate.suspensionStatus === false
                        ? "success"
                        : "danger"
                    }
                  >
                    <span className="statusName">
                      {commuterUpdate.suspensionStatus === false
                        ? "Active"
                        : "Suspended"}
                    </span>
                  </Badge>
                </td>
                <td
                  style={{
                    borderBottom: "groove",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <button
                    className="btn btn-success btnAction"
                    onClick={() => {
                      toggleUpdate(commuterUpdate);
                      console.log("Commuters: ", commuterUpdate);
                    }}
                  >
                    <Icon icon={faPenToSquare} color="white" />
                  </button>
                  <button
                    className="btn btn-danger btnSuspendCommuter"
                    onClick={() => {
                      toggleSuspension(commuterUpdate);
                      setCommuterID(commuterUpdate.commuterId);
                      getSuspension(
                        commuterUpdate.suspensionStatus,
                        commuterUpdate.commuterId
                      );
                    }}
                  >
                    <Icon icon={faCirclePause} color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommuterTable;
