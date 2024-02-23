import { getFolderData } from "@/api/getFolderData";
import styles from "./FolderSortingList.module.css";
import folderStyles from "@/components/ui/atoms/folder-sorting/FolderSortingList.module.css";
import { CardItemTransformed } from "@/types/cardItemType";
import { FolderName } from "@/types/folderNameType";
import { selectedTagInfo } from "@/types/selectedFolderNameInfo";
import { Dispatch, SetStateAction } from "react";

interface FolderSortingList {
  folderName: FolderName[];
  selectedTagName: string;
  setFolderItem: Dispatch<SetStateAction<CardItemTransformed[]>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSelectedTagInfo: Dispatch<SetStateAction<selectedTagInfo>>;
}
const FolderSortingList = ({
  folderName,
  selectedTagName,
  setFolderItem,
  setSelectedTagInfo,
  setErrorMessage,
}: FolderSortingList) => {
  const handleActiveFolderTag = async (tagName?: string, tagId?: number) => {
    const newSelectedTagInfo: selectedTagInfo = {
      cardListTitleEdit: true,
      selectedTag: tagName,
      selectedTagId: tagId,
    };

    setSelectedTagInfo((prevSelectedTagInfo) => ({
      ...prevSelectedTagInfo,
      ...newSelectedTagInfo,
    }));

    if (tagName === "전체") {
      setSelectedTagInfo((prevSelectedTagInfo) => ({
        ...prevSelectedTagInfo,
        cardListTitleEdit: false,
      }));
    }

    try {
      const folderData = await getFolderData({
        folderId: tagId,
      });
      setFolderItem(folderData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <ul className={styles.folderSortingBox}>
      <li>
        <p
          className={selectedTagName === "전체" ? folderStyles.active : ""}
          onClick={() => handleActiveFolderTag("전체")}
        >
          전체
        </p>
      </li>
      {folderName.map((tag) => (
        <li key={tag?.id}>
          <p
            onClick={() => handleActiveFolderTag(tag.name, tag?.id)}
            className={selectedTagName === tag.name ? folderStyles.active : ""}
          >
            {tag.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FolderSortingList;
