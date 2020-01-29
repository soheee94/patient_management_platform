import React, { createContext, useContext, useState } from "react";
// 환자 선택 ID Context
export const PatientIdContext = createContext(null);

// Context 감싸는 Provider 컴포넌트
export function PatientIdProvider({ children }) {
  const [patientId, setPatientId] = useState("");

  return (
    <PatientIdContext.Provider value={{ patientId, setPatientId }}>
      {children}
    </PatientIdContext.Provider>
  );
}

// 선택 환자 ID 조회
export function usePatientId() {
  const patientId = useContext(PatientIdContext);
  if (!patientId) {
    throw new Error("Can not find WaitingPatientsProvider");
  }
  return patientId;
}
