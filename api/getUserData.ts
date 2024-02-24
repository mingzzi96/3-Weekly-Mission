import { API_BASE_URL } from "@/constants/api/api";

export const getUserData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/1`);

    const result = await response.json();
    return result.data[0];
  } catch (error) {
    if (error) {
      throw new Error(`${error} / User 정보 받아오기 실패하였습니다.`);
    }
  }
};
