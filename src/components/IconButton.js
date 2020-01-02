import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton as MaterialIconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "#333",
    padding: "5px"
  }
});

function IconButton({ children, onClick, label }) {
  const classes = useStyles();
  return (
    <MaterialIconButton aria-label={label} onClick={onClick} className={classes.root}>
      {children}
    </MaterialIconButton>
  );
}

export default IconButton;
