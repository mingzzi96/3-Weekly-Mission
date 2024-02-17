import styles from "./folder.module.css";
import FolderAddIcon from "@/public/assets/images/icons/addIcon.png";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import AddLinkBar from "@/components/ui/atoms/add-link-bar/AddLinkBar";
import FolderSortingItem from "@/components/ui/atoms/folder-sorting-item/FolderSortingItem";
import SearchBar from "@/components/ui/atoms/search-bar/SearchBar";
import { getFolderData } from "@/api/getFolderData";
import { CardItemTransformed } from "@/types/cardItemType";
import CardList from "@/components/ui/molecules/card-list/CardList";

const Folder: React.FC = () => {
  const [folderItem, setFolderItem] = useState<CardItemTransformed[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleDeleteInputClick = () => {
    setSearchKeyword("");
  };

  const setFolderData = useCallback(async () => {
    try {
      const folderData = await getFolderData();
      setFolderItem(folderData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An error occurred.");
      }
    }
  }, []);

  useEffect(() => {
    setFolderData();
  }, [setFolderData]);

  console.log(folderItem);

  return (
    <>
      <div className={styles.linkArea}>
        <AddLinkBar />
      </div>
      <div className={styles.maxWidth}>
        <div className={styles.searchBarArea}>
          <SearchBar
            value={searchKeyword}
            onChangeHandler={handleChangeSearchKeyword}
            onClickHandler={handleDeleteInputClick}
          />
        </div>
        <div className={styles.sortingArea}>
          <div className={styles.folderSortingBox}>
            <FolderSortingItem folderName="강아지" />
            <FolderSortingItem folderName="Elephant" />
            <FolderSortingItem folderName="wow" />
            <FolderSortingItem folderName="오징어 볶음" />
          </div>
          <button type="button">
            <span>폴더 추가</span>
            <Image
              src={FolderAddIcon}
              alt="폴더 추가하기 아이콘"
              tabIndex={-1}
            />
          </button>
        </div>
        <div className={styles.cardListArea}>
          <CardList folderItem={folderItem} />
        </div>
      </div>
    </>
  );
};

export default Folder;
