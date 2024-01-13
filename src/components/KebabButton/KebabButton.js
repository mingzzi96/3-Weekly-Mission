import { useCallback, useEffect, useState } from "react";
import "./KebabButton.css";
import useModal from "hooks/useModal";
import Modal from "@components/Modal/Modal";
import CheckBox from "@components/CheckBox/CheckBox";
import { getFolderNameData } from "@api/api";
import styled from "styled-components";
import NoListError from "@components/NoListError/NoListError";
import { NO_LINK_FOUND } from "constants";

const StyledFolderList = styled.div`
  max-height: 172px;
  overflow-y: auto;
  margin: 24px 0;
`;

const KebabButton = ({ cardLink }) => {
  const { closeModal } = useModal();
  const [isActive, setIsActive] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [folderName, setFolderName] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const setFolderNameData = useCallback(async () => {
    try {
      const folderList = await getFolderNameData();
      setFolderName(folderList);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  useEffect(() => {
    setFolderNameData();
  }, [setFolderNameData]);

  const handleKebabActiveClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setDeleteModalOpen(true);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setIsAddModalOpen(true);
  };

  const handleCloseAllModals = (e) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    setDeleteModalOpen(false);
    setIsActive(false);
    closeModal();
  };

  return (
    <>
      <div className="kebab-button-wrap">
        <button onClick={handleKebabActiveClick}>
          <img
            src="./assets/images/icons/kebabIcon.svg"
            alt="더보기 메뉴 버튼"
          />
        </button>
        {isActive ? (
          <ul className="kebab-menu">
            <li className="kebab-menu-item" onClick={handleDeleteClick}>
              <p>삭제하기</p>
            </li>
            <li className="kebab-menu-item" onClick={handleAddClick}>
              <p>폴더에 추가</p>
            </li>
          </ul>
        ) : null}
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        closeModal={handleCloseAllModals}
        modalTitle="링크 삭제"
        modalSubTitle={cardLink}
        buttonName="삭제하기"
        buttonBg="red"
      ></Modal>

      <Modal
        isOpen={isAddModalOpen}
        closeModal={handleCloseAllModals}
        modalTitle="폴더에 추가"
        modalSubTitle={cardLink}
        buttonName="추가하기"
      >
        {errorMessage ? (
          <NoListError message={errorMessage} />
        ) : folderName.length > 0 ? (
          <StyledFolderList>
            {folderName.map((folder) => {
              return (
                <CheckBox
                  key={folder.id}
                  label={folder.name}
                  count={folder.link.count}
                />
              );
            })}
          </StyledFolderList>
        ) : (
          <NoListError message={NO_LINK_FOUND} />
        )}
      </Modal>
    </>
  );
};

export default KebabButton;
