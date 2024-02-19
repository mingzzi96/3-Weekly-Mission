import { MouseEvent, useState } from "react";
import moreIcon from "@/public/assets/images/icons/kebabIcon.svg";
import styles from "./CardItem.module.css";
import Image from "next/image";

const CardKebabButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClickKebabActive = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <div className={styles.kebabButton}>
      <button onClick={handleClickKebabActive}>
        <Image src={moreIcon} alt="더보기 메뉴 버튼" />
      </button>
      {isActive ? (
        <ul className={styles.kebabButtonMenu}>
          <li>
            <p>삭제하기</p>
          </li>
          <li>
            <p>폴더에 추가</p>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CardKebabButton;
