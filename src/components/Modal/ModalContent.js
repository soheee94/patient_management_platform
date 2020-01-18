import React, { useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import Button from "../Button";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { usePatientsDispatch } from "../../contexts/PatientListContext";
const ModalContentBlock = withStyles({
  root: {
    width: "100%",
    padding: "0"
  }
})(DialogContent);

const ModalActionsBlock = withStyles({
  root: {
    padding: "30px 15px",
    "& button": {
      width: "100%",
      height: "35px"
    }
  }
})(DialogActions);

function ModalContent({ onClose }) {
  const [checkboxState, setCheckboxState] = useState({
    nearby: false,
    online: false,
    offline: false,
    introduction: false,
    etc: false
  });
  const checkboxes = [
    {
      state: checkboxState.nearby,
      value: "nearby",
      label: "인근거주"
    },
    {
      state: checkboxState.online,
      value: "online",
      label: "온라인(SNS/블로그/어플리케이션 등)"
    },
    {
      state: checkboxState.offline,
      value: "offline",
      label: "오프라인(간판/지면/광고 등)"
    },
    {
      state: checkboxState.introduction,
      value: "introduction",
      label: "지인소개"
    },
    {
      state: checkboxState.etc,
      value: "etc",
      label: "기타"
    }
  ];
  const handleChange = name => event => {
    setCheckboxState({ ...checkboxState, [name]: event.target.checked });
  };

  const [inputs, setInputs] = useState({
    name: "",
    identification: "",
    address: "",
    phone: "",
    number: ""
  });

  const { name, identification, address, phone, number } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const dispatch = usePatientsDispatch();
  const addPatient = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_PATIENT",
      data: {
        PATIENT_NUMBER: number,
        NAME: name,
        SEX: "여성",
        PHONE: phone,
        BIRTHDAY: identification,
        HOSPITAL_ID: "?",
        ADMISSIVE_CH: "0/1/2/3/4"
      }
    });

    onClose();
  };

  return (
    <ModalContentBlock>
      {/* onSubmit={} */}
      <form autoComplete="off">
        <Input
          label="이름"
          placeholder="이름을 입력하세요."
          name="name"
          onChange={onChange}
          value={name}
        />
        <Input
          label="주민번호"
          placeholder="ex)123456-4567890"
          name="identification"
          onChange={onChange}
          value={identification}
        />
        <Input
          label="주소"
          placeholder="주소를 입력하세요."
          name="address"
          onChange={onChange}
          value={address}
        />
        <Input
          label="핸드폰번호"
          placeholder="ex)01012345678"
          onChange={onChange}
          name="phone"
          value={phone}
        />
        <Input
          label="환자번호(식별번호)"
          name="number"
          value={number}
          onChange={onChange}
        />
        <Checkbox
          label="내원경로"
          type="checkbox"
          checkboxes={checkboxes}
          handleChange={handleChange}
        />
        <ModalActionsBlock>
          <Button onClick={addPatient} color="black">
            등록
          </Button>
        </ModalActionsBlock>
      </form>
    </ModalContentBlock>
  );
}

export default React.memo(ModalContent);
