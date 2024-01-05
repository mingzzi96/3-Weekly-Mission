import FolderAddLinkArea from "@components/FolderAddLinkArea/FolderAddLinkArea";
import { SearchBar } from "@components/SearchBar";

const Folder = () => {
  return (
    <>
      <div>
        <FolderAddLinkArea />
      </div>
      <div className="List-MaxWidth" style={{ paddingBottom: `100px` }}>
        <div className="SearchBarArea" style={{ margin: `40px 0` }}>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Folder;
