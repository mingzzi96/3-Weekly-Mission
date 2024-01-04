import "./ProfileImage.css";

const ProfileImage = ({ url, alt, size, rounded = false }) => {
  return (
    <div
      className={rounded ? "ProfileImage rounded" : "ProfileImage"}
      style={{ width: size, height: size }}
    >
      <img src={url} alt={alt} />
    </div>
  );
};

export default ProfileImage;
