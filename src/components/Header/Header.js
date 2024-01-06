import { useEffect, useState } from "react";
import "./Header.css";
import { ProfileImageEmailInfo } from "@components/UserInfo/UserInfo";
import { getUserData } from "@/api/api";
import { Link } from "react-router-dom";
import GradientButton from "@components/GradientButton/GradientButton";

const Header = () => {
  const [user, setUser] = useState({});

  const setUserData = async () => {
    const userData = await getUserData();
    setUser(userData);
  };

  useEffect(() => {
    setUserData();
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <h1>
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </Link>
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
          <GradientButton
            padding={`16px 0`}
            fontSize={`16px`}
            minWidth={`128px`}
          >
            로그인
          </GradientButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
