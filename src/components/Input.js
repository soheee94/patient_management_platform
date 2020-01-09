import React from "react";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";

const FormControlBlock = styled(FormControl)`
  width: 250px;
`;
/* const FormControlBlock = withStyles(theme => ({
  root: {
    width: "250px",
    // padding: "15px 15px 5px 15px;",
    "& label.Mui-focused": {
      color: theme.palette.pink
    }
  }
}))(FormControl); */

const StyledInput = styled(InputBase)`
  input {
    font-family: "Noto Sans KR Regular";
    box-sizing: border-box;
    border-radius: 4px;
    background: ${props => props.theme.palette.white};
    border: 1px solid ${props => props.theme.palette.gray};
    height: 34px;
    width: 100%;
    font-size: 14px;
    padding: 10px 15px;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:focus {
      box-shadow: ${fade("#999999", 0.25)} 0 0 0 0.2rem;
      border-color: ${props => props.theme.palette.darkGray};
      outline: 0;
    }
  }
`;

function Input({ placeholder, id }) {
  return (
    <FormControlBlock>
      <StyledInput placeholder={placeholder} id={id} />
    </FormControlBlock>
  );
}

export default Input;
