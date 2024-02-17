import { formatDate } from "@/utils/date/formateDate";
import styles from "./CardItem.module.css";
import { useCardProvider } from "./context/cardItemProvider";

const CardDate = () => {
  const cardData = useCardProvider();

  return <span className={styles.date}>{formatDate(cardData?.createdAt)}</span>;
};

export default CardDate;
