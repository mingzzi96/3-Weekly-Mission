import { useState } from "react";
import styled from "styled-components";

const StyledCheckBox = styled.div`
  margin-bottom: 4px;

  label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: var(--color--gray-bg);
    }

    &.checked {
      background: var(--color--gray-bg);
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
      width: 14px;
      height: 14px;
      object-fit: contain;
    }
  }

  .folder-name {
    font-size: 1.6rem;
    color: var(--color--gray-100);
  }

  .folder-link-count {
    font-size: 1.4rem;
    color: var(--color--gray-60);
  }
`;

const CheckBox = ({ label, count }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <StyledCheckBox>
        <label className={isChecked ? "checked" : ""}>
          <span className="folder-name">{label}</span>
          <span className="folder-link-count">{count}개 링크</span>
          {isChecked ? (
            <img
              src="./assets/images/icons/checkIconPrimary.svg"
              alt="체크된 이미지"
            />
          ) : null}
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
      </StyledCheckBox>
    </>
  );
};

export default CheckBox;
