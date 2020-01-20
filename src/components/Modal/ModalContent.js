import React, { useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import Button from "../Button";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { usePatientsDispatch } from "../../contexts/PatientListContext";
import { now } from "../../common";

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
    name: { value: "", error: false, regex: "" },
    id_number: {
      value: "",
      error: false,
      regex: /(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4]{1}[0-9]{6}\b/gi
    },
    address: { value: "", error: false, regex: "" },
    phone: { value: "", error: false, regex: /\d{2,3}\d{3,4}\d{4}/gi },
    number: { value: "", error: false, regex: "" }
  });

  const { name, id_number, address, phone, number } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: {
        ...inputs[name],
        value: value,
        error: !value.match(inputs[name]["regex"]) || !(value.length > 1)
      }
    });
  };

  const dispatch = usePatientsDispatch();
  const addPatient = e => {
    console.log(checkboxState);
    e.preventDefault();
    if (
      Object.values(inputs).filter(function(input) {
        return input.error === true;
      }).length > 0
    ) {
      alert("error!");
    } else {
      dispatch({
        type: "ADD_PATIENT",
        data: {
          PATIENT_NUMBER: number.value,
          NAME: name.value,
          SEX: parseInt(id_number.value.split("-")[1].slice(0, 1)) % 2 === 1 ? "남성" : "여성",
          PHONE: phone.value,
          ID_NUMBER: id_number.value,
          ADMISSIVE_CH: "0/1/2/3/4",
          LAST_UPDATE: now()
        }
      });
      onClose();
    }
  };

  return (
    <ModalContentBlock>
      {/* onSubmit={} */}
      <form autoComplete="off" onSubmit={addPatient}>
        <Input
          label="이름"
          placeholder="이름을 입력하세요."
          name="name"
          onChange={onChange}
          value={name.value}
          error={name.error}
          required
        />
        <Input
          label="주민번호"
          placeholder="ex)123456-4567890"
          name="id_number"
          onChange={onChange}
          value={id_number.value}
          error={id_number.error}
          required
        />
        <Input
          label="주소"
          placeholder="주소를 입력하세요."
          name="address"
          onChange={onChange}
          value={address.value}
          error={address.error}
          required
        />
        <Input
          label="핸드폰번호"
          placeholder="ex)01012345678"
          onChange={onChange}
          name="phone"
          value={phone.value}
          error={phone.error}
          required
        />
        <Input
          label="환자번호(식별번호)"
          name="number"
          value={number.value}
          onChange={onChange}
          error={number.error}
          required
        />
        <Checkbox
          label="내원경로"
          type="checkbox"
          checkboxes={checkboxes}
          handleChange={handleChange}
        />
        <ModalActionsBlock>
          <Button color="black" type="submit">
            등록
          </Button>
        </ModalActionsBlock>
      </form>
    </ModalContentBlock>
  );
}

export default React.memo(ModalContent);
