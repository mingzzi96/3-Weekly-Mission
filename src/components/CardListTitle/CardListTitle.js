import "./CardListTitle.css";

const CardListTitle = ({ title, editActive }) => {
  return (
    <div className="cardlist-title">
      <h3>{title}</h3>
      {editActive ? (
        <div className="cardlist-title-edit">
          <button>
            <img src="/assets/images/icons/shareIcon.png" alt="공유 아이콘" />
            <p>공유</p>
          </button>
          <button>
            <img
              src="/assets/images/icons/penIcon.png"
              alt="이륾 변경 아이콘"
            />
            <p>이름 변경</p>
          </button>
          <button>
            <img src="/assets/images/icons/deleteIcon.png" alt="삭제 아이콘" />
            <p>삭제</p>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CardListTitle;
