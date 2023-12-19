import { emailRegex, passwordTypeControl } from "./signCommon.js";

const formElement = document.querySelector("#form");
const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const passwordErrorMessage = document.querySelector("#pw_error");

let emailValid = false;
let passwordValid = false;

const handleEmailFocusOut = (e) => {
    // 이메일 focus out 기능 구현
    const emailValue = e.target.value;

    try {
        if (emailValue.length <= 0) {
            // email 입력이 되어있지 않은 경우 에러 표시
            throw new Error("이메일을 입력해주세요.");
        }

        if (!emailRegex.test(emailValue)) {
            // 이메일 형식이 아닐 경우 에러 표시
            throw new Error("올바른 이메일 주소가 아닙니다.");
        }
        hideEmailError();
    } catch (error) {
        showEmailError(error.message);
    }
};

const showEmailError = (message) => {
    emailValid = false;
    emailInputElement.classList.add("error");
    emailErrorMessage.classList.add("show");
    emailErrorMessage.textContent = message;
};

const hideEmailError = () => {
    emailValid = true;
    emailInputElement.classList.remove("error");
    emailErrorMessage.classList.remove("show");
    emailErrorMessage.textContent = "";
};

const handlePasswordFocusOut = (e) => {
    // 비밀번호 focus out 기능 구현
    const passwordValue = e.target.value;
    try {
        if (passwordValue.length <= 0) {
            // 비밀번호 값이 없을 경우 에러 표시
            throw new Error("비밀번호를 입력해주세요.");
        }
        hidePasswordError();
    } catch (error) {
        showPasswordError(error.message);
    }
};

const showPasswordError = (message) => {
    passwordValid = false;
    passwordInputElement.classList.add("error");
    passwordErrorMessage.classList.add("show");
    passwordErrorMessage.textContent = message;
};

const hidePasswordError = () => {
    passwordValid = true;
    passwordInputElement.classList.remove("error");
    passwordErrorMessage.classList.remove("show");
    passwordErrorMessage.textContent = "";
};

const handleSubmit = (e) => {
    // submit 버튼 기능 구현
    e.preventDefault();
    if (!emailValid) {
        // emailValid가 false일때 동작
        emailInputElement.focus();
        emailInputElement.classList.add("error");
        emailErrorMessage.textContent = "이메일을 확인해 주세요.";
        emailErrorMessage.classList.add("show");
    }

    if (!passwordValid) {
        // passwordValid가 false일때 동작
        passwordInputElement.focus();
        passwordInputElement.classList.add("error");
        passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
        passwordErrorMessage.classList.add("show");
    }

    if (
        emailInputElement.value === "test@codeit.com" &&
        passwordInputElement.value === "codeit101"
    ) {
        // 문제 없다면 페이지 이동시킴
        e.currentTarget.submit();
    }
};

const handleInputTypeClick = (e) => {
    // 눈 아이콘과 input type 변경해주는 event 전달
    passwordTypeControl(e);
};

emailInputElement.addEventListener("focusout", handleEmailFocusOut);
passwordInputElement.addEventListener("focusout", handlePasswordFocusOut);
formElement.addEventListener("submit", handleSubmit);
formElement.addEventListener("click", handleInputTypeClick);
