import styled from "styled-components";

const StyledSnsGroup = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 24px;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-size: 1.3rem;
    color: var(--color--gray-100);
    font-weight: 400;
  }
`;

const SnsShareGroup = () => {
  return (
    <>
      <StyledSnsGroup>
        <li>
          <img
            src="./assets/images/icons/kakao.svg"
            alt="링크 카카오톡으로 공유"
          />
          <p>카카오톡</p>
        </li>
        <li>
          <img
            src="./assets/images/icons/facebookColored.svg"
            alt="링크 페이스북으로 공유"
          />
          <p>페이스북</p>
        </li>
        <li>
          <img
            src="./assets/images/icons/clipboard.svg"
            alt="링크 클립보드에 복사"
          />
          <p>링크 복사</p>
        </li>
      </StyledSnsGroup>
    </>
  );
};

export default SnsShareGroup;
