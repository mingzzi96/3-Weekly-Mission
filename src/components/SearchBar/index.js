import { IconArea, InputTransparent } from "@components/Input/InputType";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <>
      <div className="SearchBar">
        <IconArea backgroundImageUrl={`/assets/images/SearchIcon.png`} />
        <InputTransparent placeholder={`링크를 검색해 보세요.`} />
      </div>
    </>
  );
};