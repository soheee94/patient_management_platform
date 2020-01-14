import axios from "axios";
// 전체 환자 가져오기
export async function getPatients() {
  const response = await axios.get("http://127.0.0.1/php/cordia/GetPatients.php");
  return response.data;
}

// 선택 환자 정보 가져오기
export async function getPatient(id) {
  const response = await axios.get("http://127.0.0.1/php/cordia/GetPatients.php", {
    params: {
      ID: id
    }
  });
  return response.data;
}
