import React, { useEffect } from "react";
import IconButton from "../IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";
import { calculateAge } from "../../common";
import {
  usePatientsState,
  usePatientsDispatch,
  getWaitingPatients
} from "../../contexts/PatientContext";

function WaitingPatientList() {
  const state = usePatientsState();
  const dispatch = usePatientsDispatch();
  const { data: waitingPatients, loading, error } = state.waitingPatients;
  useEffect(() => {
    getWaitingPatients(dispatch);
  }, [dispatch]);
  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !waitingPatients || waitingPatients.length === 0) return <></>;
  return (
    <ListContent style={{ maxHeight: "calc(100% - 180px)" }}>
      {waitingPatients.map(waitingPatient => (
        <ListItem key={waitingPatient.QUEUE_ID}>
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
      ))}
    </ListContent>
  );
}

export default WaitingPatientList;
