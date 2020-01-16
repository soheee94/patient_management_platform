import React, { createContext, useReducer, useContext, useState } from "react";
import createAsyncDispatcher, { initialAsyncState, createAsyncHandler } from "./asyncActionUtils";
import * as api from "./api";

const initialState = {
  // patients: initialAsyncState,
  waitingPatients: initialAsyncState
};

// const patientsHandler = createAsyncHandler("GET_PATIENTS", "patients");
const measurePatientsHandler = createAsyncHandler("GET_WAITING_PATIENTS", "waitingPatients");

// 리듀서
function patientsReducer(state, action) {
  switch (action.type) {
    // case "GET_PATIENTS":
    // case "GET_PATIENTS_SUCCESS":
    // case "GET_PATIENTS_ERROR":
    //   return patientsHandler(state, action);
    case "GET_WAITING_PATIENTS":
    case "GET_WAITING_PATIENTS_SUCCESS":
    case "GET_WAITING_PATIENTS_ERROR":
      return measurePatientsHandler(state, action);
    case "ADD_WAITING_PATIENT":
      return {
        ...state,
        waitingPatients: {
          data: state.waitingPatients.data.concat(action.data)
        }
      };
    case "DELETE_WAITING_PATIENT":
      return {
        ...state,
        waitingPatients: {
          data: state.waitingPatients.data.filter(data => data.QUEUE_ID !== action.id)
        }
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

// STATE 용 Context와 Dispatch용 Context생성
// const PatientsStateContext = createContext(null);
const WaitingPatientsStateContext = createContext(null);
const WaitingPatientsDispatchContext = createContext(null);
// 환자 선택 ID Context
export const PatientIdContext = createContext(null);

// Context 감싸는 Provider 컴포넌트
export function PatientsProvider({ children }) {
  const [state, dispatch] = useReducer(patientsReducer, initialState);
  const [patientId, setPatientId] = useState("");

  return (
    <WaitingPatientsStateContext.Provider value={state.waitingPatients}>
      <WaitingPatientsDispatchContext.Provider value={dispatch}>
        <PatientIdContext.Provider value={{ patientId, setPatientId }}>
          {children}
        </PatientIdContext.Provider>
      </WaitingPatientsDispatchContext.Provider>
    </WaitingPatientsStateContext.Provider>
  );
}

export function WaitingPatientsProvider({ children }) {}

// State 조회
// export function usePatientsState() {
//   const state = useContext(PatientsStateContext);
//   if (!state) {
//     throw new Error("Can not find PatientsProvider");
//   }
//   return state;
// }

export function useWaitingPatientsState() {
  const state = useContext(WaitingPatientsStateContext);
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

export function usePatientId() {
  const patientId = useContext(PatientIdContext);
  if (!patientId) {
    throw new Error("Can not find PatientsProvider");
  }
  return patientId;
}

// export const getPatients = createAsyncDispatcher("GET_PATIENTS", api.getPatients);
export const getWaitingPatients = createAsyncDispatcher(
  "GET_WAITING_PATIENTS",
  api.getWaitingPatients
);
