import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Modal from "../Modal/Modal";
import ListTitle from "./ListTitle";
import Input from "../Input";
import Button from "../Button";

function PatientList() {
  const [isSortDown, setSortDown] = useState(false);
  const [modalOpen, setModalOpen] = useState({
    isOpen: false,
    title: ""
  });

  const openModal = title => {
    setModalOpen({
      isOpen: true,
      title: title
    });
  };
  const closeModal = () =>
    setModalOpen({
      ...modalOpen,
      isOpen: false
    });

  return (
    <>
      <ListTitle>
        <Input type="text" placeholder="검색" id="list-header__search" />
        <Button color="black" onClick={() => openModal("환자 추가")}>
          환자 추가
        </Button>
      </ListTitle>
      <div className="list-content-wrapper">
        <div className="list-content">
          <div className="list-content__header">
            <div className="list-content__header__cell" onClick={() => setSortDown(!isSortDown)}>
              <span>최근 측정 일자</span> {isSortDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
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
              <button
                className="common-button common-button--darkGray"
                onClick={() => openModal("환자 수정")}
              >
                수정
              </button>
              <button className="common-button common-button--pink">측정 등록</button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen.isOpen} handleClose={closeModal} title={modalOpen.title} />
    </>
  );
}

export default React.memo(PatientList);
