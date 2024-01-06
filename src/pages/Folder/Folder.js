import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";
import SortingBar from "@components/SortingBar/SortingBar";
import CardListTitle from "@components/CardListTitle/CardListTitle";
import "./Folder.css";

const Folder = () => {
  const handleActiveListClick = (e) => {
    const targetTag = e.target;
    const targetTagLi = targetTag.closest("li");
    targetTagLi.classList.toggle("active");
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
          <CardListTitle title={`유용한 글`} />
        </div>
      </div>
    </>
  );
};

export default Folder;
