import React, { createContext, useReducer, useContext, useState } from "react";
import createAsyncDispatcher, { initialAsyncState, createAsyncHandler } from "./asyncActionUtils";
import * as api from "./api";

// 전역 Context -> waitingPatients, patientId

const waitingPatientsState = initialAsyncState;

const measurePatientsHandler = createAsyncHandler("GET_WAITING_PATIENTS");

// 리듀서
function patientsReducer(state, action) {
  switch (action.type) {
    case "GET_WAITING_PATIENTS":
    case "GET_WAITING_PATIENTS_SUCCESS":
    case "GET_WAITING_PATIENTS_ERROR":
      return measurePatientsHandler(state, action);
    case "ADD_WAITING_PATIENT":
      // TODO 대기열 PHP 수정
      // CREATE HASH, PRORITY
      return {
        ...state,
        data: state.data.concat(action.data)
      };
    case "DELETE_WAITING_PATIENT":
      // TODO 대기열 PHP 수정
      return {
        ...state,
        data: state.data.filter(data => data.QUEUE_ID !== action.id)
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

// STATE 용 Context와 Dispatch용 Context생성
const WaitingPatientsStateContext = createContext(null);
const WaitingPatientsDispatchContext = createContext(null);
// 환자 선택 ID Context
export const PatientIdContext = createContext(null);

// Context 감싸는 Provider 컴포넌트
export function PatientsProvider({ children }) {
  const [state, dispatch] = useReducer(patientsReducer, waitingPatientsState);
  const [patientId, setPatientId] = useState("");

  return (
    <WaitingPatientsStateContext.Provider value={state}>
      <WaitingPatientsDispatchContext.Provider value={dispatch}>
        <PatientIdContext.Provider value={{ patientId, setPatientId }}>
          {children}
        </PatientIdContext.Provider>
      </WaitingPatientsDispatchContext.Provider>
    </WaitingPatientsStateContext.Provider>
  );
}

// state 조회
export function useWaitingPatientsState() {
  const state = useContext(WaitingPatientsStateContext);
  console.log(state);
  if (!state) {
    throw new Error("Can not find PatientsProvider");
  }
  return state;
}

// dispatch 사용
export function useWaitingPatientsDispatch() {
  const dispatch = useContext(WaitingPatientsDispatchContext);
  if (!dispatch) {
    throw new Error("Can not find PatientsProvider");
  }
  return dispatch;
}
// 선택 환자 ID 조회
export function usePatientId() {
  const patientId = useContext(PatientIdContext);
  if (!patientId) {
    throw new Error("Can not find PatientsProvider");
  }
  return patientId;
}

export const getWaitingPatients = createAsyncDispatcher(
  "GET_WAITING_PATIENTS",
  api.getWaitingPatients
);
