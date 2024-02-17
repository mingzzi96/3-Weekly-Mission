import Image from "next/image";
import styles from "./SearchBar.module.css";
import searchIcon from "@/public/assets/images/icons/SearchIcon.png";
import { ChangeEvent } from "react";

interface Search {
  value: string;
  onSubmitHandler?: () => {};
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickHandler?: () => {};
}

const SearchBar = ({
  value,
  onSubmitHandler,
  onChangeHandler,
  onClickHandler,
}: Search) => {
  return (
    <form onSubmit={onSubmitHandler} className={styles.searchBar}>
      <Image src={searchIcon} alt="검색 아이콘 이미지" tabIndex={-1} />
      <input
        placeholder="링크를 검색해 보세요."
        onChange={onChangeHandler}
        value={value}
      />
      {value.length > 0 ? (
        <button
          aria-label="클릭하여 내용 지우기"
          onClick={onClickHandler}
        ></button>
      ) : null}
    </form>
  );
};

export default SearchBar;
