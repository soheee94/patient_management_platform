import React from "react";
import Grid from "@material-ui/core/Grid";
import WaitingPatientList from "./WaitingPatientList";
import CompletedPatientList from "./CompletedPatientList";
import PatientList from "./PatientList";
import MeasurementResultList from "./MeasurementResultList";

function ListContainer() {
  return (
    <Grid container className="list-container">
      {/* 측정 환자 리스트 */}
      <Grid item xs={3} className="measurement-patient-list">
        <WaitingPatientList />
        <CompletedPatientList />
      </Grid>
      {/* 환자 리스트 */}
      <Grid item xs={6}>
        <PatientList />
      </Grid>
      {/* 환자 측정 결과 리스트 */}
      <Grid item xs={3}>
        <MeasurementResultList />
      </Grid>
    </Grid>
  );
}

export default ListContainer;
