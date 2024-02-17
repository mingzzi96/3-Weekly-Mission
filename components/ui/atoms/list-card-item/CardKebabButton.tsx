import { useState } from "react";
import moreIcon from "@/public/assets/images/icons/kebabIcon.svg";
import styles from "./CardItem.module.css";
import Image from "next/image";

const CardKebabButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleKebabActiveClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.kebabButton}>
      <button onClick={handleKebabActiveClick}>
        <Image src={moreIcon} alt="더보기 메뉴 버튼" />
      </button>
      {isActive ? (
        <ul className="kebab-menu">
          <li className="kebab-menu-item">
            <p>삭제하기</p>
          </li>
          <li className="kebab-menu-item">
            <p>폴더에 추가</p>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CardKebabButton;
