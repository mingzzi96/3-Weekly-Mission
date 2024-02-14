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
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Folder = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [folderItem, setFolderItem] = useState([]);
  const [folderName, setFolderName] = useState([]);
  const [selectedTagInfo, setSelectedTagInfo] = useState({
    selectedTag: "전체",
    selectedTagId: 0,
    cardListTitleEdit: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("searchKeyword");
  const [searchKeyword, setSearchKeyword] = useState(initKeyword || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const folderData = await getFolderData(searchKeyword);
      setSearchParams(searchKeyword ? { searchKeyword } : {});
      setFolderItem(folderData);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleDeleteInputClick = () => {
    setFolderData();
    setSearchKeyword("");
    setSearchParams("");
  };

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
        const folderData = await getFolderData(initKeyword, targetTagId);
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
          <SearchBar
            placeholder="링크를 검색해 보세요."
            value={searchKeyword}
            onSubmitHandler={handleSubmit}
            onChangeHandler={handleChangeSearchKeyword}
            onClickHandler={handleDeleteInputClick}
          />
        </div>
        {initKeyword ? (
          <StSearchInfoBox>
            <h3>{initKeyword}</h3>
            <h4>으로 검색한 결과입니다.</h4>
          </StSearchInfoBox>
        ) : null}
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

const StSearchInfoBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 40px;

  h3 {
    color: ${({ theme }) => theme.color.Black};
  }

  h4 {
    color: ${({ theme }) => theme.color.Gray[60]};
  }

  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
`;
