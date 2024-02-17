import CardPassed from "./CardPassed";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardProvider from "./context/cardItemProvider";
import CardDate from "./CardDate";
import CardFavoriteButton from "./CardFavoriteButton";

const Card = Object.assign(CardProvider, {
  Image: CardImage,
  DatePassed: CardPassed,
  Date: CardDate,
  Description: CardDescription,
  FavoriteButton: CardFavoriteButton,
});

export default Card;
