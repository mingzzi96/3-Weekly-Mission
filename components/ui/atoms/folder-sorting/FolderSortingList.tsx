import styles from "./FolderSortingList.module.css";

const FolderSortingList = ({ children }: any) => {
  return <ul className={styles.folderSortingBox}>{children}</ul>;
};

export default FolderSortingList;
