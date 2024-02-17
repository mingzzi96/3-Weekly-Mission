import SearchBar from "@/components/search-bar/SearchBar";
import styles from "./folder.module.css";
import AddLinkBar from "@/components/add-link-bar/AddLinkBar";
import { ChangeEvent, useState } from "react";

const Folder = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <div className={styles.linkArea}>
        <AddLinkBar />
      </div>
      <div className={styles.maxWidth}>
        <SearchBar
          value={searchKeyword}
          onChangeHandler={handleChangeSearchKeyword}
        />
      </div>
    </>
  );
};

export default Folder;
