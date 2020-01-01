import React, { useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ModalInput from "./ModalInput";
import { withStyles } from "@material-ui/core/styles";
const ModalContentBlock = withStyles({
  root: {
    width: "100%",
    padding: "0"
  }
})(DialogContent);

const ModalActionsBlock = withStyles({
  root: {
    padding: "15px 15px 30px 15px",
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
  return (
    <ModalContentBlock>
      {/* onSubmit={} */}
      <form autoComplete="off">
        <ModalInput label="이름" placeholder="이름을 입력하세요." type="text" />
        <ModalInput
          label="주민번호"
          placeholder="ex)123456-4567890"
          type="text"
        />
        <ModalInput label="주소" placeholder="주소를 입력하세요." type="text" />
        <ModalInput
          label="핸드폰번호"
          placeholder="ex)01012345678"
          type="text"
        />
        <ModalInput label="환자번호(식별번호)" type="text" />
        <ModalInput
          label="내원경로"
          type="checkbox"
          checkboxes={checkboxes}
          handleChange={handleChange}
        />
        <ModalActionsBlock>
          <button onClick={onClose} className="common-button--black">
            등록
          </button>
        </ModalActionsBlock>
      </form>
    </ModalContentBlock>
  );
}

export default ModalContent;
