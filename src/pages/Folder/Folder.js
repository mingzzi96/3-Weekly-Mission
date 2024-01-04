import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import "./Folder.css";
import { SearchBar } from "../../components/Input/SearchBarStyle";
import { NO_LINK_FOUND } from "../../constans";
import { getFolderData } from "../../api/api";

const Folder = () => {
  const [folderName, setFolderName] = useState("");
  const [ownerItem, setOwnerItem] = useState([]);
  const [linkItems, setLinkItems] = useState([]);

  const setFolderData = async () => {
    const folderData = await getFolderData();
    setFolderName(folderData.folder.name);
    setOwnerItem(folderData.folder.owner);
    setLinkItems(folderData.folder.links);
  };

  useEffect(() => {
    setFolderData();
  }, []);

  return (
    <>
      <div className="FolderHeader">
        <ProfileImage
          url={
            ownerItem.profileImageSource
              ? ownerItem.profileImageSource
              : "../assets/no_image.svg"
          }
          alt={`${ownerItem.name}님의 프로필 이미지`}
          size={60}
          rounded={true}
        />
        <p>@{ownerItem.name}</p>
        <h2>{folderName}</h2>
      </div>
      <div className="List-MaxWidth" style={{ paddingBottom: `100px` }}>
        <div className="SearchBarArea" style={{ margin: `40px 0` }}>
          <SearchBar />
        </div>
        <div className="FolderCardList">
          {linkItems.length > 0 ? (
            <CardList items={linkItems} />
          ) : (
            <div className="no_data">{NO_LINK_FOUND}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Folder;
