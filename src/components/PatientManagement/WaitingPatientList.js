import React from "react";
import IconButton from "../IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";
import axios from "axios";
import useAsync from "../../useAsync";
import { calculateAge } from "../../common";

async function getWaitingPatientList() {
  const response = await axios.get("http://127.0.0.1/cordia/GetWaitingPatientList.php");
  return response.data;
}

function WaitingPatientList() {
  const state = useAsync(() => getWaitingPatientList(), []);
  const { loading, data: waintingPatients, error } = state;
  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !waintingPatients || waintingPatients.length === 0) return <></>;
  return (
    <ListContent>
      {waintingPatients.map(waitingPatient => (
        <ListItem>
          <ListItemCell>{waitingPatient.NAME}</ListItemCell>
          <ListItemCell>{waitingPatient.SEX}</ListItemCell>
          <ListItemCell>
            {waitingPatient.BIRTHDAY} (만 {calculateAge(waitingPatient.BIRTHDAY)}세)
          </ListItemCell>
          <ListItemCell>
            <IconButton label="close" onClick={() => console.log("close")}>
              <CloseIcon />
            </IconButton>
          </ListItemCell>
        </ListItem>
      ))}
    </ListContent>
  );
}

export default WaitingPatientList;
