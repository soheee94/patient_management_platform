import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";

const ModalTemplateBlock = withStyles({
  scrollPaper: {
    alignItems: "flex-start"
  },
  paper: {
    width: "380px"
  }
})(Dialog);

function ModalTemplate({ children, open, onClose }) {
  return (
    <ModalTemplateBlock open={open} onClose={onClose}>
      {children}
    </ModalTemplateBlock>
  );
}

export default ModalTemplate;
