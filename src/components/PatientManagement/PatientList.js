import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

function PatientList() {
  const [isSortDown, setSortDown] = useState(false);
  return (
    <>
      <div className="list-header">
        <input type="text" placeholder="검색" id="list-header__search" />
        <button className="common-button common-button--black">환자 추가</button>
      </div>
      <div className="list-content-wrapper">
        <div className="list-content">
          <div className="list-content__header">
            <div className="list-content__header__cell" onClick={() => setSortDown(!isSortDown)}>
              최근 측정 일자 {isSortDown ? <FaSortDown /> : <FaSortUp />}
            </div>
            <div className="list-content__header__cell">등록 일자</div>
            <div className="list-content__header__cell">이름</div>
            <div className="list-content__header__cell">환자 번호</div>
            <div className="list-content__header__cell"></div>
          </div>
          <div className="list-content__item">
            <div className="list-content__item__cell">대기 번호</div>
            <div className="list-content__item__cell">이름</div>
            <div className="list-content__item__cell">환자 번호</div>
            <div className="list-content__item__cell">버튼</div>
            <div className="list-content__item__cell">
              <button className="common-button common-button--darkGray">수정</button>
              <button className="common-button common-button--pink">측정 등록</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientList;
