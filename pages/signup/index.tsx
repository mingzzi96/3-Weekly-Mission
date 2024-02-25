import styles from "@/styles/sign.module.css";
import global from "@/styles/global.module.css";
import Input from "@/components/ui/atoms/input/Input";
import logoIcon from "@/public/assets/images/logos/logo.svg";
import kakaoIcon from "@/public/assets/images/icons/kakao-login-icon.svg";
import googleIcon from "@/public/assets/images/icons/google-login-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { emailPattern, passwordPattern } from "@/utils/regex/checkRegex";
import { postSignUp } from "@/api/postSignUp";
import { useRouter } from "next/router";
import { postEmailCheck } from "@/api/postEmailCheck";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({ mode: "onBlur", shouldFocusError: true });

  const handleSubmitRegister: SubmitHandler<FieldValues> = async (data) => {
    const result = await postSignUp(data.email, data.password);
    if (result !== 200) {
      return alert("입력 정보를 다시 한번 확인해 주세요.");
    }
    if (result.data.accessToken) {
      localStorage.setItem("accessToken", result.data.accessToken);
      router.push("/");
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
              <p>이미 회원이신가요?</p>
              <Link href="../signin/">로그인 하기</Link>
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
              placeholder="이메일을 입력해 주세요."
              rules={{
                required: "이메일을 입력해 주세요.",
                pattern: emailPattern,
                validate: {
                  checkEmailExist: async (value) => {
                    const result = await postEmailCheck(value);
                    return result !== 409 || "이미 사용 중인 이메일입니다.";
                  },
                },
              }}
            />
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              name="password"
              type="password"
              password
              register={register}
              errors={errors}
              placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              rules={{
                required: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
                pattern: passwordPattern,
              }}
            />
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <Input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              password
              register={register}
              errors={errors}
              placeholder="비밀번호와 일치하는 값을 입력해 주세요."
              rules={{
                required: "비밀번호와 일치하는 값을 입력해 주세요.",
                validate: {
                  matchPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "비밀번호가 일치하지 않습니다";
                  },
                },
              }}
            />
            <button
              className={`${global.button} ${global.gradation}`}
              type="submit"
            >
              회원가입
            </button>
          </form>
          <div className={`${global.snsBox} ${styles.snsBox}`}>
            <p>다른 방식으로 가입하기</p>
            <div className={global.snsIconGroup}>
              <Link href="https://www.google.com">
                <Image src={kakaoIcon} alt="카카오톡으로 가입하려면 클릭" />
              </Link>
              <Link href="https://www.kakaocorp.com/page">
                <Image src={googleIcon} alt="구글 계정으로 가입하려면 클릭" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
