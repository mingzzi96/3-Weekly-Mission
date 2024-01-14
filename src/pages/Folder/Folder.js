import "./Folder.css";
import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";
import SortingBar from "@components/SortingBar/SortingBar";
import CardListTitle from "@components/CardListTitle/CardListTitle";
import { useCallback, useEffect, useState } from "react";
import { getFolderData, getFolderNameData } from "@api/api";
import NoListError from "@components/NoListError/NoListError";
import CardList from "@components/CardList/CardList";
import { NO_LINK_FOUND } from "@/constants";
import { DeviceTypeProvider } from "@contexts/WindowSizeDetectContext";

const Folder = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [folderItem, setFolderItem] = useState([]);
  const [folderName, setFolderName] = useState([]);
  const [selectedTagInfo, setSelectedTagInfo] = useState({
    selectedTag: "전체",
    selectedTagId: 0,
    cardListTitleEdit: false,
  });

  const handleActiveListClick = async (tagName, tagId) => {
    const targetTagText = tagName;
    const targetTagId = tagId;

    setSelectedTagInfo((prevSelectedTagInfo) => ({
      ...prevSelectedTagInfo,
      cardListTitleEdit: true,
      selectedTag: targetTagText,
      selectedTagId: targetTagId,
    }));

    if (targetTagText === "전체") {
      setSelectedTagInfo((prevSelectedTagInfo) => ({
        ...prevSelectedTagInfo,
        cardListTitleEdit: false,
      }));
    }

    if (targetTagId !== undefined || targetTagId !== null) {
      try {
        const folderData = await getFolderData(targetTagId);
        setFolderItem(folderData);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const setFolderNameData = useCallback(async () => {
    try {
      const folderList = await getFolderNameData();
      setFolderName(folderList);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  const setFolderData = useCallback(async () => {
    try {
      const folderData = await getFolderData();
      setFolderItem(folderData);
    } catch (error) {
      setErrorMessage(error.message);
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
      <div>
        <FolderAddLinkArea />
      </div>
      <div className="list-max-width" style={{ paddingBottom: `100px` }}>
        <div className="folder-search-bar-area">
          <SearchBar />
        </div>
        <DeviceTypeProvider>
          <SortingBar
            onClickTag={handleActiveListClick}
            tagList={folderName}
            selectedTagName={selectedTagInfo.selectedTag}
          />
        </DeviceTypeProvider>
        <div className="folder-card-list-title-area">
          <CardListTitle
            title={selectedTagInfo.selectedTag}
            editActive={selectedTagInfo.cardListTitleEdit}
            folderId={selectedTagInfo.selectedTagId}
          />
        </div>
        <div>
          {errorMessage ? (
            <NoListError message={errorMessage} />
          ) : folderItem.length > 0 ? (
            <CardList
              items={folderItem}
              isFavoriteExist={true}
              isKebabExist={true}
            />
          ) : (
            <NoListError message={NO_LINK_FOUND} />
          )}
        </div>
      </div>
    </>
  );
};

export default Folder;
