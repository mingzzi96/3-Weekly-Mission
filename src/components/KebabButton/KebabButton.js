import { useState } from "react";
import "./KebabButton.css";

const KebabButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleKebabActiveClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="kebab-button-wrap">
        <button onClick={handleKebabActiveClick}>
          <img
            src="./assets/images/icons/kebabIcon.svg"
            alt="더보기 메뉴 버튼"
          />
        </button>
        {isActive ? (
          <ul className="kebab-menu">
            <li className="kebab-menu-item">
              <p>삭제하기</p>
            </li>
            <li className="kebab-menu-item">
              <p>폴더에 추가</p>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default KebabButton;
