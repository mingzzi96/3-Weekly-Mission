import KebabButton from "@components/KebabButton/KebabButton";
import { formatDate } from "utils/formatDate";
import { timeStamp } from "utils/timeStamp";

const CardTextBox = ({ item, isKebabExist, cardLink }) => {
  return (
    <div className="CardTextBox">
      <span className="timestamp">{timeStamp(item.createdAt)}</span>
      <p className="description">{item.description}</p>
      <p className="date">{formatDate(item.createdAt)}</p>
      {isKebabExist ? <KebabButton cardLink={cardLink} /> : null}
    </div>
  );
};

export default CardTextBox;
