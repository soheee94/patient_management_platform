import axios from "axios";

// 전체 환자 가져오기
export async function getPatients() {
  const response = await axios.get("http://127.0.0.1/cordia/GetPatients.php");
  return response.data;
}

// 선택 환자 정보 가져오기
export async function getPatient(id) {
  const response = await axios.get("http://127.0.0.1/cordia/GetPatient.php", {
    params: {
      ID: id
    }
  });
  return response.data;
}

// 선택 환자의 측정 정보 가져오기
export async function getPatientMeasurementList(id) {
  const response = await axios.get("http://127.0.0.1/cordia/GetPatientMeasurementList.php", {
    params: {
      ID: id
    }
  });
  return response.data;
}

// 측정 환자 가져오기
export async function getMeasurePatient() {
  const response = await axios.get("http://127.0.0.1/cordia/GetMeasurePatient.php");
  return response.data;
}

// 대기 환자 리스트 가져오기
export async function getWaitingPatients() {
  const response = await axios.get("http://127.0.0.1/cordia/GetWaitingPatientList.php");
  return response.data;
}

// 대기 환자 등록
export async function PostWaitingPatient(data) {
  let form = new FormData();
  form.append("QUEUE_ID", data.QUEUE_ID);
  form.append("PATIENT_ID", data.PATIENT_ID);
  form.append("PRIORITY", data.PRIORITY);
  const response = await axios.post("http://127.0.0.1/cordia/AddWaitingPatient.php", form);
  return response.data;
}

// 대기 환자 삭제
export async function DeleteWaitingPatient(QUEUE_ID) {
  let form = new FormData();
  form.append("QUEUE_ID", QUEUE_ID);
  const response = await axios.post("http://127.0.0.1/cordia/DeleteWaitingPatient.php", form);
  return response.data;
}

// 환자 추가
export async function AddPatient(data) {
  let form = new FormData();
  form.append("PATIENT_ID", data.PATIENT_ID);
  form.append("LAST_UPDATE", data.LAST_UPDATE);
  form.append("PATIENT_NUMBER", data.PATIENT_NUMBER);
  form.append("NAME", data.NAME);
  form.append("SEX", data.SEX);
  form.append("PHONE", data.PHONE);
  form.append("ID_NUMBER", data.ID_NUMBER);
  form.append("ADMISSIVE_CH", data.ADMISSIVE_CH);
  form.append("ADDRESS", data.ADDRESS);
  const response = await axios.post("http://127.0.0.1/cordia/AddPatient.php", form);
  return response.data;
}
// 환자 수정
export async function UpdatePatient(data) {
  let form = new FormData();
  form.append("PATIENT_ID", data.PATIENT_ID);
  form.append("LAST_UPDATE", data.LAST_UPDATE);
  form.append("PATIENT_NUMBER", data.PATIENT_NUMBER);
  form.append("NAME", data.NAME);
  form.append("SEX", data.SEX);
  form.append("PHONE", data.PHONE);
  form.append("ID_NUMBER", data.ID_NUMBER);
  form.append("ADMISSIVE_CH", data.ADMISSIVE_CH);
  form.append("ADDRESS", data.ADDRESS);
  const response = await axios.post("http://127.0.0.1/cordia/UpdatePatient.php", form);
  return response.data;
}
// 환자 삭제
export async function DeletePatient(id) {
  let form = new FormData();
  form.append("PATIENT_ID", id);
  const response = await axios.post("http://127.0.0.1/cordia/DeletePatient.php", form);
  return response.data;
}
