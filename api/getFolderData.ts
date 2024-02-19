import { CardItem } from "@/types/cardItemType";
import { API_BASE_URL, FAIL_TO_LOAD_LIST } from "@/utils/constants";
import { filterLinkSearch } from "@/utils/search/filterLinkSearch";

interface folderData {
  keyword?: string;
  folderId?: number;
}

export const getFolderData = async ({ keyword, folderId }: folderData = {}) => {
  let apiUrl = `${API_BASE_URL}/users/1/links`;

  if (folderId) {
    apiUrl += `?folderId=${folderId}`;
  }

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(FAIL_TO_LOAD_LIST);
  }
  const result = await response.json();

  const transformData = result.data.map((item: CardItem) => ({
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
