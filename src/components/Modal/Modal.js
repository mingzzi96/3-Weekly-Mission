import styled from "styled-components";

const StyledModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
`;

const StyledModalDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
`;

const StyledModalContent = styled.div`
  position: relative;
  max-width: 360px;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  padding: 32px 40px;
  z-index: 999;
`;

const StyledModalContentCloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  img {
    width: 24px;
    height: 24px;
    object-fix: contain;
  }
`;

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen ? (
        <StyledModalWrap>
          <StyledModalDim onClick={closeModal} />
          <StyledModalContent>
            <StyledModalContentCloseButton type="button" onClick={closeModal}>
              <img src="./assets/images/icons/closeIcon.svg" alt="닫기 버튼" />
            </StyledModalContentCloseButton>
            {children}
          </StyledModalContent>
        </StyledModalWrap>
      ) : null}
    </>
  );
};

export default Modal;
