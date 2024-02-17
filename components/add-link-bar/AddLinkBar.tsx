import Image from "next/image";
import styles from "./AddLinkBar.module.css";
import global from "@/styles/global.module.css";
import inputLinkImage from "@/public/assets/images/icons/LinkIcon.png";

const AddLinkBar = () => {
  return (
    <div className={styles.container}>
      <Image src={inputLinkImage} alt="링크 이미지" tabIndex={-1} />
      <input placeholder="링크를 추가해 보세요" />
      <button type="submit" className={global.gradientButton}>
        추가하기
      </button>
    </div>
  );
};

export default AddLinkBar;
