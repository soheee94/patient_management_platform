import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const FormControlBlock = withStyles(theme => ({
  root: {
    width: "100%",
    padding: "15px 15px 5px 15px;",
    "& label.Mui-focused": {
      color: theme.palette.black
    }
  }
}))(FormControl);

const FormGroupBlock = withStyles(theme => ({
  root: {
    marginTop: "24px",
    fontFamily: "Noto Sans KR Regular"
  }
}))(FormGroup);

const FormLabel = withStyles(theme => ({
  root: {
    color: theme.palette.black,
    fontFamily: "Noto Sans KR Regular",
    fontWeight: "bold",
    fontSize: "15px",
    transform: "none",
    top: "15px",
    left: "15px"
  }
}))(InputLabel);

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
    border: `1px solid ${theme.palette.gray}`,
    fontSize: 14,
    color: theme.palette.black,
    width: "100%",
    padding: "8px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade(theme.palette.darkGray, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.darkGray
    }
  }
}))(InputBase);

const FormCheckbox = withStyles(theme => ({
  root: {
    color: theme.palette.gray,
    "&$checked": {
      color: theme.palette.pink
    },
    "& + span": {
      fontFamily: "Noto Sans KR Regular",
      fontSize: "14px"
    }
  }
}))(Checkbox);

function ModalInput({ label, placeholder, type, ...props }) {
  return (
    <FormControlBlock>
      <FormLabel shrink htmlFor={label}>
        {label}
      </FormLabel>
      {type === "text" && <FormInput placeholder={placeholder} id={label} />}
      {type === "checkbox" && (
        <FormGroupBlock>
          {props.checkboxes.map((checkbox, index) => (
            <FormControlLabel
              key={index}
              control={
                <FormCheckbox
                  checked={checkbox.state}
                  onChange={props.handleChange(checkbox.value)}
                  value={checkbox.label}
                />
              }
              label={checkbox.label}
            />
          ))}
        </FormGroupBlock>
      )}
    </FormControlBlock>
  );
}

ModalInput.defaultProps = {
  placeholder: ""
};

export default ModalInput;
