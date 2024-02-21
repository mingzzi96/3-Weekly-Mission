import styles from "./CardItem.module.css";
import { useCardProvider } from "./context/cardItemProvider";

const CardImage = () => {
  const cardData = useCardProvider();

  return (
    <div className={styles.cardImage}>
      <img
        src={
          cardData.imageSource === null
            ? `assets/images/no-image/no_image.svg`
            : cardData.imageSource
        }
        alt={cardData?.title}
      />
    </div>
  );
};

export default CardImage;
