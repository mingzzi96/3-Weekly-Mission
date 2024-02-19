import styles from "./folder.module.css";
import FolderAddIcon from "@/public/assets/images/icons/addIcon.png";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import AddLinkBar from "@/components/ui/atoms/add-link-bar/AddLinkBar";
import SearchBar from "@/components/ui/atoms/search-bar/SearchBar";
import { getFolderData } from "@/api/getFolderData";
import { CardItemTransformed } from "@/types/cardItemType";
import CardList from "@/components/ui/molecules/card-list/CardList";
import { getFolderNameData } from "@/api/getFolderNameData";
import FolderSortingList from "@/components/ui/atoms/folder-sorting/FolderSortingList";
import SelectedFolderTitle from "@/components/ui/molecules/card-folder-title/SelectedFolderTitle";
import NoListError from "@/components/ui/atoms/no-list-error/NoListError";
import { NO_LINK_FOUND } from "@/utils/constants";
import { selectedTagInfo } from "@/types/selectedFolderNameInfo";

const Folder = () => {
  const [folderName, setFolderName] = useState([]);
  const [initialFolderItem, setInitialFolderItem] = useState<
    CardItemTransformed[]
  >([]);
  const [folderItem, setFolderItem] = useState<CardItemTransformed[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [selectedTagInfo, setSelectedTagInfo] = useState<selectedTagInfo>({
    selectedTag: "전체",
    selectedTagId: 0,
    cardListTitleEdit: false,
  });

  const setFolderNameData = useCallback(async () => {
    try {
      const folderList = await getFolderNameData();
      setFolderName(folderList);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }, []);

  const setFolderData = useCallback(async () => {
    try {
      const folderData = await getFolderData();
      setInitialFolderItem(folderData);
      setFolderItem(folderData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }, []);

  useEffect(() => {
    setFolderData();
  }, [setFolderData]);

  useEffect(() => {
    setFolderNameData();
  }, [setFolderNameData]);

  return (
    <>
      <div className={styles.linkArea}>
        <AddLinkBar />
      </div>
      <div className={styles.maxWidth}>
        <div className={styles.searchBarArea}>
          <SearchBar
            initialFolderItem={initialFolderItem}
            folderItem={folderItem}
            setFolderItem={setFolderItem}
          />
        </div>
        <div className={styles.sortingArea}>
          <FolderSortingList
            folderName={folderName}
            selectedTagName={selectedTagInfo.selectedTag}
            setFolderItem={setFolderItem}
            setErrorMessage={setErrorMessage}
            setSelectedTagInfo={setSelectedTagInfo}
          />
          <button type="button">
            <span>폴더 추가</span>
            <Image
              src={FolderAddIcon}
              alt="폴더 추가하기 아이콘"
              tabIndex={-1}
            />
          </button>
        </div>
        <div className={styles.cardListFolderTitleArea}>
          <SelectedFolderTitle
            title={selectedTagInfo.selectedTag}
            editActive={selectedTagInfo.cardListTitleEdit}
            folderId={selectedTagInfo.selectedTagId}
          />
        </div>
        <div className={styles.cardListArea}>
          {errorMessage && <NoListError message={errorMessage} />}
          {folderItem.length > 0 ? (
            <CardList folderItem={folderItem} />
          ) : (
            <NoListError message={NO_LINK_FOUND} />
          )}
        </div>
      </div>
    </>
  );
};

export default Folder;
