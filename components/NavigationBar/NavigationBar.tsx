import Image from "next/image";
import Link from "next/link";
import LinkbraryLogo from "public/assets/images/logos/logo.svg";
import styles from "./NavigationBar.module.css";
import global from "@/styles/global.module.css";
import { useEffect, useState } from "react";
import { User } from "@/types/userType";

const Navigation = () => {
  const [user, setUser] = useState<User>();

  const getUserData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/1`
    );

    if (!response.ok) {
      throw new Error("User 정보 받아오기 실패");
    }

    const result = await response.json();
    return result.data[0];
  };

  const setUserData = async () => {
    const userData = await getUserData();
    setUser(userData);
  };

  useEffect(() => {
    setUserData();
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <h1>
          <Link href="/">
            <Image src={LinkbraryLogo} alt="클릭하여 Linkbrary 홈으로 이동" />
          </Link>
        </h1>
        <button className={`${global.gradientButton}`}>로그인</button>
        {user?.email}
      </div>
    </nav>
  );
};

export default Navigation;

// SSR fetch 실패!!!!!
// export const getServerSideProps = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/1`
//   );

//   const result = await response.json();
//   const userData = result.data[0];
//   return {
//     props: {
//       userData,
//     },
//   };
// };
