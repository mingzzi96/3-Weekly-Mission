import { Link } from "react-router-dom";
import { formatDate, timeStamp } from "@/util";
import "./CardList.css";

const CardThumbnail = ({ item }) => {
  return (
    <div className="card-thumbnail">
      {item.imageSource === undefined ? (
        <img
          src="/assets/images/no_image.svg"
          alt="미리보기 이미지가 없습니다."
        />
      ) : (
        <img src={item.imageSource} alt="이미지 미리보기" />
      )}
    </div>
  );
};

const CardTextBox = ({ item }) => {
  return (
    <div className="CardTextBox">
      <span className="timestamp">{timeStamp(item.createdAt)}</span>
      <p className="description">{item.description}</p>
      <p className="date">{formatDate(item.createdAt)}</p>
    </div>
  );
};

const CardList = ({ items }) => {
  return (
    <ul className="card-list">
      {items.map((item) => {
        return (
          <li key={item.id} className="card-list-item">
            <Link to={item.url} target="_blank">
              <CardThumbnail item={item} />
              <CardTextBox item={item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
