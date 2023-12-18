import {
    formElement,
    emailInputElement,
    passwordInputElement,
    emailErrorMessage,
    passwordErrorMessage,
    passwordConfirmInputElement,
    emailRegex,
    passwordRegex,
    passwordConfirmErrorMessage,
} from "./signCommon.js";
let emailValid = false;
let passwordValid = false;
let passwordConfirmValid = true;

const handleEmailFocusOut = (e) => {
    // 이메일 focus out 기능 구현
    const target = e.target;
    const targetValue = target.value;

    if (target.value.length <= 0) {
        // email 입력이 되어있지 않은 경우 에러 표시
        emailErrorMessage.textContent = "이메일을 입력해주세요.";
        emailValid = false;
    } else if (emailRegex.test(targetValue) === false) {
        // 이메일 형식이 아닐 경우 에러 표시
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        emailValid = false;
    } else if (targetValue === "test@codeit.com") {
        // test@codeit.com라면 이미 사용중인 이메일 표시
        emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
        emailValid = false;
    } else {
        emailValid = true;
    }

    // 중복되는 css 제어 한 블럭에 모으기
    if (!emailValid) {
        emailInputElement.classList.add("error");
        emailErrorMessage.classList.add("show");
    } else {
        emailInputElement.classList.remove("error");
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("show");
    }
};

const handlePasswordFocusOut = (e) => {
    // 비밀번호 focus out 기능 구현
    const target = e.target;
    if (target.value.length <= 0) {
        // 비밀번호 값이 없을 경우 에러 표시
        passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
        passwordValid = false;
    } else if (passwordRegex.test(target.value) === false) {
        // 영문, 숫자 조합 8자 이상의 값이 아닐 경우 에러 표시
        passwordInputElement.classList.add("error");
        passwordErrorMessage.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        passwordErrorMessage.classList.add("show");
        passwordValid = false;
    } else {
        passwordValid = true;
    }

    // 중복되는 css 제어 코드 한 블럭에 모으기
    if (!passwordValid) {
        passwordInputElement.classList.add("error");
        passwordErrorMessage.classList.add("show");
    } else {
        passwordInputElement.classList.remove("error");
        passwordErrorMessage.textContent = "";
        passwordErrorMessage.classList.remove("show");
    }
};

const handlePasswordConfirmFocusOut = (e) => {
    const target = e.target;
    if (target.value.length <= 0) {
        // 비밀번호 확인 값이 없을 경우 에러 표시
        passwordConfirmErrorMessage.textContent = "비밀번호를 확인해주세요.";
        passwordConfirmValid = false;
    } else {
        passwordConfirmValid = true;
    }

    // 중복되는 css 제어 코드 한 블럭에 모으기
    if (!passwordConfirmValid) {
        passwordConfirmInputElement.classList.add("error");
        passwordConfirmErrorMessage.classList.add("show");
    } else {
        passwordConfirmInputElement.classList.remove("error");
        passwordConfirmErrorMessage.classList.remove("show");
    }
};

const handleSubmit = (e) => {
    // submit 버튼 기능 구현
    e.preventDefault();
    try {
        if (!emailValid) {
            // emailValid가 false일때 동작
            emailInputElement.focus();
            emailInputElement.classList.add("error");
            emailErrorMessage.textContent = "이메일을 확인해 주세요.";
            emailErrorMessage.classList.add("show");
            emailValid = false;
            return;
        } else if (!passwordValid) {
            // passwordValid가 false일때 동작
            passwordInputElement.focus();
            passwordInputElement.classList.add("error");
            passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
            passwordErrorMessage.classList.add("show");
            passwordValid = false;
            return;
        } else if (!passwordConfirmValid) {
            // passwordConfirmValid가 false일때 동작
            passwordConfirmInputElement.focus();
            passwordConfirmInputElement.classList.add("error");
            passwordConfirmErrorMessage.textContent =
                "비밀번호를 확인해 주세요.";
            passwordConfirmErrorMessage.classList.add("show");
            passwordConfirmValid = false;
            return;
        }
        // 문제 없다면 페이지 이동시킴
        e.currentTarget.submit();
    } catch (error) {
        // error
        console.log(error);
    }
};

emailInputElement.addEventListener("focusout", handleEmailFocusOut);
passwordInputElement.addEventListener("focusout", handlePasswordFocusOut);
passwordConfirmInputElement.addEventListener(
    "focusout",
    handlePasswordConfirmFocusOut
);
formElement.addEventListener("submit", handleSubmit);
