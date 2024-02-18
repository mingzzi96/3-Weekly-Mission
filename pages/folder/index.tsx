import folderStyles from "@/components/ui/atoms/folder-sorting/FolderSortingList.module.css";
import styles from "./folder.module.css";
import FolderAddIcon from "@/public/assets/images/icons/addIcon.png";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import AddLinkBar from "@/components/ui/atoms/add-link-bar/AddLinkBar";
import FolderSortingItem from "@/components/ui/atoms/folder-sorting/FolderSortingItem";
import SearchBar from "@/components/ui/atoms/search-bar/SearchBar";
import { getFolderData } from "@/api/getFolderData";
import { CardItemTransformed } from "@/types/cardItemType";
import CardList from "@/components/ui/molecules/card-list/CardList";
import { getFolderNameData } from "@/api/getFolderNameData";
import { FolderName } from "@/types/folderNameType";
import FolderSortingList from "@/components/ui/atoms/folder-sorting/FolderSortingList";
import SelectedFolderTitle from "@/components/ui/molecules/card-folder-title/SelectedFolderTitle";
import { useSearchParams } from "next/navigation";
import NoListError from "@/components/ui/atoms/no-list-error/NoListError";
import { NO_LINK_FOUND } from "@/utils/constants";
interface selectedTagInfo {
  selectedTag: string;
  selectedTagId: number | null | undefined;
  cardListTitleEdit: boolean;
}

const Folder: React.FC = () => {
  const [folderName, setFolderName] = useState([]);
  const [folderItem, setFolderItem] = useState<CardItemTransformed[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams ? searchParams.get("searchKeyword") : null;
  const [searchKeyword, setSearchKeyword] = useState(initKeyword || "");
  const [selectedTagInfo, setSelectedTagInfo] = useState<selectedTagInfo>({
    selectedTag: "전체",
    selectedTagId: 0,
    cardListTitleEdit: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const folderData = await getFolderData(searchKeyword);
      setSearchParams(searchKeyword ? { searchKeyword } : {});
      setFolderItem(folderData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleChangeSearchKeyword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(e.target.value);
  };

  const handleDeleteInputClick = () => {
    setSearchKeyword("");
  };

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

  const handleActiveFolderTag = async (
    tagName: string,
    tagId: number | null | undefined
  ) => {
    setSelectedTagInfo((prevSelectedTagInfo) => ({
      ...prevSelectedTagInfo,
      cardListTitleEdit: true,
      selectedTag: tagName,
      selectedTagId: tagId,
    }));

    if (tagName === "전체") {
      setSelectedTagInfo((prevSelectedTagInfo) => ({
        ...prevSelectedTagInfo,
        cardListTitleEdit: false,
      }));
    }

    if (tagId !== undefined || tagId !== null) {
      try {
        const folderData = await getFolderData({
          keyword: initKeyword,
          folderId: tagId,
        });
        setFolderItem(folderData);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      }
    }
  };

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
            onSubmitHandler={handleSubmit}
          />
        </div>
        <div className={styles.sortingArea}>
          <FolderSortingList>
            <li>
              <p
                className={
                  selectedTagInfo.selectedTag === "전체"
                    ? folderStyles.active
                    : ""
                }
                onClick={() => handleActiveFolderTag("전체", null)}
              >
                전체
              </p>
            </li>
            {folderName.map((tag: FolderName) => (
              <li key={tag?.id}>
                <FolderSortingItem
                  folderNameData={tag}
                  selectedTagName={selectedTagInfo.selectedTag}
                  onClickHandler={handleActiveFolderTag}
                />
              </li>
            ))}
          </FolderSortingList>
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
