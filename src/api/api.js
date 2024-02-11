import { FAIL_TO_LOAD_LIST } from "@/constants";
import { API_BASE_URL } from "constants";
import { FAIL_TO_LOAD_USER } from "constants";
import { FAIL_TO_LOAD_SAMPLE_USER } from "constants";
import { filterLinkSearch } from "utils/filterLinkSearch";

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

const getFolderData = async (keyword = null, folderId) => {
  let apiUrl = `${API_BASE_URL}/users/1/links`;

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

  if (!keyword || keyword === null || keyword === "") return transformData;

  return filterLinkSearch(transformData, keyword);
};

export {
  getUserSampleData,
  getUserData,
  getSharedData,
  getFolderData,
  getFolderNameData,
};
