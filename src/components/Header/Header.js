import { useEffect, useState } from "react";
import "./Header.css";
import { ProfileImageEmailInfo } from "../UserInfo/UserInfo";
import { getUserData } from "../../api/api";
import { Link } from "react-router-dom";

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
    <header className="Header">
      <nav className="Nav">
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
          <button className="Gradient-btn" style={{ fontWeight: 600 }}>
            로그인
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
