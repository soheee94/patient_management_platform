import React from "react";
import logo_big from "../../assets/logo_big.png";
import ListTitle from "./ListTitle";
import Button from "../Button";

function MeasurementResultList() {
  return (
    <>
      <ListTitle style={{ justifyContent: "flex-end" }}>
        <Button color="pink">측정 결과</Button>
      </ListTitle>
      <div className="list-content-background">
        <img src={logo_big} alt="배경 로고" />
      </div>
    </>
  );
}

export default MeasurementResultList;
