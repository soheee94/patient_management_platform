import React from "react";
import styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";

const StyledInput = styled(InputBase)`
  border-radius: 4px;
  background: ${props => props.theme.palette.white};
  border: 1px solid ${props => props.theme.palette.gray};
  height: 34px;
  width: 100%;
  font-size: 14px;
  padding: 10px 15px;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

function Input({ placeholder, id }) {
  return <StyledInput placeholder={placeholder} id={id}></StyledInput>;
}

export default Input;
