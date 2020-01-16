import axios from "axios";
// 전체 환자 가져오기
export async function getPatients() {
  const response = await axios.get("http://127.0.0.1/cordia/GetPatients.php");
  return response.data;
}

// 선택 환자 정보 가져오기
export async function getPatient(id) {
  const response = await axios.get("http://127.0.0.1/cordia/GetPatients.php", {
    params: {
      ID: id
    }
  });
  return response.data;
}

// 대기 환자 리스트 가져오기
export async function getWaitingPatients() {
  const response = await axios.get("http://127.0.0.1/cordia/GetWaitingPatientList.php");
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

// 대기 환자 등록
export async function PostWaitingPatient(data) {
  let form = new FormData();
  form.append("QUEUE_ID", data.QUEUE_ID);
  form.append("PATIENT_ID", data.PATIENT_ID);
  form.append("PRIORITY", data.PRIORITY);
  const response = await axios.post("http://127.0.0.1/cordia/PostWaitingPatient.php", form);
  return response.data;
}
