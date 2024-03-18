import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import "../../assets/css/CommuterDocumentViewerModal.css";

const CommuterDocumentViewerModal = ({ isOpen, untoggle }) => {

    const data = [
        { id: 1, documentName: 'National ID', type: 'Front', path: '../../assets/img/documentViewerImages/pictureCommuterFront.jpg' },
        { id: 2, documentName: 'National ID', type: 'Back' },
        { id: 3, documentName: 'National ID', type: 'Back' },
        { id: 4, documentName: 'National ID', type: 'Back' },
    ];

    const openImage = (id) => {

        const item = data.find((item) => item.id === id);
        if (item && item.path) {
            const imagePath = item.path;
            window.open(`file://${imagePath}`, '_blank');
        } else {
            console.error("Image path not found.");
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} toggle={untoggle} centered size="lg">
                <ModalHeader toggle={untoggle} className='commuterDocumentViewerHeader'>Document Viewer</ModalHeader>
                <ModalBody>
                    <center><h5><strong>Andrew Walker</strong></h5></center>
                    <Container className='documentViewerContainer'>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th className="documentViewerth">Document</th>
                                    <th className="documentViewerth">Type</th>
                                    <th className="documentViewerth">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr>
                                        <td className='itemBodyDocumentViewer'>{item.documentName}</td>
                                        <td className='itemBodyDocumentViewer'>{item.type}</td>
                                        <td className='itemBodyDocumentViewer'><Button className="btn btn-warning btnView" onClick={() => { openImage(item.id) }}>View</Button></td>
                                    </tr>
                                ))}
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </Container>
                </ModalBody>
            </Modal>
        </>
    );
}

export default CommuterDocumentViewerModal;