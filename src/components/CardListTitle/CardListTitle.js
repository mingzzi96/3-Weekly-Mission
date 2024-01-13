import Modal from "@components/Modal/Modal";
import "./CardListTitle.css";
import useModal from "hooks/useModal";
import { useState } from "react";
import SnsShareGroup from "@components/SnsShare/SnsShareGroup";

const CardListTitle = ({ title, editActive }) => {
  const { closeModal } = useModal();
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleShareClick = () => {
    setShareModalOpen(true);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseAllModals = () => {
    setShareModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    closeModal();
  };

  return (
    <>
      <div className="cardlist-title">
        <h3>{title}</h3>
        {editActive ? (
          <div className="cardlist-title-edit">
            <button onClick={handleShareClick}>
              <img src="/assets/images/icons/shareIcon.png" alt="공유 아이콘" />
              <p>공유</p>
            </button>
            <button onClick={handleEditClick}>
              <img
                src="/assets/images/icons/penIcon.png"
                alt="이륾 변경 아이콘"
              />
              <p>이름 변경</p>
            </button>
            <button onClick={handleDeleteClick}>
              <img
                src="/assets/images/icons/deleteIcon.png"
                alt="삭제 아이콘"
              />
              <p>삭제</p>
            </button>
          </div>
        ) : null}
      </div>

      <Modal
        isOpen={isShareModalOpen}
        closeModal={handleCloseAllModals}
        modalTitle="폴더 공유"
        modalSubTitle={title}
      >
        <SnsShareGroup />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        closeModal={handleCloseAllModals}
        modalTitle="폴더 이름 변경"
        buttonName="변경하기"
      >
        <input
          className="input-border input-modal"
          placeholder="새로운 폴더 이름 입력"
        />
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        closeModal={handleCloseAllModals}
        modalTitle="폴더 삭제"
        modalSubTitle={title}
        buttonName="삭제하기"
        buttonBg="red"
      ></Modal>
    </>
  );
};

export default CardListTitle;
