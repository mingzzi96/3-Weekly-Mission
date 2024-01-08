import ProfileImage from "../ProfileImage/ProfileImage";
import "./FolderTitleArea.css";

const FolderTitleArea = ({ imageSource, ownerName, folderName }) => {
  return (
    <div className="folder-title-area page-title-area">
      <ProfileImage
        url={imageSource ? imageSource : "/assets/images/no-image/no_image.svg"}
        alt={`${ownerName}님의 프로필 이미지`}
        size={60}
        rounded={true}
      />
      <p>@{ownerName}</p>
      <h2>{folderName}</h2>
    </div>
  );
};

export default FolderTitleArea;
