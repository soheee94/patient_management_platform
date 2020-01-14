import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";
// 요청 상태 관리 : 요청 결과, 로딩 상태, 에러

// 기본 상태
const initialState = {
  patients: {
    loading: false,
    data: null,
    error: null
  },
  patient: {
    loading: false,
    data: null,
    error: null
  }
};

// 로딩 중일 때 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null
};

// 성공 상태 객체
const success = data => ({
  loading: false,
  data,
  error: null
});

// 실패 상태 객체
const error = error => ({
  loading: false,
  data: null,
  error: error
});

// 리듀서
function patientsReducer(state, action) {
  switch (action.type) {
    case "GET_PATIENTS":
      return {
        ...state,
        patients: loadingState
      };
    case "GET_PATIENTS_SUCCESS":
      return {
        ...state,
        patients: success(action.data)
      };
    case "GET_PATIENTS_ERROR":
      return {
        ...state,
        patients: error(action.error)
      };
    case "GET_PATIENT":
      return {
        ...state,
        patient: loadingState
      };
    case "GET_PATIENT_SUCCESS":
      return {
        ...state,
        patient: success(action.data)
      };
    case "GET_PATIENT_ERROR":
      return {
        ...state,
        patient: error(action.error)
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

// STATE 용 Context와 Dispatch용 Context생성
const PatientsStateContext = createContext(null);
const PatientsDispatchContext = createContext(null);

// Context 감싸는 Provider 컴포넌트
export function PatientsProvider({ children }) {
  const [state, dispatch] = useReducer(patientsReducer, initialState);
  return (
    <PatientsStateContext.Provider value={state}>
      <PatientsDispatchContext.Provider value={dispatch}>
        {children}
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

// 전체 환자 가져오기
export async function getPatients(dispatch) {
  dispatch({ type: "GET_PATIENTS" });
  try {
    const response = await axios.get("http://127.0.0.1/php/cordia/GetPatients.php");
    dispatch({ type: "GET_PATIENTS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_PATIENTS_ERROR", error: e });
  }
}

// 선택 환자 정보 가져오기
export async function getPatient(dispatch, id) {
  dispatch({ type: "GET_PATIENT" });
  try {
    const response = await axios.get("http://127.0.0.1/php/cordia/GetPatients.php", {
      params: {
        ID: id
      }
    });
    dispatch({ type: "GET_PATEINT_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_PATIENT_ERROR", error: e });
  }
}
