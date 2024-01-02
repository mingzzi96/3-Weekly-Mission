import { InputTransparent } from "./InputType";
import "./SearchBarStyle.css";

const IconArea = ({ backgroundImageUrl, size = "16px" }) => {
  return (
    <div
      className="SearchIcon"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
    ></div>
  );
};

const SearchBar = () => {
  return (
    <>
      <div className="SearchBar">
        <IconArea backgroundImageUrl={`/assets/images/SearchIcon.png`} />
        <InputTransparent placeholder={`링크를 검색해 보세요.`} />
      </div>
    </>
  );
};

export { SearchBar };
