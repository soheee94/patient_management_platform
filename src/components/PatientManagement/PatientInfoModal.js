import React from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import { fade, withStyles, ThemeProvider } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputBase from "@material-ui/core/InputBase";

const TopDialog = withStyles({
  scrollPaper: {
    alignItems: "flex-start"
  }
})(Dialog);

const TextInputField = withStyles(theme => ({
  root: {
    width: "100%",
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    width: "100%",
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      boxShadow: `${fade("#ced4da", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#ced4da"
    }
  }
}))(InputBase);

function PatientInfoModal({ isOpen, handleClose }) {
  return (
    <TopDialog onClose={handleClose} aria-labelledby="patient-info-modal-title" open={isOpen}>
      <div className="modal--dialog">
        <div className="modal--header" id="patient-info-modal-title">
          <h4 className="modal--header--title">환자 추가</h4>
          <IconButton aria-label="close" onClick={handleClose}>
            <MdClose />
          </IconButton>
        </div>
        <div className="modal--body">
          <form autoComplete="off">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="bootstrap-input">
                이름
              </InputLabel>
              <TextInputField placeholder="이름을 입력하세요." />
            </FormControl>
          </form>
        </div>

        <button onClick={handleClose} className="common-button--black">
          등록
        </button>
      </div>
    </TopDialog>
  );
}

export default React.memo(PatientInfoModal);
