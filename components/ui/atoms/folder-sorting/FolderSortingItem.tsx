import folderStyles from "@/components/ui/atoms/folder-sorting/FolderSortingList.module.css";
import { FolderName } from "@/types/folderNameType";
import { MouseEvent } from "react";

interface FolderSortingItem {
  selectedTagName: string;
  folderNameData: FolderName;
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FolderSortingItem = ({
  selectedTagName,
  folderNameData,
  onClickHandler,
}: any) => {
  return (
    <p
      onClick={() => onClickHandler(folderNameData.name, folderNameData.id)}
      className={
        selectedTagName === folderNameData.name ? folderStyles.active : ""
      }
    >
      {folderNameData.name}
    </p>
  );
};

export default FolderSortingItem;
