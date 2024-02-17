import styles from "./folder.module.css";
import AddLinkBar from "@/components/add-link-bar/AddLinkBar";

const Folder = () => {
  return (
    <div className={styles.linkArea}>
      <AddLinkBar />
    </div>
  );
};

export default Folder;
