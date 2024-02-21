import { API_BASE_URL, FAIL_TO_LOAD_LIST } from "@/utils/constants";

export const getFolderNameData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/1/folders`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    if (error) {
      throw new Error(`${error} : ${FAIL_TO_LOAD_LIST}`);
    }
  }
};
