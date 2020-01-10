import React from "react";
import styled from "styled-components";

const ListContentBlock = styled.div`
  padding: 10px 15px;
  display: table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
  height: auto;
  max-height: calc(100% - 60px);
  overflow-y: auto;
`;

function ListContent({ children }) {
  return <ListContentBlock>{children}</ListContentBlock>;
}

export default ListContent;
