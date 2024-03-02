import global from "@/styles/global.module.css";
import modal from "./ModalContainer.module.css";

interface ModalAddFolderProps {
  modalTitle?: string;
  modalSubTitle?: string;
}

const ModalAddFolder = ({ modalTitle, modalSubTitle }: ModalAddFolderProps) => {
  return (
    <>
      <form className={modal.addFolderContainer}>
        {modalTitle && <h2 className={modal.modalTitle}>{modalTitle}</h2>}
        {modalTitle && <h5 className={modal.modalSubTitle}></h5>}

        <input
          type="text"
          placeholder="폴더 이름 입력"
          className={global.inputBox}
        />
        <button
          type="submit"
          className={`${global.button} ${global.gradation}`}
        >
          추가하기
        </button>
      </form>
    </>
  );
};

export default ModalAddFolder;
