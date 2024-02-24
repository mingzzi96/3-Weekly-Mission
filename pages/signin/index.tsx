import styles from "@/styles/sign.module.css";
import global from "@/styles/global.module.css";
import Input from "@/components/ui/atoms/input/Input";
import logoIcon from "@/public/assets/images/logos/logo.svg";
import kakaoIcon from "@/public/assets/images/icons/kakao-login-icon.svg";
import googleIcon from "@/public/assets/images/icons/google-login-icon.svg";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  return (
    <>
      <div className={styles.signPage}>
        <div className={styles.signBox}>
          <div className={styles.logoBox}>
            <Link href="/">
              <Image src={logoIcon} alt="링크브러리 메인으로 이동" />
            </Link>
            <div>
              <p>회원이 아니신가요?</p>
              <Link href="/signup/">회원 가입하기</Link>
            </div>
          </div>
          <form className={styles.formBox}>
            <label htmlFor="email">이메일</label>
            <Input id="email" type="email" />
            <label htmlFor="password">비밀번호</label>
            <Input id="password" type="password" password />
            <button
              className={`${global.button} ${global.gradation}`}
              type="submit"
            >
              로그인
            </button>
          </form>
          <div className={`${global.snsBox} ${styles.snsBox}`}>
            <p>소셜 로그인</p>
            <div className={global.snsIconGroup}>
              <Link href="https://www.google.com">
                <Image src={kakaoIcon} alt="카카오톡으로 로그인하려면 클릭" />
              </Link>
              <Link href="https://www.kakaocorp.com/page">
                <Image src={googleIcon} alt="구글 계정으로 로그인하려면 클릭" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
