import { timeStamp } from "@/utils/date/timeStamp";
import styles from "./CardItem.module.css";
import { useCardProvider } from "./context/cardItemProvider";

const CardPassed = () => {
  const cardData = useCardProvider();

  return <span className={styles.date}>{timeStamp(cardData?.createdAt)}</span>;
};

export default CardPassed;
