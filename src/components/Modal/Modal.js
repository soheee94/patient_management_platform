import React from "react";
import ModalTemplate from "./ModalTemplate";
import ModalHead from "./ModalHead";
import ModalContent from "./ModalContent";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    black: "#333",
    gray: "#ccc",
    darkGray: "#999",
    pink: "#e84d6a"
  }
});

function Modal({ isOpen, handleClose }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalTemplate open={isOpen} onClose={handleClose}>
        <ModalHead title="환자 추가" onClose={handleClose} />
        <ModalContent />
      </ModalTemplate>
    </ThemeProvider>
  );
}

export default Modal;
