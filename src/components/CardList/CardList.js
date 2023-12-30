import { formatDate } from "../../util";
import "./CardList.css";

const CardThumbnail = ({ item }) => {
  return (
    <div className="CardThumbnail">
      <img
        src={
          item.imageSource === undefined
            ? "/assets/images/no_image.svg"
            : item.imageSource
        }
        alt={item.title}
      />
    </div>
  );
};

const CardTextBox = ({ item }) => {
  return (
    <div className="CardTextBox">
      <span className="timestamp">{item.createdAt}</span>
      {/* <h3 className="title">{item.title}</h3> */}
      <p className="description">{item.description}</p>
      <p className="date">{formatDate(item.createdAt)}</p>
    </div>
  );
};

const CardList = ({ items }) => {
  return (
    <ul className="CardList">
      {items.map((item) => {
        return (
          <li key={item.id} className="CardListItem">
            <a href={item.url} target="_blank" rel="noreferrer">
              <CardThumbnail item={item} />
              <CardTextBox item={item} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
