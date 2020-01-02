import React from "react";
import IconButton from "../IconButton";
import CloseIcon from "@material-ui/icons/Close";
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
        <IconButton label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </ModalHeadBlock>
    </>
  );
}

export default ModalHead;
