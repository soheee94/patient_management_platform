import React from "react";
import styled from "styled-components";
import logo_big from "../../../assets/logo_big.png";
import ListContent from "./ListComponent/ListContent";
import useAsync from "../../../useAsync";
import { PatientIdContext } from "../../../contexts/PatientManagement/PatientContext";
import { getPatientMeasurementList } from "../../../contexts/api";

// 로고 배경
const ListBackground = styled.div`
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
  }
`;

const MeasurementResultBox = styled.div`
  border: 1px solid ${props => props.theme.palette.gray};
  border-radius: 4px;
  padding: 0 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.palette.lightGray};
  }
`;

const MeasurementResultItems = React.memo(function MeasurementResultItems({ id }) {
  const [state] = useAsync(() => getPatientMeasurementList(id), [id]);
  const { loading, data: measurementResults, error } = state;
  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !measurementResults || measurementResults.length === 0)
    return (
      <ListBackground>
        <img src="#" alt="Background LOGO" />
      </ListBackground>
    );
  if (measurementResults)
    // ★ 프로젝트 별 결과 리스트 박스 다름
    return (
      <ListContent>
        {measurementResults.map(measurementResult => (
          <MeasurementResultBox key={measurementResult.MEASURE_ID}>측정 결과</MeasurementResultBox>
        ))}
      </ListContent>
    );
});

function MeasurementResultList() {
  return (
    <>
      <PatientIdContext.Consumer>
        {value => <MeasurementResultItems id={value.patientId} />}
      </PatientIdContext.Consumer>
    </>
  );
}

export default React.memo(MeasurementResultList);
