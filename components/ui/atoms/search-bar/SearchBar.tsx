import Image from "next/image";
import styles from "./SearchBar.module.css";
import searchIcon from "@/public/assets/images/icons/SearchIcon.png";
import clearIcon from "@/public/assets/images/icons/closeIconGrey.svg";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { CardItemTransformed } from "@/types/cardItemType";
import { sendEtagResponse } from "next/dist/server/send-payload";
import { filterLinkSearch } from "@/utils/search/filterLinkSearch";

interface Search {
  initialFolderItem: CardItemTransformed[];
  folderItem: CardItemTransformed[];
  setFolderItem: Dispatch<SetStateAction<CardItemTransformed[]>>;
}

const SearchBar = ({
  folderItem,
  initialFolderItem,
  setFolderItem,
}: Search) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleClickClearInput = () => {
    setSearchKeyword("");
    setFolderItem(initialFolderItem);
  };
  const handleSubmitSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword.length > 0) {
      const searchResults: CardItemTransformed[] = filterLinkSearch(
        folderItem,
        searchKeyword
      );
      setFolderItem(searchResults);
      return;
    }
    setFolderItem(initialFolderItem);
  };

  return (
    <form onSubmit={handleSubmitSearchForm} className={styles.searchBar}>
      <Image src={searchIcon} alt="검색 아이콘 이미지" tabIndex={-1} />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        value={searchKeyword}
        onChange={handleChangeSearchKeyword}
      />
      {searchKeyword.length > 0 ? (
        <button
          type="button"
          aria-label="클릭하여 내용 지우기"
          onClick={handleClickClearInput}
        >
          <Image src={clearIcon} alt="내용 삭제 아이콘" tabIndex={-1} />
        </button>
      ) : null}
    </form>
  );
};

export default SearchBar;
