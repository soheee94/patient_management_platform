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

    & label.Mui-focused {
      color: ${props => props.theme.palette.pink};
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

function FormControl({ children, label, id }) {
  return (
    <FormControlBlock label={label}>
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
