import { useEffect, useState } from "react";
import "./Header.css";
import { ProfileImageEmailInfo } from "../UserInfo/UserInfo";

const Header = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFolderData();
  }, []);

  return (
    <header className="Header">
      <nav className="Nav">
        <h1>
          <a href="/">
            <img
              src="/assets/images/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
        </h1>
        {user.email ? (
          <ProfileImageEmailInfo
            url={user.profileImageSource}
            alt={`${user.name}님의 프로필 이미지입니다.`}
            size={28}
            rounded={true}
            email={user.email}
          />
        ) : (
          <a
            href="javascript:void(0)"
            className="gradient_btn w_s"
            style={{ fontWeight: 600 }}
          >
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
