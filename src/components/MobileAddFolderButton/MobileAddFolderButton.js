import "./MobileAddFolderButton.css";

const MobileAddFolderButton = ({ children, onClick }) => {
  return (
    <>
      <button
        className="sorting-add-button-mobile"
        type="button"
        onClick={onClick}
      >
        <span>{children}</span>
        <img
          src="./assets/images/icons/addIconWhite.svg"
          alt="폴더 추가 아이콘"
        />
      </button>
    </>
  );
};

export default MobileAddFolderButton;
