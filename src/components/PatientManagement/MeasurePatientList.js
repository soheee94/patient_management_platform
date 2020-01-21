import React from "react";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";
import useAsync from "../../useAsync";
import { getMeasurePatient } from "../../contexts/api";
import styled from "styled-components";
import { getBirthday, calculateAge } from "../../common";

const NoMeasurePatient = styled.div`
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

function MeasurePatientList() {
  const [state, refetch] = useAsync(() => getMeasurePatient(), []);
  const { loading, data: patient, error } = state;
  const renderPatient = () => {
    if (error) return <div>에러가 발생했습니다</div>;
    if (loading || !patient || patient.length === 0)
      return <NoMeasurePatient>측정 중인 환자가 없습니다</NoMeasurePatient>;
    const birthday = getBirthday(patient[0].ID_NUMBER);
    return (
      <ListItem>
        <ListItemCell>{patient[0].NAME}</ListItemCell>
        <ListItemCell>{patient[0].SEX}</ListItemCell>
        <ListItemCell>
          {birthday} (만 {calculateAge(birthday)}세)
        </ListItemCell>
        <ListItemCell></ListItemCell>
      </ListItem>
    );
  };

  return <ListContent>{renderPatient()}</ListContent>;
}

export default MeasurePatientList;
