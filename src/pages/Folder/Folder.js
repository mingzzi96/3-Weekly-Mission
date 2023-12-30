import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import "./Folder.css";
import { SearchBar } from "../../components/Input/SearchBarStyle";

const Folder = () => {
  const [folderName, setFolderName] = useState("");
  const [ownerItem, setOwnerItem] = useState([]);
  const [linkItems, setLinkItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const result = await response.json();
        setFolderName(result.folder.name);
        setOwnerItem(result.folder.owner);
        setLinkItems(result.folder.links);
        console.log(linkItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
      <div className="SearchBarArea" style={{ margin: `40px 0` }}>
        <SearchBar />
      </div>
      <div className="FolderCardList">
        <CardList items={linkItems} />
      </div>
    </>
  );
};

export default Folder;
