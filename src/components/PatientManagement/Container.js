import React from "react";
import Grid from "@material-ui/core/Grid";
import WaitingPatientList from "./WaitingPatientList";
import MeasurePatientList from "./MeasurePatientList";
import PatientList from "./PatientList";
import MeasurementResultList from "./MeasurementResultList";
import styled from "styled-components";
import ListTitle from "./ListTitle";
import Button from "../Button";
import Input from "../Input";

const Container = styled(Grid)`
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

function ListContainer() {
  return (
    <Container container>
      {/* 측정 환자 리스트 */}
      <Grid item xs={3}>
        <ListTitle>
          <span>현재 측정 환자</span>
        </ListTitle>
        <MeasurePatientList />
        <ListTitle>
          <span>대기 환자</span>
        </ListTitle>
        <WaitingPatientList />
      </Grid>
      {/* 환자 리스트 */}
      <PatientListContainer item xs={6}>
        {/* 타이틀 */}
        <ListTitle>
          <Input type="text" placeholder="검색" id="list-header__search" />
          <Button color="black" onClick={() => console.log("환자 추가")}>
            환자 추가
          </Button>
        </ListTitle>
        <PatientList />
      </PatientListContainer>
      {/* 환자 측정 결과 리스트 */}
      <Grid item xs={3}>
        <ListTitle style={{ justifyContent: "flex-end" }}>
          <Button color="pink">측정 결과</Button>
        </ListTitle>
        <MeasurementResultList />
      </Grid>
    </Container>
  );
}

export default React.memo(ListContainer);
