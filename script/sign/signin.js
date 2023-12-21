import {
    passwordTypeControl,
    checkEmailLength,
    checkEmailRegex,
    hideErrorMessage,
    showErrorMessage,
    checkPasswordLength,
    checkEmailExist,
    checkPasswordExist,
} from "./signCommon.js";

const formElement = document.querySelector("#form");
const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");
const emailErrorMessageContainer = document.querySelector("#email_error");
const passwordErrorMessageContainer = document.querySelector("#pw_error");

// 눈 아이콘과 input type 변경해주는 event 전달
const handleInputTypeClick = (e) => {
    passwordTypeControl(e);
};

const handleEmailFocusOut = (e) => {
    // 이메일 focus out 기능 구현
    const emailValue = e.target.value;

    try {
        if (!checkEmailLength(emailValue)) {
            // email 입력이 되어있지 않은 경우 에러 표시
            throw new Error("이메일을 입력해주세요.");
        }

        if (!checkEmailRegex(emailValue)) {
            // 이메일 형식이 아닐 경우 에러 표시
            throw new Error("올바른 이메일 주소가 아닙니다.");
        }
        hideErrorMessage(emailInputElement, emailErrorMessageContainer);
    } catch (error) {
        showErrorMessage(
            emailInputElement,
            emailErrorMessageContainer,
            error.message
        );
    }
};

const handlePasswordFocusOut = (e) => {
    // 비밀번호 focus out 기능 구현
    const passwordValue = e.target.value;
    try {
        if (!checkPasswordLength(passwordValue)) {
            // 비밀번호 값이 없을 경우 에러 표시
            throw new Error("비밀번호를 입력해주세요.");
        }
        hideErrorMessage(passwordInputElement, passwordErrorMessageContainer);
    } catch (error) {
        showErrorMessage(
            passwordInputElement,
            passwordErrorMessageContainer,
            error.message
        );
    }
};

const handleSubmit = (e) => {
    // submit 버튼 기능 구현
    const emailValue = emailInputElement.value;
    const passwordValue = passwordInputElement.value;

    e.preventDefault();

    if (!checkEmailExist(emailValue)) {
        // emailValid가 false일때 동작
        emailInputElement.focus();
        showErrorMessage(
            emailInputElement,
            emailErrorMessageContainer,
            "이메일을 확인해 주세요."
        );
        return;
    }

    if (!checkPasswordExist(passwordValue)) {
        // passwordValid가 false일때 동작
        passwordInputElement.focus();
        showErrorMessage(
            passwordInputElement,
            passwordErrorMessageContainer,
            "비밀번호를 확인해 주세요."
        );
        return;
    }
    hideErrorMessage(emailInputElement, emailErrorMessageContainer);
    hideErrorMessage(passwordInputElement, passwordErrorMessageContainer);

    e.currentTarget.submit();
};

emailInputElement.addEventListener("focusout", handleEmailFocusOut);
passwordInputElement.addEventListener("focusout", handlePasswordFocusOut);
formElement.addEventListener("submit", handleSubmit);
formElement.addEventListener("click", handleInputTypeClick);
