import {
    formElement,
    emailInputElement,
    passwordInputElement,
    emailErrorMessage,
    passwordErrorMessage,
    emailRegex,
} from "./signCommon.js";
let emailValid = false;
let passwordValid = false;

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
    } else {
        passwordValid = true;
    }

    // 중복되는 css 제어 한 블럭에 모으기
    if (!passwordValid) {
        passwordInputElement.classList.add("error");
        passwordErrorMessage.classList.add("show");
    } else {
        passwordInputElement.classList.remove("error");
        passwordErrorMessage.textContent = "";
        passwordErrorMessage.classList.remove("show");
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
        }

        if (!passwordValid) {
            // passwordValid가 false일때 동작
            passwordInputElement.focus();
            passwordInputElement.classList.add("error");
            passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
            passwordErrorMessage.classList.add("show");
            passwordValid = false;
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
formElement.addEventListener("submit", handleSubmit);
