import { Link } from "react-router-dom";
import "./CardList.css";
import CardTextBox from "@components/CardTextBox/CardTextBox";
import CardThumbnail from "@components/CardThumbnail/CardThumbnail";

const CardList = ({ items, isFavoriteExist = false, isKebabExist = false }) => {
  return (
    <ul className="card-list">
      {items.map((item) => {
        return (
          <li key={item.id} className="card-list-item">
            <Link to={item.url} target="_blank">
              <CardThumbnail item={item} isFavoriteExist={isFavoriteExist} />
              <CardTextBox item={item} isKebabExist={isKebabExist} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
