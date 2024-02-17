import styles from "./ProfileImage.module.css";

interface ProfileImage {
  src: string;
  userName: string;
  borderRadius?: number;
  size?: number;
}

const ProfileImage = ({
  src,
  userName,
  borderRadius = 100,
  size = 28,
}: ProfileImage) => {
  return (
    <div
      className={styles.container}
      style={{
        borderRadius: `${borderRadius}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img src={src} alt={`${userName}님의 프로필 이미지`} />
    </div>
  );
};

export default ProfileImage;
