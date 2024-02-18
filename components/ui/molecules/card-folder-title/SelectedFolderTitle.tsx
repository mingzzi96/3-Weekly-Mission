import styles from "./SelectedFolderTitle.module.css";
import shareIcon from "@/public/assets/images/icons/shareIcon.png";
import penIcon from "@/public/assets/images/icons/penIcon.png";
import deleteIcon from "@/public/assets/images/icons/deleteIcon.png";
import Image from "next/image";

interface SelectedFolderTitle {
  title?: string | null;
  editActive?: boolean | null;
  folderId?: number | null;
}

const SelectedFolderTitle = ({
  title,
  editActive,
  folderId,
}: SelectedFolderTitle) => {
  return (
    <div className={styles.folderTitle}>
      <h3>{title}</h3>
      {editActive ? (
        <div className={styles.folderTitleEdit}>
          <button>
            <Image src={shareIcon} alt="공유 아이콘" />
            <p>공유</p>
          </button>
          <button>
            <Image src={penIcon} alt="이륾 변경 아이콘" />
            <p>이름 변경</p>
          </button>
          <button>
            <Image src={deleteIcon} alt="삭제 아이콘" />
            <p>삭제</p>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SelectedFolderTitle;
