import React from "react";
import styled, { css } from "styled-components";

const rowItemCellStyle = css`
  ${props =>
    !props.head &&
    css`
      border: solid 1px #ccc;
      border-style: solid none;
      &:first-of-type {
        border-left-style: solid;
      }
      &:last-of-type {
        border-right-style: solid;
        text-align: right;
        button {
          margin-left: 10px;
          visibility: hidden;
        }
      }
    `}
`;

const ListItemCellBlock = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  & > * {
    vertical-align: middle;
  }

  &:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  /* 테이블 로우 아이템 셀 스타일 */
  ${rowItemCellStyle}
`;

function ListItemCell({ children, head, ...rest }) {
  return (
    <ListItemCellBlock head={head} {...rest}>
      {children}
    </ListItemCellBlock>
  );
}

ListItemCell.defaultProps = {
  head: false
};

export default ListItemCell;
