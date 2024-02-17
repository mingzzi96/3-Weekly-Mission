import SearchBar from "@/components/search-bar/SearchBar";
import styles from "./folder.module.css";
import AddLinkBar from "@/components/add-link-bar/AddLinkBar";
import { ChangeEvent, useState } from "react";

const Folder = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleDeleteInputClick = () => {
    setSearchKeyword("");
  };

  return (
    <>
      <div className={styles.linkArea}>
        <AddLinkBar />
      </div>
      <div className={styles.maxWidth}>
        <div className={styles.searchBarContainer}>
          <SearchBar
            value={searchKeyword}
            onChangeHandler={handleChangeSearchKeyword}
            onClickHandler={handleDeleteInputClick}
          />
        </div>
      </div>
    </>
  );
};

export default Folder;
