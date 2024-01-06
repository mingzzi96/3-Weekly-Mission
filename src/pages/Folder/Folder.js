import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";
import SortingBar from "@components/SortingBar/SortingBar";
import CardListTitle from "@components/CardListTitle/CardListTitle";
import "./Folder.css";
import { useState } from "react";

const everyTagLi = document.querySelectorAll(".sorting-group ul li");

const Folder = () => {
  const [cardListTitle, setCardListTitle] = useState("전체");
  const handleActiveListClick = (e) => {
    const targetTag = e.target;
    const targetTagLi = targetTag.closest("li");
    const targetTagText = targetTagLi.getAttribute("data-tag");
    everyTagLi.forEach(function (e) {
      e.classList.remove("active");
    });
    targetTagLi.classList.add("active");
    setCardListTitle(targetTagText);
  };

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
          <SortingBar onClick={handleActiveListClick} />
        </div>
        <div className="folder-card-list-title-area">
          <CardListTitle title={cardListTitle} />
        </div>
      </div>
    </>
  );
};

export default Folder;
