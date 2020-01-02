import React from "react";
import IconButton from "../IconButton";
import CloseIcon from "@material-ui/icons/Close";

function CompletedPatientList() {
  return (
    <div>
      <div className="list-header">
        <span>측정 완료</span>
      </div>
      <div className="list-content-wrapper">
        <div className="list-content">
          <div className="list-content__item">
            <div className="list-content__item__cell">대기 번호</div>
            <div className="list-content__item__cell">이름</div>
            <div className="list-content__item__cell">환자 번호</div>
            <div className="list-content__item__cell">
              <IconButton label="close" onClick={() => console.log("close")}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPatientList;
