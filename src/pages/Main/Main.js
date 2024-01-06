import { useCallback, useEffect, useState } from "react";
import CardList from "@components/CardList/CardList";
import { SearchBar } from "@components/SearchBar";
import { NO_LINK_FOUND } from "@/constants";
import { getFolderData } from "@/api/api";
import FolderTitleArea from "@components/FolderTitleArea/FolderTitleArea";

const Main = () => {
  const [folderInformation, setFolderInformation] = useState({
    folderName: "",
    ownerItem: [],
    linkItems: [],
  });
  const [errorMessage, setErrorMessage] = useState("");

  const setFolderData = useCallback(async () => {
    try {
      const folderData = await getFolderData();
      setFolderInformation((prevFolderInformation) => ({
        ...prevFolderInformation,
        folderName: folderData.name,
        ownerItem: folderData.owner,
        linkItems: folderData.links,
      }));
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  useEffect(() => {
    setFolderData();
  }, [setFolderData]);

  return (
    <>
      <div>
        <FolderTitleArea
          imageSource={folderInformation.ownerItem.profileImageSource}
          ownerName={folderInformation.ownerItem.name}
          folderName={folderInformation.folderName}
        />
      </div>
      <div className="list-max-width" style={{ paddingBottom: `100px` }}>
        <div className="search-bar-area" style={{ margin: `40px 0` }}>
          <SearchBar />
        </div>
        <div>
          {errorMessage ? (
            <div className="no-data">{errorMessage}</div>
          ) : folderInformation.linkItems.length > 0 ? (
            <CardList items={folderInformation.linkItems} />
          ) : (
            <div className="no-data">{NO_LINK_FOUND}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
