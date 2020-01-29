import React, { useEffect } from "react";
import IconButton from "../../common/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ListContent from "./ListComponent/ListContent";
import ListItem from "./ListComponent/ListItem";
import ListItemCell from "./ListComponent/ListItemCell";
import { calculateAge, getBirthday } from "../../../common";
import {
  useWaitingPatientsState,
  useWaitingPatientsDispatch,
  getWaitingPatients
} from "../../../contexts/PatientManagement/WaitingPatientsContext";

const WaitingPatient = React.memo(function WaitingPatient({ waitingPatient, onDelete }) {
  const birthday = getBirthday(waitingPatient.ID_NUMBER);
  return (
    <ListItem>
      <ListItemCell>{waitingPatient.NAME}</ListItemCell>
      <ListItemCell>{waitingPatient.SEX}</ListItemCell>
      <ListItemCell>
        {birthday} (만 {calculateAge(birthday)}세)
      </ListItemCell>
      <ListItemCell>
        <IconButton label="close" onClick={() => onDelete(waitingPatient.QUEUE_ID)}>
          <CloseIcon />
        </IconButton>
      </ListItemCell>
    </ListItem>
  );
});

const WaitingPatients = React.memo(function WaitingPatients() {
  const state = useWaitingPatientsState();
  const { data: waitingPatients, loading, error } = state;
  const dispatch = useWaitingPatientsDispatch();
  const onDelete = QUEUE_ID =>
    dispatch({
      type: "DELETE_WAITING_PATIENT",
      id: QUEUE_ID
    });

  useEffect(() => {
    getWaitingPatients(dispatch);
  }, [dispatch]);

  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !waitingPatients || waitingPatients.length === 0) return <></>;
  return waitingPatients.map(waitingPatient => (
    <WaitingPatient
      waitingPatient={waitingPatient}
      key={waitingPatient.QUEUE_ID}
      onDelete={onDelete}
    />
  ));
});

function WaitingPatientList() {
  return (
    <ListContent style={{ maxHeight: "calc(100% - 180px)" }}>
      <WaitingPatients />
    </ListContent>
  );
}

export default WaitingPatientList;
