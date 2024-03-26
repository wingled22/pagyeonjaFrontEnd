import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const ViewRequirements = ({
  onDocumentButtonClick,
  viewText,
  viewFileText,
  documentType,
  toggle,
}) => {
  return (
    <div
      className="rider-approval-boxRequirements container-fluid"
      style={{ cursor: "pointer" }}
      onClick={() => {
        onDocumentButtonClick(documentType);
        toggle();
      }}
    >
      <div className="ellipse-container d-flex align-items-center justify-content-even">
        <div className="mt-2">
          <div className="ellipse-second">
            <FontAwesomeIcon icon={faCloudArrowUp} className="icon-view" />
          </div>

          <p className="fw-bold text-white view-file">{viewText}</p>
          <p className="text-white view-select">{viewFileText}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewRequirements;
