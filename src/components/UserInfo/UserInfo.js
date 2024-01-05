import ProfileImage from "@components/ProfileImage/ProfileImage";
import "./UserInfo.css";

const ProfileImageEmailInfo = ({ url, alt, size, rounded, email }) => {
  return (
    <div className="ProfileImageEmailInfo">
      <ProfileImage url={url} alt={alt} size={size} rounded={rounded} />
      <p>{email}</p>
    </div>
  );
};

export { ProfileImageEmailInfo };
