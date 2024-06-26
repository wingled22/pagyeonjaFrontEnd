import "../../assets/css/CommuterTable.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommuterSuspensionModal from "../../components/Commuter/CommuterSuspensionModal.jsx";
import { useState, useEffect } from "react";
import CommuterUpdateModal from "../../components/Commuter/CommuterUpdateModal.jsx";
import CommuterTableList from "../../components/Commuter/CommuterTableList.jsx";

import { useDispatch, useSelector } from "react-redux";
import {
  updateCommuters,
  getCommuterSuspension,
  addCommuterSuspension,
  updateCommuterSuspension,
  revokeCommuterSuspension,
} from "../../utils/commuter/approvedCommuterSlice.js";

const CommuterTable = ({
  selectUser,
  searchValueCommuter,
  suspensionStatus,
  onSelectCommuter,
  toggleTriggerChanges,
}) => {
  const [filteredCommuters, setFilteredCommuters] = useState([]);

  const [commuterID, setCommuterID] = useState(null);
  const [commuterSuspensionStatus, setCommuterSuspensionStatus] =
    useState(null);

  const dispatch = useDispatch();
  const { approvedCommuters, isSuccess } = useSelector(
    (state) => state.approvedCommuters
  );

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

  // for updating the commuter state
  const updateCommuterTable = (
    commuter,
    isForDetailsUpdate = true,
    isForRevoke = false
  ) => {
    dispatch(updateCommuters({ commuter, isForDetailsUpdate, isForRevoke }));
  };

  const onChangeSelectedCommuter = async (commuter) => {
    onSelectCommuter(commuter);
    // console.log("OnselectCommuter", commuter);
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
    setCommuterSuspensionStatus(suspendStatus);
    if (suspendStatus) {
      //If suspended, then get the latest end date suspension
      const { payload } = await dispatch(getCommuterSuspension(commuterId));
      if (isSuccess) {
        setReason(payload.reason);
        setSuspensionDate(payload.suspensionDate);
        setSuspensionId(payload.suspensionId);
      }
    } else {
      clearSuspensionEntry();
    }
  };

  const handleUpdateSuspensionCommuter = (suspendStatus) => {
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

    if (!suspendStatus) {
      dispatch(addCommuterSuspension(formData));
      isSuccess
        ? toast.success("Commuter suspended")
        : toast.error("Commuter suspension failed");
    } else {
      //update instead
      dispatch(updateCommuterSuspension(updateFormData));
      isSuccess
        ? toast.success("Commuter suspension updated")
        : toast.error("Commuter suspension update failed");
    }

    if (isSuccess) {
      selectedCommuter.suspensionStatus
        ? updateCommuterTable(selectedCommuter, false)
        : updateCommuterTable(selectedCommuter, false, true);
      clearSuspensionEntry();
      toggleSuspension();
      toggleTriggerChanges();
      suspensionStatus(true);
    }
  };

  const handleRevokeSuspension = () => {
    const formData = {
      suspensionId: suspensionId,
      userId: commuterID,
      userType: "Commuter",
      reason: reason,
      suspensionDate: suspensionDate,
      status: false,
    };

    dispatch(revokeCommuterSuspension(formData));
    if (isSuccess) {
      updateCommuterTable(selectedCommuter, false, true);
      clearSuspensionEntry();
      toggleSuspension();
      toggleTriggerChanges();
      toast.success("Commuter Suspension Revoked");
      suspensionStatus(false);
    } else {
      toast.error("Commuter Suspension revoking failed");
    }
  };

  const clearSuspensionEntry = () => {
    setReason("");
    setSuspensionDate("");
  };

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
    // console.log("Update selected", CommuterUpdate);
  };

  useEffect(() => {
    const filtered = approvedCommuters.filter((commuter) =>
      commuterMatchesSearchTerm(commuter)
    );
    setFilteredCommuters(filtered);
  }, [approvedCommuters, searchValueCommuter, dispatch]);

  //console.log(selectedCommuter);
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
            {filteredCommuters.length === 0 && (
              <tr>
                <td>No commuters on the list</td>
              </tr>
            )}
            {filteredCommuters.map((commuterUpdate) => (
              <CommuterTableList
                key={commuterUpdate.commuterId}
                commuterUpdate={commuterUpdate}
                selectUser={selectUser}
                suspensionStatus={suspensionStatus}
                onSelectCommuter={onSelectCommuter}
                toggleUpdate={toggleUpdate}
                toggleSuspension={toggleSuspension}
                setCommuterID={setCommuterID}
                getSuspension={getSuspension}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommuterTable;
