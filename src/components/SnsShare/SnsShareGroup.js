import { getUserData } from "@api/api";
import { DEPLOYED_URL } from "constants";
import { KAKAO_SHARE_KEY } from "constants";
import { useEffect, useState } from "react";
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

  img {
    cursor: pointer;
  }

  p {
    font-size: 1.3rem;
    color: var(--color--gray-100);
    font-weight: 400;
  }
`;

const { Kakao } = window;

const SnsShareGroup = ({ folderId }) => {
  const [user, setUser] = useState({});
  const SHARE_URL_TEXT = `${DEPLOYED_URL}/shared?user=${user.id}&folder=${folderId}`;

  const setUserData = async () => {
    const userData = await getUserData();
    setUser(userData);
  };

  useEffect(() => {
    setUserData();
  }, []);

  const handleClipBoardClick = (linkText) => {
    navigator.clipboard.writeText(linkText);
  };

  const realUrl = SHARE_URL_TEXT;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(`${KAKAO_SHARE_KEY}`);
    // 잘 적용되면 true 를 뱉는다.
    // console.log(Kakao.isInitialized());
  }, []);

  const handleKakaoShareClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl: "./assets/images/logos/logo.svg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <StyledSnsGroup>
        <li>
          <img
            src="./assets/images/icons/kakao.svg"
            alt="링크 카카오톡으로 공유"
            onClick={handleKakaoShareClick}
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
            onClick={() => handleClipBoardClick(SHARE_URL_TEXT)}
          />
          <p>링크 복사</p>
        </li>
      </StyledSnsGroup>
    </>
  );
};

export default SnsShareGroup;
