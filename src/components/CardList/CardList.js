import { Link } from "react-router-dom";
import { formatDate, timeStamp } from "@/util";
import "./CardList.css";
import FavoriteButton from "@components/FavoriteButton/FavoriteButton";
import KebabButton from "@components/KebabButton/KebabButton";

const CardThumbnail = ({ item, isFavoriteExist, isFavoriteActive }) => {
  return (
    <div className="card-thumbnail">
      {isFavoriteExist ? (
        <FavoriteButton isFavoriteActive={isFavoriteActive} />
      ) : null}

      {item.imageSource === undefined || item.imageSource === null ? (
        <img
          className="card-thumbnail-image"
          src="/assets/images/no-image/no_image.svg"
          alt="미리보기 이미지가 없습니다."
        />
      ) : (
        <img
          className="card-thumbnail-image"
          src={item.imageSource}
          alt="이미지 미리보기"
        />
      )}
    </div>
  );
};

const CardTextBox = ({ item, isKebabExist }) => {
  return (
    <div className="CardTextBox">
      <span className="timestamp">{timeStamp(item.createdAt)}</span>
      <p className="description">{item.description}</p>
      <p className="date">{formatDate(item.createdAt)}</p>
      {isKebabExist ? <KebabButton /> : null}
    </div>
  );
};

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
