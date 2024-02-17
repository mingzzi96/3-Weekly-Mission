import styles from "./CardItem.module.css";
import { useCardProvider } from "./context/cardItemProvider";

const CardDescription = () => {
  const cardData = useCardProvider();
  return <div className={styles.CardDescription}>{cardData?.description}</div>;
};

export default CardDescription;
