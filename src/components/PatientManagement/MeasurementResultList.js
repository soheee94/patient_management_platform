import React from "react";
import styled from "styled-components";
import logo_big from "../../assets/logo_big.png";
import ListTitle from "./ListTitle";
import Button from "../Button";

const ListBackground = styled.div`
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
  }
`;

function MeasurementResultList() {
  return (
    <>
      <ListTitle style={{ justifyContent: "flex-end" }}>
        <Button color="pink">측정 결과</Button>
      </ListTitle>
      <ListBackground>
        <img src={logo_big} alt="배경 로고" />
      </ListBackground>
    </>
  );
}

export default MeasurementResultList;
