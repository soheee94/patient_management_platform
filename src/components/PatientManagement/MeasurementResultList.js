import React from "react";
import logo_big from "../../assets/logo_big.png";

function MeasurementResultList() {
  return (
    <>
      <div className="list-header list-header--end">
        <button className="common-button common-button--pink">측정 결과</button>
      </div>
      <div className="list-content-background">
        <img src={logo_big} alt="배경 로고" />
      </div>
      {/* <div className="list-content-wrapper">
        <div className="list-content">
          <div className="list-content__item">
            <div className="list-content__item__cell">대기 번호</div>
            <div className="list-content__item__cell">이름</div>
            <div className="list-content__item__cell">환자 번호</div>
            <div className="list-content__item__cell">버튼</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default MeasurementResultList;
