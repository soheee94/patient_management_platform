import React, { useState, useCallback, useEffect } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Modal from "../Modal/Modal";
import ListTitle from "./ListTitle";
import Input from "../Input";
import Button from "../Button";
import ListContent from "./ListContent";
import ListItem from "./ListItem";
import ListItemCell from "./ListItemCell";
import {
  usePatientsState,
  usePatientsDispatch,
  getPatients,
  usePatientId
} from "../../contexts/PatientContext";

function PatientList() {
  const [isSortDown, setSortDown] = useState(false);
  const [modalOpen, setModalOpen] = useState({
    isOpen: false,
    title: ""
  });

  const openModal = useCallback(title => {
    setModalOpen({
      isOpen: true,
      title: title
    });
  }, []);

  const closeModal = useCallback(
    () =>
      setModalOpen({
        ...modalOpen,
        isOpen: false
      }),
    [modalOpen]
  );

  // const [patientId, setPatientId] = useState(null);
  const state = usePatientsState();
  const dispatch = usePatientsDispatch();
  const patientId = usePatientId();
  const { data: patients, loading, error } = state.patients;

  useEffect(() => {
    getPatients(dispatch);
  }, [dispatch]);

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
            <span>최근 측정 일자</span> {isSortDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </ListItemCell>
          <ListItemCell head>등록 일자</ListItemCell>
          <ListItemCell head>이름</ListItemCell>
          <ListItemCell head>환자 번호</ListItemCell>
          <ListItemCell head></ListItemCell>
        </ListItem>
        {loading && <div>로딩중</div>}
        {error && <div>불러오는 중에 에러가 발생하였습니다.</div>}
        {patients &&
          patients.map(patient => (
            <ListItem
              key={patient.PATIENT_ID}
              onClick={() => patientId.setPatientId(patient.PATIENT_ID)}
            >
              <ListItemCell>{patient.PATIENT_ID}</ListItemCell>
              <ListItemCell>{patient.LAST_UPDATE}</ListItemCell>
              <ListItemCell>{patient.NAME}</ListItemCell>
              <ListItemCell>{patient.PATIENT_NUMBER}</ListItemCell>
              <ListItemCell>
                <Button color="darkGray" onClick={() => openModal("환자 수정")}>
                  수정
                </Button>
                <Button color="pink">측정 등록</Button>
              </ListItemCell>
            </ListItem>
          ))}
      </ListContent>
      <Modal isOpen={modalOpen.isOpen} handleClose={closeModal} title={modalOpen.title} />
    </>
  );
}

export default React.memo(PatientList);
