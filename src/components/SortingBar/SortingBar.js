import "./SortingBar.css";

const SortingBar = ({ onClick, tagList }) => {
  return (
    <>
      <div className="sorting-bar">
        <div className="sorting-group">
          <ul>
            {tagList.map((tag) => (
              <li key={tag} onClick={onClick} data-tag={tag}>
                <p>{tag}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sorting-add-button">
          <button type="button">
            <span>폴더 추가</span>
            <img
              src="/assets/images/addIcon.png"
              alt="소팅 폴더 추가하기 버튼"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default SortingBar;
