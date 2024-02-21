import styles from "./CardList.module.css";
import cardItemStyles from "@/components/ui/atoms/list-card-item/CardItem.module.css";
import { CardItemTransformed } from "@/types/cardItemType";
import Card from "../../atoms/list-card-item";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import classNames from "classnames/bind";

const CardList = ({ folderItem }: any) => {
  return (
    <div className={styles.cardListBox}>
      {folderItem.map((cardData: CardItemTransformed) => (
        <div
          className={`${styles.cardListItem} ${cardItemStyles.cardListHover}`}
          key={cardData.id}
        >
          <Link href={cardData.url as Url} target="_blank">
            <Card cardData={cardData}>
              <div className={styles.imageBox}>
                <Card.Image />
                <Card.FavoriteButton />
              </div>
              <div className={styles.textBox}>
                <div className={styles.textBoxFlex}>
                  <Card.DatePassed />
                  <Card.KebabButton />
                </div>
                <Card.Description />
                <Card.Date />
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardList;
