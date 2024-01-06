import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";

const Folder = () => {
  return (
    <>
      <div>
        <FolderAddLinkArea />
      </div>
      <div className="list-max-width" style={{ paddingBottom: `100px` }}>
        <div className="search-bar-area" style={{ margin: `40px 0` }}>
          <SearchBar />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Folder;
