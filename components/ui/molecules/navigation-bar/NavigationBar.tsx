import Image from "next/image";
import Link from "next/link";
import LinkbraryLogo from "public/assets/images/logos/logo.svg";
import styles from "./NavigationBar.module.css";
import global from "@/styles/global.module.css";
import { useEffect, useState } from "react";
import { User } from "@/types/auth/userType";
import { getUserData } from "@/api/getUserData";
import ProfileImage from "../../atoms/profile-image/ProfileImage";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [user, setUser] = useState<User>();
  const pathname = usePathname();

  const setUserData = async () => {
    const userData = await getUserData();
    setUser(userData);
  };

  useEffect(() => {
    if (pathname !== "/signin" && pathname === "/signup") {
      setUserData();
    }
  }, []);

  return pathname === "/signin" || pathname === "/signup" ? null : (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <h1>
          <Link href="/">
            <Image src={LinkbraryLogo} alt="클릭하여 Linkbrary 홈으로 이동" />
          </Link>
        </h1>
        {user?.email ? (
          <div className={styles.navUserInfo}>
            <ProfileImage src={user?.image_source} userName={user?.name} />
            <p>{user?.email}</p>
          </div>
        ) : (
          <Link
            href="/signin"
            className={`${global.gradientButton} ${styles.loginButton}`}
          >
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// SSR fetch 실패!!!!!
// export const getServerSideProps = async () => {
//   const response = await fetch(
//     `${API_BASE_URL}/users/1`
//   );

//   const result = await response.json();
//   const userData = result.data[0];
//   return {
//     props: {
//       userData,
//     },
//   };
// };
