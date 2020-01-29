import React from "react";
import styled, { css } from "styled-components";

const headStyle = css`
  ${props =>
    props.head &&
    css`
      height: 35px;
      background-color: ${props => props.theme.palette.black};
      color: white;
    `}
`;

const rowStyle = css`
  ${props =>
    !props.head &&
    css`
      height: 50px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.palette.lightGray};
        button {
          visibility: visible !important;
        }
      }
    `}
`;

const ListItemBlock = styled.div`
  display: table-row;

  /* 테이블 헤드 스타일 */
  ${headStyle}

  /* 테이블 로우 스타일 */
  ${rowStyle}

  /* 아이템 선택 시 */
  &.active{
    background-color: ${props => props.theme.palette.lightGray};
  }
`;

function ListItem({ children, head, onClick, ...rest }) {
  return (
    <ListItemBlock head={head} onClick={onClick} {...rest}>
      {children}
    </ListItemBlock>
  );
}

ListItem.defaultProps = {
  head: false
};

export default React.memo(ListItem);
