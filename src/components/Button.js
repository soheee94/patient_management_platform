import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  font-family: "Noto Sans KR Regular";
  display: inline-block;
  color: white;
  padding: 6px 15px;
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 4px;
  outline: none;

  /* 색상 */
  ${colorStyles}
`;

function Button({ children, color, onClick }) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
}

export default React.memo(Button);
