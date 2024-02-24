import { API_BASE_URL } from "@/constants/api/api";
import { FAIL_TO_LOAD_LIST } from "@/constants/messages/error";
import { CardItem } from "@/types/cardItemType";
import { filterLinkSearch } from "@/utils/search/filterLinkSearch";

interface folderData {
  folderId?: number;
}

export const getFolderData = async ({ folderId }: folderData = {}) => {
  try {
    let apiUrl = `${API_BASE_URL}/users/1/links`;

    if (folderId) {
      apiUrl += `?folderId=${folderId}`;
    }

    const response = await fetch(apiUrl);

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

    return transformData;
  } catch (error) {
    if (error) {
      throw new Error(`${error} : ${FAIL_TO_LOAD_LIST}`);
    }
  }
};
