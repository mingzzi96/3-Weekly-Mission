import "./ProfileImage.css";

function ProfileImage({ url, alt, size, rounded = false }) {
  return (
    <div className={rounded ? "ProfileImage rounded" : "ProfileImage"}>
      <img src={url} alt={alt} style={{ width: size, height: size }} />
    </div>
  );
}

export default ProfileImage;
