import styles from "./CardItem.module.css";
import beforeClickImage from "@/public/assets/images/icons/starIcon.svg";
import afterClickImage from "@/public/assets/images/icons/starActiveIcon.svg";
import { useCardProvider } from "./context/cardItemProvider";
import Image from "next/image";

const CardFavoriteButton = () => {
  const cardData = useCardProvider();

  return (
    <button>
      <Image src={beforeClickImage} alt="즐겨찾기 추가하기 전 아이콘" />
    </button>
  );
};

export default CardFavoriteButton;
