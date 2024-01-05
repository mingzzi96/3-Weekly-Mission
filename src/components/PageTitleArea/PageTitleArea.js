import ProfileImage from "../ProfileImage/ProfileImage";
import "./PageTitleArea.css";

const PageTitleArea = ({ imageSource, ownerName, folderName }) => {
  return (
    <div className="PageTitleArea">
      <ProfileImage
        url={imageSource ? imageSource : "/assets/images/no_image.svg"}
        alt={`${ownerName}님의 프로필 이미지`}
        size={60}
        rounded={true}
      />
      <p>@{ownerName}</p>
      <h2>{folderName}</h2>
    </div>
  );
};

export default PageTitleArea;
