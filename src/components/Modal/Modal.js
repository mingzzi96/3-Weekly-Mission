import GradientButton from "@components/GradientButton/GradientButton";
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

const StyledModalContentTitle = styled.h2`
  color: #373740;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const StyledModalContentSubTitle = styled.h5`
  color: var(--color--gray-60);
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
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

const StyledSubmitButton = styled.div`
  button {
    border-radius: 8px;
    line-height: 1;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;
    margin-top: 15px;
    padding: 16px 20px;
    font-size: 1.6rem;
    font-weight: 600;
    background: ${(props) =>
      props.buttonBg === "primary"
        ? "var(--color--primary)"
        : props.buttonBg === "red"
        ? "var(--color--red)"
        : "var(--button-gradation)"};
  }
`;

const Modal = ({
  isOpen,
  closeModal,
  children,
  modalTitle,
  modalSubTitle = null,
  buttonName = "",
  buttonBg,
}) => {
  return (
    <>
      {isOpen ? (
        <StyledModalWrap>
          <StyledModalDim onClick={closeModal} />
          <StyledModalContent>
            <StyledModalContentTitle>{modalTitle}</StyledModalContentTitle>
            {modalSubTitle !== null && modalSubTitle !== "" ? (
              <StyledModalContentSubTitle>
                {modalSubTitle}
              </StyledModalContentSubTitle>
            ) : null}
            <StyledModalContentCloseButton type="button" onClick={closeModal}>
              <img src="./assets/images/icons/closeIcon.svg" alt="닫기 버튼" />
            </StyledModalContentCloseButton>
            {children}
            {buttonName !== "" ? (
              <StyledSubmitButton buttonBg={buttonBg}>
                <button>{buttonName}</button>
              </StyledSubmitButton>
            ) : null}
          </StyledModalContent>
        </StyledModalWrap>
      ) : null}
    </>
  );
};

export default Modal;
