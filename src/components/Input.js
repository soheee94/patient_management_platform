import React from "react";
import styled, { css } from "styled-components";
import FormControl from "./FormControl";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";

const StyledInput = styled(InputBase)`
  label + & {
    margin-top: 24px;
  }

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

    ${props =>
      props.error &&
      css`
        border: 1px solid ${props => props.theme.palette.pink};
      `};
  }

  /* Search Input Style */
  ${props =>
    props.id === "list-header__search" &&
    css`
      width: 250px;
    `};
`;

function Input({ placeholder, id, label, onChange, error, ...rest }) {
  return (
    <FormControl label={label} id={id} error={error}>
      <StyledInput placeholder={placeholder} id={id} onChange={onChange} error={error} {...rest} />
      <FormHelperText>정확하게 입력해주세요.</FormHelperText>
    </FormControl>
  );
}

Input.defaultProps = {
  label: "",
  placeholder: ""
};

export default React.memo(Input);
