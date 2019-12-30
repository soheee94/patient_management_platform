import React from "react";
import { MdClose } from "react-icons/md";

function WaitingPatientList() {
  return (
    <div>
      <div className="list-header">
        <span>대기 환자</span>
      </div>
      <div className="list-content-wrapper">
        <div className="list-content">
          <div className="list-content__header">
            <div className="list-content__header__cell">대기 번호</div>
            <div className="list-content__header__cell">이름</div>
            <div className="list-content__header__cell">환자 번호</div>
            <div className="list-content__header__cell"></div>
          </div>
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

export default WaitingPatientList;
