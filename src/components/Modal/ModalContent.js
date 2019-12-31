import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import ModalInput from "./ModalInput";
import { withStyles } from "@material-ui/core/styles";
const ModalContentBlock = withStyles({
  root: {
    width: "100%",
    padding: "30px 0"
  }
})(DialogContent);

function ModalContent() {
  return (
    <ModalContentBlock>
      {/* onSubmit={} */}
      <form autoComplete="off">
        <ModalInput label="이름" placeholder="이름을 입력하세요." />
        <ModalInput label="주민번호" placeholder="ex)123456-4567890" />
        <ModalInput label="주소" placeholder="주소를 입력하세요." />
        <ModalInput label="핸드폰번호" placeholder="ex)01012345678" />
        <ModalInput label="환자번호(식별번호)" placeholder="" />
      </form>
    </ModalContentBlock>
  );
}

export default ModalContent;
