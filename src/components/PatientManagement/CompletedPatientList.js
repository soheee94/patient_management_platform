import React from "react";
import { MdClose } from "react-icons/md";

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
              <MdClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPatientList;
