import { FAIL_TO_LOAD_LIST } from "@/constants";
import { API_BASE_URL } from "@/constants";
import { FAIL_TO_LOAD_USER } from "constants";
import { FAIL_TO_LOAD_SAMPLE_USER } from "constants";

const getUserSampleData = async () => {
  const response = await fetch(`${API_BASE_URL}/sample/user`);

  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_SAMPLE_USER);
  }

  const result = await response.json();

  return result;
};

const getUserData = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1`);

  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_USER);
  }

  const result = await response.json();
  return result.data[0];
};

const getSharedData = async () => {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_LIST);
  }
  const result = await response.json();
  return result.folder;
};

const getFolderNameData = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_LIST);
  }
  const result = await response.json();
  return result.data;
};

const getFolderData = async (folderId) => {
  let apiUrl = `${API_BASE_URL}/users/1/linksㄴㄴㄴ`;

  if (folderId) {
    apiUrl += `?folderId=${folderId}`;
  }

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_LIST);
  }
  const result = await response.json();

  const transformData = result.data.map((item) => ({
    id: item.id,
    createdAt: item.created_at,
    imageSource: item.image_source,
    description: item.description,
    url: item.url,
    title: item.title,
    folderId: item.folder_id,
    updatedAt: item.updated_at,
  }));

  return transformData;
};

export {
  getUserSampleData,
  getUserData,
  getSharedData,
  getFolderData,
  getFolderNameData,
};
