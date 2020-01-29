import React from "react";
import IconButton from "../common/IconButton";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";

const ModalHeadBlock = styled(DialogTitle)`
  && {
    justify-content: space-between;
    padding: 15px;
    display: flex;
    align-items: center;
  }

  & h4 {
    color: ${props => props.theme.palette.black};
    font-weight: bold;
    font-size: 19px;
  }
  & button {
    padding: 5px;
    margin-right: -5px;
  }
`;

function ModalHead({ title, onClose }) {
  return (
    <>
      <ModalHeadBlock disableTypography>
        <h4>{title}</h4>
        <IconButton label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </ModalHeadBlock>
    </>
  );
}

export default React.memo(ModalHead);
