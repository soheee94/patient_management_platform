import React from "react";
import styled from "styled-components";
import logo_big from "../../assets/logo_big.png";
import { PatientIdContext } from "../../contexts/PatientContext";
import ListContent from "./ListContent";
import useAsync from "../../useAsync";
import { getPatientMeasurementList } from "../../contexts/api";

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

  & > div {
    padding: 20px 5px;
    border-bottom: 1px solid ${props => props.theme.palette.gray};
    display: flex;
    align-items: center;
    &:last-of-type {
      border-bottom: none;
    }

    span {
      display: inline-block;
      padding: 0 5px;
    }
  }

  .date {
    font-family: "Noto Sans KR Bold";
  }

  .cup-size {
    font-family: "Noto Sans KR Medium";
    &--detail {
      color: ${props => props.theme.palette.pink};
      font-family: "Noto Sans KR Bold";
      font-size: 16px;
    }
  }
`;

const MeausrementResult = styled.div`
  display: flex;
  align-items: center;
  & > div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: Center;
    &:first-of-type {
      margin-right: 10px;
    }
    &:last-of-type {
      margin-left: 10px;
    }

    .data {
      font-family: "Noto Sans KR Bold";
      font-size: 16px;
      margin: 0 10px;
    }
  }
`;

const MeasurementResultItems = React.memo(function MeasurementResultItems({ id }) {
  const calculateCupSize = abs => {
    if (abs <= 7.5) {
      return "AA";
    } else if (7.5 < abs && abs <= 10) {
      return "A";
    } else if (10 < abs && abs <= 12.5) {
      return "B";
    } else if (12.5 < abs && abs <= 15) {
      return "C";
    } else if (15 < abs && abs <= 17.5) {
      return "D";
    } else if (17.5 < abs && abs <= 20) {
      return "E";
    } else if (20 < abs && abs <= 22.5) {
      return "F";
    } else if (22.5 < abs) {
      return "G";
    }
  };
  const [state] = useAsync(() => getPatientMeasurementList(id), [id]);
  const { loading, data: measurementResults, error } = state;
  if (error) return <div>에러가 발생했습니다</div>;
  if (loading || !measurementResults || measurementResults.length === 0)
    return (
      <ListBackground>
        <img src={logo_big} alt="배경 로고" />
      </ListBackground>
    );
  if (measurementResults)
    return (
      <>
        <ListContent>
          {measurementResults.map(measurementResult => (
            <MeasurementResultBox key={measurementResult.MEASURE_ID}>
              <div>
                <span className="date">{measurementResult.MEASURE_DATE.split(" ")[0]}</span>
                <span className="cup-size">컵사이즈</span>
                <span className="cup-size--detail">
                  {calculateCupSize(
                    Math.abs(
                      parseInt(measurementResult.BUST_SIZE) -
                        parseInt(measurementResult.BOTTOM_BUST_SIZE)
                    )
                  )}
                </span>
                <span className="cup-size">cup</span>
              </div>
              <MeausrementResult>
                <div>
                  <span>좌측 가슴 부피</span>
                  <span>
                    <span className="data">{parseInt(measurementResult.LEFT_VOLUME)}</span> cc
                  </span>
                </div>
                <div>
                  <span>우측 가슴 부피</span>
                  <span>
                    <span className="data">{parseInt(measurementResult.RIGHT_VOLUME)}</span> cc
                  </span>
                </div>
              </MeausrementResult>
              <MeausrementResult>
                <div>
                  <span>가슴 둘레</span>
                  <span>
                    <span className="data">{parseInt(measurementResult.BUST_SIZE)}</span> cm
                  </span>
                </div>
                <div>
                  <span>밑가슴 둘레</span>
                  <span>
                    <span className="data">{parseInt(measurementResult.BOTTOM_BUST_SIZE)}</span> cm
                  </span>
                </div>
              </MeausrementResult>
            </MeasurementResultBox>
          ))}
        </ListContent>
      </>
    );
});

function MeasurementResultList() {
  return (
    <>
      <PatientIdContext.Consumer>
        {value =>
          value.patientId ? (
            <MeasurementResultItems id={value.patientId} />
          ) : (
            <ListBackground>
              <img src={logo_big} alt="배경 로고" />
            </ListBackground>
          )
        }
      </PatientIdContext.Consumer>
    </>
  );
}

export default React.memo(MeasurementResultList);
