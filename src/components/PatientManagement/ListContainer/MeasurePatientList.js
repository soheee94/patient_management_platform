import React from "react";
import axios from "axios";
import styled from "styled-components";

import ListContent from "./ListComponent/ListContent";
import ListItem from "./ListComponent/ListItem";
import ListItemCell from "./ListComponent/ListItemCell";

import { getBirthday, calculateAge } from "../../../common";

const NoMeasurePatient = styled.div`
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

class MeasurePatientList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: false
    };
  }

  // 업데이트 전 확인
  shouldComponentUpdate(nextProps, nextState) {
    const { data: patient } = this.state;
    // 이전과 현재 둘 다 데이터가 있고
    if (patient.length > 0 && nextState.data.length > 0) {
      // QUEUE_ID 가 다를 때 (새로운 환자 일 경우) 업데이트
      if (patient[0].QUEUE_ID !== nextState.data[0].QUEUE_ID) {
        return true;
      }
      // 같은 환자 일 때 업데이트 X
      else {
        return false;
      }
    }
    // 이전과 현재 둘 다 측정환자가 없을 때 업데이트 X
    else if (patient.length === 0 && nextState.data.length === 0) {
      return false;
    }
    // 이외 업데이트 (에러 확인)
    else {
      return true;
    }
  }

  // 렌더링 후 setInterval 설정
  componentDidMount() {
    setInterval(() => {
      axios
        .get("http://127.0.0.1/cordia/GetMeasurePatient.php")
        .then(response => {
          this.setState({ ...this.state, data: response.data });
        })
        .catch(error => {
          this.setState({ ...this.state, error: error });
        });
    }, 1000);
  }

  renderPatient = () => {
    const { data: patient, error } = this.state;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!patient || patient.length === 0)
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

  render() {
    return <ListContent>{this.renderPatient()}</ListContent>;
  }
}

export default React.memo(MeasurePatientList);
