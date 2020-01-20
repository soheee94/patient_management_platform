import React from "react";
import styled, { css } from "styled-components";
import { FormControl as MaterialFormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";

const FormControlBlock = styled(MaterialFormControl)`
  && {
    width: 100%;
    padding: 15px 15px 5px 15px;

    ${props =>
      !props.label &&
      css`
        padding: 0;
      `}

    /* focus */
    & label.Mui-focused {
      color: ${props => props.theme.palette.pink};
    }

    /* error */
    & .MuiFormHelperText-root {
      display: none;
      font-family: "Noto Sans KR Regular";
      ${props =>
        props.error &&
        css`
          display: block;
        `};
    }
  }
`;

const FormLabel = styled(InputLabel)`
  && {
    color: ${props => props.theme.palette.black};
    font-family: "Noto Sans KR Regular";
    font-weight: bold;
    font-size: 15px;
    transform: none;
    top: 15px;
    left: 15px;
  }
`;

function FormControl({ children, label, id, error }) {
  return (
    <FormControlBlock label={label} error={error}>
      {label && (
        <FormLabel shrink htmlFor={id}>
          {label}
        </FormLabel>
      )}
      {children}
    </FormControlBlock>
  );
}

export default React.memo(FormControl);
