import React, { useEffect } from "react";
import IconButton from "../IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";
import { calculateAge, getBirthday } from "../../common";
import {
  useWaitingPatientsState,
  useWaitingPatientsDispatch,
  getWaitingPatients
} from "../../contexts/WaitingPatientsContext";

const WaitingPatient = React.memo(function WaitingPatient({ waitingPatient, dispatch }) {
  const onDelete = () =>
    dispatch({
      type: "DELETE_WAITING_PATIENT",
      id: waitingPatient.QUEUE_ID
    });
  const birthday = getBirthday(waitingPatient.ID_NUMBER);

  return (
    <ListItem>
      <ListItemCell>{waitingPatient.NAME}</ListItemCell>
      <ListItemCell>{waitingPatient.SEX}</ListItemCell>
      <ListItemCell>
        {birthday} (만 {calculateAge(birthday)}세)
      </ListItemCell>
      <ListItemCell>
        <IconButton label="close" onClick={onDelete}>
          <CloseIcon />
        </IconButton>
      </ListItemCell>
    </ListItem>
  );
});

const WaitingPatients = React.memo(function WaitingPatients({ state, dispatch }) {
  const { data: waitingPatients, loading, error } = state;

  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !waitingPatients || waitingPatients.length === 0) return <></>;
  return waitingPatients.map(waitingPatient => (
    <WaitingPatient
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
      <WaitingPatients state={state} dispatch={dispatch} />
    </ListContent>
  );
}

export default WaitingPatientList;
