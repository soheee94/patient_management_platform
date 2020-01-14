import React, { createContext, useReducer, useContext, useState } from "react";
import createAsyncDispatcher, { initialAsyncState, createAsyncHandler } from "./asyncActionUtils";
import * as api from "./api";

const initialState = {
  patients: initialAsyncState,
  patient: initialAsyncState
};

const patientsHandler = createAsyncHandler("GET_PATIENTS", "patients");
const patientHandler = createAsyncHandler("GET_PATIENT", "patient");

// 리듀서
function patientsReducer(state, action) {
  switch (action.type) {
    case "GET_PATIENTS":
    case "GET_PATIENTS_SUCCESS":
    case "GET_PATIENTS_ERROR":
      return patientsHandler(state, action);
    case "GET_PATIENT":
    case "GET_PATIENT_SUCCESS":
    case "GET_PATIENT_ERROR":
      return patientHandler(state, action);
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

// STATE 용 Context와 Dispatch용 Context생성
const PatientsStateContext = createContext(null);
const PatientsDispatchContext = createContext(null);
// 환자 선택 ID Context
export const PatientIdContext = createContext(null);

// Context 감싸는 Provider 컴포넌트
export function PatientsProvider({ children }) {
  const [state, dispatch] = useReducer(patientsReducer, initialState);
  const [patientId, setPatientId] = useState("");
  // const updatePatientId = id => setPatientId(id);

  return (
    <PatientsStateContext.Provider value={state}>
      <PatientsDispatchContext.Provider value={dispatch}>
        <PatientIdContext.Provider value={{ patientId, setPatientId }}>
          {children}
        </PatientIdContext.Provider>
      </PatientsDispatchContext.Provider>
    </PatientsStateContext.Provider>
  );
}

// State 조회
export function usePatientsState() {
  const state = useContext(PatientsStateContext);
  if (!state) {
    throw new Error("Can not find PatientsProvider");
  }
  return state;
}

// dispatch 사용
export function usePatientsDispatch() {
  const dispatch = useContext(PatientsDispatchContext);
  if (!dispatch) {
    throw new Error("Can not find PatientsProvider");
  }
  return dispatch;
}

export function usePatientId() {
  const patientId = useContext(PatientIdContext);
  if (!patientId) {
    throw new Error("Can not find PatientsProvider");
  }
  return patientId;
}

export const getPatients = createAsyncDispatcher("GET_PATIENTS", api.getPatients);
export const getPatient = createAsyncDispatcher("GET_PATIENT", api.getPatient);
