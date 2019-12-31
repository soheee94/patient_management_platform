import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";

const ModalTemplateBlock = withStyles({
  scrollPaper: {
    alignItems: "flex-start"
  },
  paper: {
    padding: "15px",
    width: "380px"
  }
})(Dialog);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalTemplate({ children, open, onClose }) {
  return (
    <ModalTemplateBlock open={open} TransitionComponent={Transition} keepMounted onClose={onClose}>
      {children}
    </ModalTemplateBlock>
  );
}

export default ModalTemplate;
