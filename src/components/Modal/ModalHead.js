import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const ModalHeadBlock = withStyles(theme => ({
  root: {
    justifyContent: "space-between",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    "& h4": {
      color: theme.palette.black,
      fontWeight: "bold",
      fontSize: "19px"
    },
    "& button": {
      padding: "5px",
      marginRight: "-5px"
    }
  }
}))(DialogTitle);

function ModalHead({ title, onClose }) {
  return (
    <>
      <ModalHeadBlock disableTypography>
        <h4>{title}</h4>
        <IconButton aria-label="close" onClick={onClose}>
          <MdClose />
        </IconButton>
      </ModalHeadBlock>
    </>
  );
}

export default ModalHead;
