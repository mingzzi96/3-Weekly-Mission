import CardPassed from "./CardPassed";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardProvider from "./context/cardItemProvider";
import CardDate from "./CardDate";
import CardFavoriteButton from "./CardFavoriteButton";
import CardKebabButton from "./CardKebabButton";

const Card = Object.assign(CardProvider, {
  Image: CardImage,
  DatePassed: CardPassed,
  Date: CardDate,
  Description: CardDescription,
  FavoriteButton: CardFavoriteButton,
  KebabButton: CardKebabButton,
});

export default Card;
