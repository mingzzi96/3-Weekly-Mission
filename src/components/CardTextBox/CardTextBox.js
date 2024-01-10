import KebabButton from "@components/KebabButton/KebabButton";
import { formatDate } from "util";
import { timeStamp } from "util";

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

export default CardTextBox;
