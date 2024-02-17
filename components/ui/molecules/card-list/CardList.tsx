import { CardItemTransformed } from "@/types/cardItemType";
import styles from "./CardList.module.css";
import Card from "../../atoms/list-card-item";

const CardList = ({ folderItem }: any) => {
  return (
    <div className={styles.cardListBox}>
      {folderItem.map((cardData: CardItemTransformed) => (
        <Card key={cardData.id} cardData={cardData}>
          <Card.Image />
          <Card.DatePassed />
          <Card.Description />
          <Card.Date />
          <Card.FavoriteButton />
          <Card.KebabButton />
        </Card>
      ))}
    </div>
  );
};

export default CardList;
