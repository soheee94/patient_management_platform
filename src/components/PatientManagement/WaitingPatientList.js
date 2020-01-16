import React, { useEffect } from "react";
import IconButton from "../IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";
import { calculateAge } from "../../common";
import {
  useWaitingPatientsState,
  useWaitingPatientsDispatch,
  getWaitingPatients
} from "../../contexts/PatientContext";

const WaitingPatientItem = React.memo(function WaitingPatientItem({ waitingPatient, dispatch }) {
  return (
    <ListItem>
      <ListItemCell>{waitingPatient.NAME}</ListItemCell>
      <ListItemCell>{waitingPatient.SEX}</ListItemCell>
      <ListItemCell>
        {waitingPatient.BIRTHDAY} (만 {calculateAge(waitingPatient.BIRTHDAY)}세)
      </ListItemCell>
      <ListItemCell>
        <IconButton
          label="close"
          onClick={() =>
            dispatch({
              type: "DELETE_WAITING_PATIENT",
              id: waitingPatient.QUEUE_ID
            })
          }
        >
          <CloseIcon />
        </IconButton>
      </ListItemCell>
    </ListItem>
  );
});

const WaitingPatientItems = React.memo(function WaitingPatientItems({ state, dispatch }) {
  const { data: waitingPatients, loading, error } = state;
  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !waitingPatients || waitingPatients.length === 0) return <></>;
  return waitingPatients.map(waitingPatient => (
    <WaitingPatientItem
      waitingPatient={waitingPatient}
      dispatch={dispatch}
      key={waitingPatient.QUEUE_ID}
    />
  ));
});

function WaitingPatientList() {
  const state = useWaitingPatientsState();
  const dispatch = useWaitingPatientsDispatch();

  useEffect(() => {
    getWaitingPatients(dispatch);
  }, [dispatch]);

  return (
    <ListContent style={{ maxHeight: "calc(100% - 180px)" }}>
      <WaitingPatientItems state={state} dispatch={dispatch} />
    </ListContent>
  );
}

export default WaitingPatientList;
