import IconArea from "@components/IconArea/IconArea";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <IconArea backgroundImageUrl={`/assets/images/icons/SearchIcon.png`} />
        <input placeholder="링크를 검색해 보세요." />
      </div>
    </>
  );
};
