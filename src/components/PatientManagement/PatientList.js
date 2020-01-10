import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Modal from "../Modal/Modal";
import ListTitle from "./ListTitle";
import Input from "../Input";
import Button from "../Button";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";

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
      {/* 타이틀 */}
      <ListTitle>
        <Input type="text" placeholder="검색" id="list-header__search" />
        <Button color="black" onClick={() => openModal("환자 추가")}>
          환자 추가
        </Button>
      </ListTitle>
      {/* 컨텐츠 리스트 */}
      <ListContent>
        <ListItem head>
          <ListItemCell head onClick={() => setSortDown(!isSortDown)}>
            <span>최근 측정 일자</span>{" "}
            {isSortDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </ListItemCell>
          <ListItemCell head>등록 일자</ListItemCell>
          <ListItemCell head>이름</ListItemCell>
          <ListItemCell head>환자 번호</ListItemCell>
          <ListItemCell head></ListItemCell>
        </ListItem>
        <ListItem>
          <ListItemCell>대기 번호</ListItemCell>
          <ListItemCell>이름</ListItemCell>
          <ListItemCell>환자 번호</ListItemCell>
          <ListItemCell>버튼</ListItemCell>
          <ListItemCell>
            <Button color="darkGray" onClick={() => openModal("환자 수정")}>
              수정
            </Button>
            <Button color="pink">측정 등록</Button>
          </ListItemCell>
        </ListItem>
      </ListContent>
      <Modal
        isOpen={modalOpen.isOpen}
        handleClose={closeModal}
        title={modalOpen.title}
      />
    </>
  );
}

export default React.memo(PatientList);
