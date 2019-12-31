import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const ModalHeadBlock = withStyles({
  root: {
    justifyContent: "space-between",
    padding: 0,
    display: "flex",
    "& h4": {
      fontWeight: "bold",
      fontSize: "19px"
    },
    "& button": {
      padding: "3px",
      marginRight: "-3px"
    }
  }
})(DialogTitle);

function ModalHead({ title, handleClose }) {
  return (
    <>
      <ModalHeadBlock disableTypography>
        <h4>{title}</h4>
        <IconButton aria-label="close" onClick={handleClose}>
          <MdClose />
        </IconButton>
      </ModalHeadBlock>
    </>
  );
}

export default ModalHead;
