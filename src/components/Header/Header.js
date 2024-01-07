import { useEffect, useState } from "react";
import "./Header.css";
import { ProfileImageEmailInfo } from "@components/UserInfo/UserInfo";
import { getUserData } from "@/api/api";
import { Link, useLocation } from "react-router-dom";
import GradientButton from "@components/GradientButton/GradientButton";

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [folderPath, setFolderPath] = useState("");

  const setPathData = () => {
    const currentPath = location.pathname;
    if (currentPath === "/folder") setFolderPath(currentPath);
  };

  const setUserData = async () => {
    const userData = await getUserData();
    setUser(userData);
  };

  useEffect(() => {
    setUserData();
    setPathData();
  }, []);

  return (
    <header className={folderPath !== "" ? "header folder" : "header"}>
      <nav className="nav">
        <h1>
          <Link to="/">
            <img
              src="/assets/images/logos/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </Link>
        </h1>
        {user.email !== "" ||
        user.email !== undefined ||
        user.email !== null ? (
          <ProfileImageEmailInfo
            url={user.image_source}
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
