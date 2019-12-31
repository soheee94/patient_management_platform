import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

const FormControlBlock = withStyles({
  root: {
    width: "100%",
    marginBottom: "20px"
  }
})(FormControl);

const FormLabel = withStyles({
  root: {
    fontFamily: "Noto Sans KR Regular",
    fontWeight: "bold",
    fontSize: "15px",
    transform: "none"
  }
})(InputLabel);

const FormInput = withStyles(theme => ({
  root: {
    fontFamily: "Noto Sans KR Regular",
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 14,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);
function ModalInput({ label, placeholder }) {
  return (
    <FormControlBlock>
      <FormLabel shrink htmlFor="bootstrap-input">
        {label}
      </FormLabel>
      <FormInput placeholder={placeholder} id="bootstrap-input" />
    </FormControlBlock>
  );
}

export default ModalInput;
