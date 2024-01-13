import GradientButton from "@components/GradientButton/GradientButton";
import styled from "styled-components";

const StyledModalContentTitle = styled.h2`
  color: #373740;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 18px 15px;
  font-size: 16px;
`;

const StyledGradientButton = styled.div`
  button {
    width: 100%;
    margin-top: 15px;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const ModalDefaultType = ({ modalTitle, placeHolder }) => {
  return (
    <>
      <StyledModalContentTitle>{modalTitle}</StyledModalContentTitle>
      <StyledInput className="input-border" placeholder={placeHolder} />
      <StyledGradientButton>
        <GradientButton backgroundColor="gradient">추가하기</GradientButton>
      </StyledGradientButton>
    </>
  );
};

export default ModalDefaultType;
