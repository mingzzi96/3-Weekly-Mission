import "./Folder.css";
import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";
import SortingBar from "@components/SortingBar/SortingBar";
import CardListTitle from "@components/CardListTitle/CardListTitle";
import { useCallback, useEffect, useState } from "react";
import { getFolderData } from "../../api/api";
import NoListError from "../../components/NoListError/NoListError";
import CardList from "../../components/CardList/CardList";
import { NO_LINK_FOUND } from "@/constants";

const Folder = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [folderItem, setFolderItem] = useState([]);
  const tagArray = [
    "전체",
    "⭐️ 즐겨찾기",
    "코딩 팁",
    "채용 사이트",
    "유용한 글",
    "나만의 장소",
  ];
  const [cardListTitle, setCardListTitle] = useState("전체");
  const [cardListTitleEdit, setCardListTitleEdit] = useState(false);

  const handleActiveListClick = (e) => {
    const everyTagLi = document.querySelectorAll(".sorting-group ul li");
    const targetTag = e.target;
    const targetTagLi = targetTag.closest("li");
    const targetTagText = targetTagLi.getAttribute("data-tag");

    setCardListTitleEdit(true);

    everyTagLi.forEach((item) => {
      item.classList.remove("active");
    });

    targetTagLi.classList.add("active");
    setCardListTitle(targetTagText);

    if (targetTagText === "전체") {
      setCardListTitleEdit(false);
    }
  };

  const setFirstActiveTag = () => {
    // 최초 렌더링시 "전체" 태그 active
    const allTagLi = document.querySelector(
      ".sorting-group ul li[data-tag='전체']"
    );
    if (allTagLi) {
      allTagLi.classList.add("active");
    }
  };
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
  }, [setFolderData]);

  return (
    <>
      <div>
        <FolderAddLinkArea />
      </div>
      <div className="list-max-width" style={{ paddingBottom: `100px` }}>
        <div className="folder-search-bar-area">
          <SearchBar />
        </div>
        <div>
          <SortingBar onClick={handleActiveListClick} tagList={tagArray} />
        </div>
        <div className="folder-card-list-title-area">
          <CardListTitle title={cardListTitle} editActive={cardListTitleEdit} />
        </div>
        <div>
          {errorMessage ? (
            <NoListError message={errorMessage} />
          ) : folderItem.length > 0 ? (
            <CardList items={folderItem} />
          ) : (
            <NoListError message={NO_LINK_FOUND} />
          )}
        </div>
      </div>
    </>
  );
};

export default Folder;
