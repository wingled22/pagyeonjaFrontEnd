import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import "../../assets/css/CommuterDocumentViewerModal.css";
import { useEffect, useState } from 'react';
import ViewImageModal from '../../components/Commuter/ViewImageModal.jsx';


const CommuterDocumentViewerModal = ({ isOpen, untoggle, commuterInfo }) => {

    const data = [
        { id: 1, documentName: 'National ID', type: 'Front', path: '../../assets/image/cs3.png' },
        { id: 2, documentName: 'National ID', type: 'Back', path: '../../assets/img/documentViewerImages/pictureCommuterFront.jpg' },
        { id: 3, documentName: 'National ID', type: 'Back' },
        { id: 4, documentName: 'National ID', type: 'Back' },
    ];

    const {
        commuterId,
        firstName,
        middleName,
        lastName
      } = commuterInfo;

    const [modalImageViewer, setModalImageViewer] = useState(false);
    const toggleImageViewer = () => setModalImageViewer(!modalImageViewer);
    const [imageSource, setImageSource] = useState(null);

    return (
        <>
            {imageSource && <ViewImageModal isOpen={modalImageViewer} untoggle={toggleImageViewer} imageSource={imageSource} />}

            <Modal isOpen={isOpen} toggle={untoggle} centered size="lg">
                <ModalHeader toggle={untoggle} className='commuterDocumentViewerHeader'>Document Viewer</ModalHeader>
                <ModalBody>
                    <center><h5><strong>{firstName} {middleName} {lastName}</strong></h5></center>
                    <Container className='documentViewerContainer'>
                        <table style={{ width: '100%' }}>
                            <thead style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#52459f', height: '50px', color: 'white' }}>
                                <tr>
                                    <th className="documentViewerth">Document</th>
                                    <th className="documentViewerth">Type</th>
                                    <th className="documentViewerth">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr className='trDocumentViewerTable' key={item.id}>
                                        <td className='itemBodyDocumentViewer'>{item.documentName}</td>
                                        <td className='itemBodyDocumentViewer'>{item.type}</td>
                                        <td className='itemBodyDocumentViewer'><Button className="btn btn-warning btnView" onClick={() => {toggleImageViewer(), setImageSource(item.path)}}>View</Button></td>
                                    </tr>
                                ))}
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </Container>
                </ModalBody>
            </Modal>

            {/* {selectedImage && (
                <Container>
                    <img src="" alt="None selected" style={{ width: '100%' }} />
                </Container>
            )} */}
        </>
    );
}

export default CommuterDocumentViewerModal;