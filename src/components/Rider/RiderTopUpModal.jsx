import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input,
  } from "reactstrap";
//   import "../../assets/css/RiderTopUpModal.css";
import "../../assets/css/RiderSuspensionModal.css";
  
  
  const RiderTopUpModal = ({
    isOpen,
    untoggle,
    rider,
    
  }) => {
    
  
    return (
      <>
        <Modal isOpen={isOpen} toggle={untoggle} centered>
          <ModalHeader toggle={untoggle} className="riderSuspensionHeader">
            Rider TopUpHistory
          </ModalHeader>
          <Form form="true">
            <ModalBody>
              <center>
                <h5>
                  <strong>
                    {rider.firstName}{" "}
                    {rider.middleName ? rider.middleName[0] + "." : ""}{" "}
                    {rider.lastName}
                  </strong>
                </h5>
              </center>{" "}
              <div>
                <label htmlFor="" style={{ margin: "5px" }}>
                  <strong>Reason : </strong>
                </label>
               
              </div>
           
              <hr />
             
            </ModalBody>
            <ModalFooter
              className="riderSuspensionFooter"
              style={{ justifyContent: "space-between" }}
            >
              
                <Button
                  className="btn btn-warning btnRiderRevokeSuspension"
                
                >
                  Revoke Suspension
                </Button>
            
                <Button
                  className="btn btnRiderConfirmSuspension"
                  onClick={() => {
                   
                  }}
                >
                  Confirm
                </Button>
             
            </ModalFooter>
          </Form>
        </Modal>
      </>
    );
  };
  
  export default RiderTopUpModal;
  