import React from "react";
import ModalTemplate from "./ModalTemplate";
import ModalHead from "./ModalHead";
import ModalContent from "./ModalContent";

function Modal({ isOpen, handleClose }) {
  return (
    <ModalTemplate open={isOpen} onClose={handleClose}>
      <ModalHead title="환자 추가" handleClose={handleClose} />
      <ModalContent />
    </ModalTemplate>
  );
}

export default Modal;
