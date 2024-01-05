import { FAIL_TO_LOAD_LIST } from "../constants";

const getUserData = async () => {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

const getFolderData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_LIST);
  }
  const result = await response.json();
  return result.folder;
};

export { getUserData, getFolderData };
