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
  useWaitingPatientsDispatch,
  usePatientId
} from "../../contexts/PatientContext";

import {
  usePatientsState,
  getPatients,
  usePatientsDispatch
} from "../../contexts/PatientListContext";

const Patient = React.memo(function Patient({
  patient,
  setPatientId,
  dispatch
}) {
  return (
    <ListItem
      onClick={() => setPatientId(patient.PATIENT_ID)}
      id={patient.PATIENT_ID}
    >
      <ListItemCell>{patient.PHONE}</ListItemCell>
      <ListItemCell>{patient.LAST_UPDATE}</ListItemCell>
      <ListItemCell>{patient.NAME}</ListItemCell>
      <ListItemCell>{patient.PATIENT_NUMBER}</ListItemCell>
      <ListItemCell>
        <Button color="darkGray" onClick={() => console.log("환자 수정")}>
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
                BIRTHDAY: patient.BIRTHDAY
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

const Patients = React.memo(function PatientItems({
  state,
  dispatch,
  setPatientId,
  selectedPatientId
}) {
  const { data: patients, loading, error } = state;
  if (loading) return <div>로딩중</div>;
  if (error) return <div>불러오는 중에 에러가 발생하였습니다.</div>;
  if (patients) {
    return patients.map(patient => (
      <Patient
        key={patient.PATIENT_ID}
        patient={patient}
        dispatch={dispatch}
        setPatientId={setPatientId}
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

  const { setPatientId } = usePatientId();

  const dispatch = useWaitingPatientsDispatch();
  const patientsState = usePatientsState();
  const patientsDispatch = usePatientsDispatch();

  useEffect(() => {
    getPatients(patientsDispatch);
  }, [patientsDispatch]);

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
        <Patients
          dispatch={dispatch}
          setPatientId={setPatientId}
          state={patientsState}
        />
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
