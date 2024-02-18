import { API_BASE_URL, FAIL_TO_LOAD_LIST } from "@/utils/constants";

export const getFolderNameData = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_LIST);
  }
  const result = await response.json();
  return result.data;
};
