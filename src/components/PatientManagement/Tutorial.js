import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "../common/IconButton";

const TutorialContainer = styled.div`
  top: 0;
  position: absolute;
  background: ${props => props.theme.palette.lightGray};
  width: 100%;
  height: 100%;
  padding: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Tutorial({ onClose }) {
  return (
    <TutorialContainer>
      <div>
        <span>v1.0.0</span>
        <IconButton onClick={onClose} label="close">
          <CloseIcon />
        </IconButton>
      </div>
    </TutorialContainer>
  );
}

export default Tutorial;
