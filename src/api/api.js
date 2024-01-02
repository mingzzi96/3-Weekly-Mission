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
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

export { getUserData, getFolderData };
