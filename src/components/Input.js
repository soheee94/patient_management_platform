import React from "react";
import styled from "styled-components";
import FormControl from "./FormControl";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";

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
  }

  /* Search Input Style */
  & #list-header__search {
    width: 250px;
  }
`;

function Input({ placeholder, id, label, onChange, ...rest }) {
  return (
    <FormControl label={label} id={id}>
      <StyledInput placeholder={placeholder} id={id} onChange={onChange} {...rest} />
    </FormControl>
  );
}

Input.defaultProps = {
  label: "",
  placeholder: ""
};

export default React.memo(Input);
