import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import "../../assets/css/CommuterDocumentViewerModal.css";
import { useEffect, useState } from "react";
import ViewImageModal from "../../components/Commuter/ViewImageModal.jsx";

const CommuterDocumentViewerModal = ({ isOpen, untoggle, document, userName }) => {
  const [modalImageViewer, setModalImageViewer] = useState(false);
  const toggleImageViewer = () => setModalImageViewer(!modalImageViewer);
  const [imageSource, setImageSource] = useState("");

  return (
    <>
       {imageSource && (
        <ViewImageModal
          isOpen={modalImageViewer}
          untoggle={toggleImageViewer}
          imageSource={imageSource}
        />
      )}

      <Modal isOpen={isOpen} toggle={untoggle} centered size="lg">
        <ModalHeader toggle={untoggle} className="commuterDocumentViewerHeader">
          Document Viewer
        </ModalHeader>
        <ModalBody>
          <center>
            <h5>
              <strong>
                {userName}
              </strong>
            </h5>
          </center>
          <Container className="documentViewerContainer">
            <table style={{ width: "100%" }}>
              <thead
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  backgroundColor: "#52459f",
                  height: "50px",
                  color: "white",
                }}
              >
                <tr>
                  <th className="documentViewerth">Document</th>
                  <th className="documentViewerth">Type</th>
                  <th className="documentViewerth">Action</th>
                </tr>
              </thead>
              <tbody>
                {document &&
                  document.map((item) => (
                    <tr key={item.id}>
                      <td className="itemBodyDocumentViewer">
                        {item.documentName}
                      </td>
                      <td className="itemBodyDocumentViewer">
                        {item.documentView}
                      </td>
                      <td className="itemBodyDocumentViewer">
                        <Button
                          className="btn btn-warning btnView"
                          onClick={() => {
                            toggleImageViewer(),
                              setImageSource(
                                `http://localhost:5180/img/documents/${item.documentPath}`
                              );
                          }}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
       
              </tbody>
            </table>
          </Container>
        </ModalBody>
      </Modal>

    </>
  );
};

export default CommuterDocumentViewerModal;
