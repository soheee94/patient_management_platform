import React from "react";
import ModalHead from "./ModalHead";
import ModalContent from "./ModalContent";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const ModalTemplate = withStyles({
  scrollPaper: {
    alignItems: "flex-start"
  },
  paper: {
    width: "380px"
  }
})(Dialog);

function Modal({ isOpen, handleClose, title }) {
  return (
    <ModalTemplate open={isOpen} onClose={handleClose}>
      <ModalHead title={title} onClose={handleClose} />
      <ModalContent onClose={handleClose} />
    </ModalTemplate>
  );
}

export default React.memo(Modal);
