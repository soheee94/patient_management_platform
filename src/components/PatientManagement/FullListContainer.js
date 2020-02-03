import React from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import WaitingPatientList from "./ListContainer/WaitingPatientList";
import MeasurePatientList from "./ListContainer/MeasurePatientList";
import PatientList from "./ListContainer/PatientList";
import MeasurementResultList from "./ListContainer/MeasurementResultList";
import ListTitle from "./ListContainer/ListComponent/ListTitle";
import Button from "../common/Button";

import { PateintsProvider } from "../../contexts/PatientManagement/PatientListContext";
import { WaitingPatientsProvider } from "../../contexts/PatientManagement/WaitingPatientsContext";
import { PatientIdProvider } from "../../contexts/PatientManagement/PatientContext";

const Wrapper = styled(Grid)`
  flex-grow: 1;
  height: calc(100vh - 100px);
  min-height: 768px;

  & > div {
    height: 100%;
  }
`;

const PatientListContainer = styled(Grid)`
  border-left: 1px solid ${props => props.theme.palette.gray};
  border-right: 1px solid ${props => props.theme.palette.gray};
`;

function FullListContainer() {
  const history = useHistory();
  return (
    <Wrapper container>
      <WaitingPatientsProvider>
        {/* 측정 환자 리스트 */}
        <Grid item lg={3} md={3} xs={3}>
          {/* 현재 측정 환자 리스트 */}
          <ListTitle>
            <span>현재 측정 환자</span>
          </ListTitle>
          <MeasurePatientList />
          {/* 대기 환자 리스트 */}
          <ListTitle>
            <span>대기 환자</span>
          </ListTitle>
          <WaitingPatientList />
        </Grid>
        {/* 환자 리스트 */}
        <PatientIdProvider>
          <PatientListContainer item lg={6} md={6} xs={6}>
            <PateintsProvider>
              <PatientList />
            </PateintsProvider>
          </PatientListContainer>
          {/* 환자 측정 결과 리스트 */}
          <Grid item lg={3} md={3} xs={3}>
            <ListTitle style={{ justifyContent: "flex-end" }}>
              <Button color="point" onClick={() => history.push("/result")}>
                측정 결과
              </Button>
            </ListTitle>
            <MeasurementResultList />
          </Grid>
        </PatientIdProvider>
      </WaitingPatientsProvider>
    </Wrapper>
  );
}

export default React.memo(FullListContainer);
