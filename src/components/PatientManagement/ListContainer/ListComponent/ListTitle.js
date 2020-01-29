import React from "react";
import styled from "styled-components";

const ListTitleBlock = styled.div`
  font-family: "Noto Sans KR Medium";
  background-color: ${props => props.theme.palette.lighterGray};
  height: 50px;
  font-size: 1.3em;
  padding: 0px 15px;
  border-bottom: 1px solid ${props => props.theme.palette.gray};
  border-top: 1px solid ${props => props.theme.palette.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ListTitle({ children, style }) {
  return <ListTitleBlock style={style}>{children}</ListTitleBlock>;
}

export default ListTitle;
