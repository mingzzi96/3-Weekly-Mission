import "./Folder.css";
import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";
import SortingBar from "@components/SortingBar/SortingBar";
import CardListTitle from "@components/CardListTitle/CardListTitle";
import { useCallback, useEffect, useState } from "react";
import { getFolderData, getFolderNameData } from "../../api/api";
import NoListError from "../../components/NoListError/NoListError";
import CardList from "../../components/CardList/CardList";
import { NO_LINK_FOUND } from "@/constants";
import { DeviceTypeProvider } from "../../contexts/WindowSizeDetectContext";

const Folder = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [folderItem, setFolderItem] = useState([]);
  const [folderName, setFolderName] = useState([]);
  const [cardListTitle, setCardListTitle] = useState("전체");
  const [cardListTitleEdit, setCardListTitleEdit] = useState(false);

  const handleActiveListClick = async (e) => {
    const everyTagLi = document.querySelectorAll(".sorting-group ul li");
    const targetTag = e.target;
    const targetTagLi = targetTag.closest("li");
    const targetTagText = targetTagLi.getAttribute("data-tag");
    const targetTagId = targetTagLi.getAttribute("data-id");

    setCardListTitleEdit(true);

    everyTagLi.forEach((item) => {
      item.classList.remove("active");
    });

    targetTagLi.classList.add("active");
    setCardListTitle(targetTagText);

    if (targetTagText === "전체") {
      setCardListTitleEdit(false);
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

  const setFirstActiveTag = () => {
    const allTagLi = document.querySelector(
      ".sorting-group ul li[data-tag='전체']"
    );
    if (allTagLi) {
      allTagLi.classList.add("active");
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
    setFirstActiveTag();
    setFolderData();
    setFolderNameData();
  }, [setFolderData, setFolderNameData]);

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
          <SortingBar onClick={handleActiveListClick} tagList={folderName} />
        </DeviceTypeProvider>
        <div className="folder-card-list-title-area">
          <CardListTitle title={cardListTitle} editActive={cardListTitleEdit} />
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
