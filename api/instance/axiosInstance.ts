import { API_BASE_URL } from "@/constants/api/api";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 2000,
  timeoutErrorMessage: "요청이 2초 동안 응답이 없어 timeout 처리되었습니다.",
});

export default axiosInstance;
