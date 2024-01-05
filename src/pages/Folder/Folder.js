import { useCallback, useEffect, useState } from "react";
import CardList from "@components/CardList/CardList";
import ProfileImage from "@components/ProfileImage/ProfileImage";
import "./Folder.css";
import { SearchBar } from "@components/Input/SearchBarStyle";
import { NO_LINK_FOUND } from "@/constants";
import { getFolderData } from "@/api/api";

const Folder = () => {
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
      <div className="FolderHeader">
        <ProfileImage
          url={
            folderInformation.ownerItem.profileImageSource
              ? folderInformation.ownerItem.profileImageSource
              : "../assets/no_image.svg"
          }
          alt={`${folderInformation.ownerItem.name}님의 프로필 이미지`}
          size={60}
          rounded={true}
        />
        <p>@{folderInformation.ownerItem.name}</p>
        <h2>{folderInformation.folderName}</h2>
      </div>
      <div className="List-MaxWidth" style={{ paddingBottom: `100px` }}>
        <div className="SearchBarArea" style={{ margin: `40px 0` }}>
          <SearchBar />
        </div>
        <div className="FolderCardList">
          {errorMessage ? (
            <div className="no_data">{errorMessage}</div>
          ) : folderInformation.linkItems.length > 0 ? (
            <CardList items={folderInformation.linkItems} />
          ) : (
            <div className="no_data">{NO_LINK_FOUND}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Folder;
