import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "reactstrap";
const CommuterTableList = ({ commuterUpdate, selectUser, suspensionStatus, onSelectCommuter, toggleUpdate, toggleSuspension, setCommuterID, getSuspension }) => {
  return (
    <>
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
              // console.log("Commuters: ", commuterUpdate);
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
    </>
  );
}

export default CommuterTableList;