import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
} from "reactstrap";

import image3 from "../../assets/image/cs3.png";

import React, { useEffect, useState } from "react";

const ViewImageModal = ({ isOpen, untoggle, imageSource }) => {
  const [dynamicImage, setDynamicImage] = useState(null);

  useEffect(() => {
    import(imageSource)
      .then((image) => {
        setDynamicImage(image.default);
      })
      .catch((error) => {
        console.error("Failed to load image:", error);
        setDynamicImage(null);
      });
  }, [imageSource]);

  return (
    <>
      <Modal isOpen={isOpen} toggle={untoggle} centered size="lg">
        <ModalHeader
          toggle={untoggle}
          style={{ backgroundColor: "#52459f", color: "white" }}
        >
          Image Viewer
        </ModalHeader>
        <ModalBody>
          {!imageSource && <center>No Image</center>}
          {imageSource && (
            <img src={dynamicImage} style={{ maxWidth: "100%" }} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ViewImageModal;
