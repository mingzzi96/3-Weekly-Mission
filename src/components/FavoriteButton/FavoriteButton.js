import { useState } from "react";
import "./FavoriteButton.css";

const FavoriteButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFavoriteActiveClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <>
      <button className="favorite-button" onClick={handleFavoriteActiveClick}>
        {isActive ? (
          <img src="./assets/images/starActiveIcon.svg" alt="즐겨찾기 아이콘" />
        ) : (
          <img src="./assets/images/starIcon.svg" alt="즐겨찾기 완료 아이콘" />
        )}
      </button>
    </>
  );
};

export default FavoriteButton;
