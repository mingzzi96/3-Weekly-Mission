import styles from "./FolderSortingItem.module.css";

interface folderItem {
  folderName: string;
}

const FolderSortingItem = ({ folderName }: folderItem) => {
  return (
    <div className={styles.sortingItem}>
      <p>{folderName}</p>
    </div>
  );
};

export default FolderSortingItem;
