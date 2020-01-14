import React from "react";
import styled from "styled-components";
import logo_big from "../../assets/logo_big.png";
import { PatientIdContext } from "../../contexts/PatientContext";

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
      <PatientIdContext.Consumer>
        {value =>
          value.patientId ? (
            <div>{value.patientId}</div>
          ) : (
            <ListBackground>
              <img src={logo_big} alt="배경 로고" />
            </ListBackground>
          )
        }
      </PatientIdContext.Consumer>
    </>
  );
}

export default MeasurementResultList;
