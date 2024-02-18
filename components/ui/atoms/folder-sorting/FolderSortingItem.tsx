const FolderSortingItem = ({ folderNameData, onClickHandler }: any) => {
  return (
    <p onClick={() => onClickHandler(folderNameData.name, folderNameData.id)}>
      {folderNameData.name}
    </p>
  );
};

export default FolderSortingItem;
