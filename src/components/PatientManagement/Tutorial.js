import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "../IconButton";

function Tutorial({ onClose }) {
  return (
    <div className="tutorial">
      <div className="tutorial--top">
        <span>v1.0.0</span>
        <IconButton onClick={onClose} label="close">
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Tutorial;
