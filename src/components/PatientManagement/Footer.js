import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-top: 1px solid ${props => props.theme.palette.gray};
  color: ${props => props.theme.palette.gray};
  font-size: 12px;

  a {
    text-decoration: none;
    color: ${props => props.theme.palette.black};
    font-family: "Noto Sans KR Medium";
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterBlock>
      ©{" "}
      <a href="http://teamelysium.kr/" target="blank">
        Team Elysium Inc.
      </a>{" "}
      All Rights Reserved.
    </FooterBlock>
  );
}

export default React.memo(Footer);
