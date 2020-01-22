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
import { useWaitingPatientsDispatch, usePatientId } from "../../contexts/PatientContext";
import {
  usePatientsState,
  getPatients,
  usePatientsDispatch
} from "../../contexts/PatientListContext";
import { getBirthday } from "../../common";

const Patient = React.memo(function Patient({ patient, setPatientId, dispatch, openModal }) {
  return (
    <ListItem onClick={() => setPatientId(patient.PATIENT_ID)} id={patient.PATIENT_ID}>
      <ListItemCell>{patient.LAST_UPDATE}</ListItemCell>
      <ListItemCell>{patient.NAME}</ListItemCell>
      <ListItemCell>{patient.SEX}</ListItemCell>
      <ListItemCell>{getBirthday(patient.ID_NUMBER)}</ListItemCell>
      <ListItemCell>{patient.PATIENT_NUMBER}</ListItemCell>
      <ListItemCell>
        <Button color="darkGray" onClick={() => openModal("환자 수정", patient.PATIENT_ID)}>
          수정
        </Button>
        <Button
          color="pink"
          onClick={() =>
            dispatch({
              type: "ADD_WAITING_PATIENT",
              data: {
                PATIENT_ID: patient.PATIENT_ID,
                NAME: patient.NAME,
                SEX: patient.SEX,
                ID_NUMBER: patient.ID_NUMBER
              }
            })
          }
        >
          측정 등록
        </Button>
      </ListItemCell>
    </ListItem>
  );
});

const Patients = React.memo(function PatientItems({ state, dispatch, setPatientId, openModal }) {
  const { data: patients, loading, error, filteredData } = state;
  if (loading) return <div>로딩중</div>;
  if (error) return <div>불러오는 중에 에러가 발생하였습니다.</div>;
  if (filteredData) {
    return filteredData.map(patient => (
      <Patient
        key={patient.PATIENT_ID}
        patient={patient}
        dispatch={dispatch}
        setPatientId={setPatientId}
        openModal={openModal}
      />
    ));
  }
  if (patients) {
    return patients.map(patient => (
      <Patient
        key={patient.PATIENT_ID}
        patient={patient}
        dispatch={dispatch}
        setPatientId={setPatientId}
        openModal={openModal}
      />
    ));
  }
});

function PatientList() {
  const [isSortDown, setSortDown] = useState(false);
  const [modalOpen, setModalOpen] = useState({
    isOpen: false,
    title: ""
  });

  const openModal = useCallback((title, id) => {
    setModalOpen({
      isOpen: true,
      title: title,
      id: id
    });
  }, []);

  const closeModal = useCallback(
    () =>
      setModalOpen({
        ...modalOpen,
        isOpen: false,
        id: ""
      }),
    [modalOpen]
  );

  const { setPatientId } = usePatientId();

  const dispatch = useWaitingPatientsDispatch();
  const patientsState = usePatientsState();
  const patientsDispatch = usePatientsDispatch();
  const search = useCallback(
    e => {
      patientsDispatch({
        type: "SEARCH_PATIENT",
        search: e.target.value
      });
    },
    [patientsDispatch]
  );
  useEffect(() => {
    getPatients(patientsDispatch);
  }, [patientsDispatch]);

  return (
    <>
      {/* 타이틀 */}
      <ListTitle>
        <Input type="text" placeholder="검색" id="list-header__search" onChange={search} />
        <Button color="black" onClick={() => openModal("환자 추가", "")}>
          환자 추가
        </Button>
      </ListTitle>
      {/* 컨텐츠 리스트 */}
      <ListContent>
        <ListItem head>
          <ListItemCell head onClick={() => setSortDown(!isSortDown)}>
            <span>등록 일자</span> {isSortDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </ListItemCell>
          <ListItemCell head>이름</ListItemCell>
          <ListItemCell head>성별</ListItemCell>
          <ListItemCell head>생년월일</ListItemCell>
          <ListItemCell head>환자 번호</ListItemCell>
          <ListItemCell head></ListItemCell>
        </ListItem>
        <Patients
          dispatch={dispatch}
          setPatientId={setPatientId}
          state={patientsState}
          openModal={openModal}
        />
      </ListContent>
      <Modal
        isOpen={modalOpen.isOpen}
        handleClose={closeModal}
        title={modalOpen.title}
        id={modalOpen.id}
      />
    </>
  );
}

export default React.memo(PatientList);
