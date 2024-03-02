import PortalContainer from "@/components/portal/portal";
import container from "./ModalContainer.module.css";
import closeIcon from "@/public/assets/images/icons/closeIcon.svg";
import Image from "next/image";
import { MouseEvent, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  handleCloseModal: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const ModalContainer = ({ children, handleCloseModal }: ModalProps) => {
  return (
    <>
      <PortalContainer>
        <div className={container.modalWrap}>
          <div className={container.modalDim} onClick={handleCloseModal}></div>
          <div className={container.modalContent}>
            <button
              type="button"
              onClick={handleCloseModal}
              className={container.modalCloseButton}
            >
              <Image src={closeIcon} alt="닫기 버튼 아이콘" />
            </button>
            {children}
          </div>
        </div>
      </PortalContainer>
    </>
  );
};

export default ModalContainer;
