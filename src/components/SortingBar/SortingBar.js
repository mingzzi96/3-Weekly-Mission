import { useDeviceType } from "@contexts/WindowSizeDetectContext";
import MobileAddFolderButton from "@components/MobileAddFolderButton/MobileAddFolderButton";
import "./SortingBar.css";

const SortingBar = ({ onClick, tagList }) => {
  const deviceType = useDeviceType();

  return (
    <>
      <div className="sorting-bar">
        <div className="sorting-group">
          <ul>
            <li onClick={onClick} data-tag="전체">
              <p>전체</p>
            </li>
            {tagList.map((tag) => (
              <li
                id={tag.id}
                key={tag.id}
                onClick={onClick}
                data-tag={tag.name}
                data-id={tag.id}
              >
                <p>{tag.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sorting-add-button">
          {deviceType !== "mobile" ? (
            <button type="button">
              <span>폴더 추가</span>
              <img
                src="/assets/images/icons/addIcon.png"
                alt="소팅 폴더 추가하기 버튼"
              />
            </button>
          ) : null}
        </div>
      </div>
      {deviceType === "mobile" ? (
        <MobileAddFolderButton>폴더 추가</MobileAddFolderButton>
      ) : null}
    </>
  );
};

export default SortingBar;
