import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";
import SortingBar from "@components/SortingBar/SortingBar";

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
        <div className="search-bar-area" style={{ margin: `40px 0` }}>
          <SearchBar />
        </div>
        <div>
          <SortingBar onClick={handleActiveListClick} />
        </div>
      </div>
    </>
  );
};

export default Folder;
