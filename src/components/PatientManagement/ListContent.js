import React from "react";
import styled from "styled-components";

const ListContentBlock = styled.div`
  height: auto;
  max-height: calc(100% - 60px);
  overflow-y: auto;
  & > div {
    padding: 10px 15px;
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;
  }
`;

function ListContent({ children, ...rest }) {
  return (
    <ListContentBlock {...rest}>
      <div>{children}</div>
    </ListContentBlock>
  );
}

export default React.memo(ListContent);
