import styles from "@/styles/sign.module.css";
import global from "@/styles/global.module.css";
import Input from "@/components/ui/atoms/input/Input";
import logoIcon from "@/public/assets/images/logos/logo.svg";
import kakaoIcon from "@/public/assets/images/icons/kakao-login-icon.svg";
import googleIcon from "@/public/assets/images/icons/google-login-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { postSignIn } from "@/api/postSignIn";
import { useRouter } from "next/router";
import { emailPattern } from "@/utils/regex/checkRegex";
import { useCallback, useEffect } from "react";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({ mode: "all", shouldFocusError: true });

  const checkLocalStorage = useCallback(() => {
    const hasAccessToken = localStorage.getItem("accessToken") ? true : false;
    if (hasAccessToken) {
      router.push("/folder");
    }
  }, [router]);

  useEffect(() => {
    checkLocalStorage();
  }, [checkLocalStorage]);

  const handleSubmitRegister: SubmitHandler<FieldValues> = async (data) => {
    const result = await postSignIn(data.email, data.password);

    if (result === 400) {
      setError("email", {
        type: "serverError",
        message: "이메일을 다시 확인해 주세요.",
      });
      setError("password", {
        type: "serverError",
        message: "비밀번호를 다시 확인해 주세요.",
      });
      return;
    }

    if (result.data.accessToken) {
      router.push("/folder");
    }
  };

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
          <form
            className={styles.formBox}
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <label htmlFor="email">이메일</label>
            <Input
              id="email"
              name="email"
              type="email"
              register={register}
              errors={errors}
              rules={{
                required: "이메일을 입력해 주세요.",
                pattern: emailPattern,
              }}
              placeholder="이메일을 입력해 주세요."
            />
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              name="password"
              type="password"
              password
              register={register}
              errors={errors}
              rules={{
                required: "비밀번호를 입력해 주세요.",
              }}
              placeholder="비밀번호를 입력해 주세요."
            />
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
