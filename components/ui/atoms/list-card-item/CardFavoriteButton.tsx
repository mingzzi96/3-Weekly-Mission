import styles from "./CardItem.module.css";
import beforeClickImage from "@/public/assets/images/icons/starIcon.svg";
import afterClickImage from "@/public/assets/images/icons/starActiveIcon.svg";
import Image from "next/image";
import { useState } from "react";

const CardFavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleActiveFavoriteClick = (e: any) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className={styles.favoriteButton}
      onClick={handleActiveFavoriteClick}
    >
      {isFavorite ? (
        <Image src={afterClickImage} alt="즐겨찾기 추가 후 아이콘" />
      ) : (
        <Image src={beforeClickImage} alt="즐겨찾기 추가하기 전 아이콘" />
      )}
    </button>
  );
};

export default CardFavoriteButton;
