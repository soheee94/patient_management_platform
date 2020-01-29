import React from "react";
import FormControl from "./FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox as MaterialCheckbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const FormGroupBlock = withStyles({
  root: {
    marginTop: "24px",
    fontFamily: "Noto Sans KR Regular"
  }
})(FormGroup);

const FormCheckbox = styled(MaterialCheckbox)`
  && {
    color: ${props => props.theme.palette.gray};
    &::checked {
      color: ${props => props.theme.palette.pink};
    }
    & + span {
      font-family: "Noto Sans KR Regular";
      font-size: 14px;
    }
  }
`;

function Checkbox({ checkboxes, handleChange, label, id }) {
  return (
    <FormControl label={label} id={id}>
      <FormGroupBlock>
        {checkboxes.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            control={
              <FormCheckbox
                checked={checkbox.state}
                onChange={handleChange(checkbox.value)}
                value={checkbox.label}
              />
            }
            label={checkbox.label}
          />
        ))}
      </FormGroupBlock>
    </FormControl>
  );
}

export default React.memo(Checkbox);
