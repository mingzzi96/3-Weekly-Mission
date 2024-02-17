import { API_BASE_URL } from "@/utils/constants";

export const getUserData = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1`);

  if (!response.ok) {
    throw new Error("User 정보 받아오기 실패");
  }

  const result = await response.json();
  return result.data[0];
};
