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
  background: #fff;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  padding: 32px 40px;
  z-index: 999;
`;

const StyledModalContentTitle = styled.h2`
  color: #373740;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StyledModalContentCloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const Modal = ({ isOpen, closeModal, children, modalTitle = null }) => {
  return (
    <>
      {isOpen ? (
        <StyledModalWrap>
          <StyledModalDim onClick={closeModal} />
          <StyledModalContent>
            <StyledModalContentCloseButton type="button" onClick={closeModal}>
              Close
            </StyledModalContentCloseButton>
            <StyledModalContentTitle>{modalTitle}</StyledModalContentTitle>
            {children}
          </StyledModalContent>
        </StyledModalWrap>
      ) : null}
    </>
  );
};

export default Modal;
