const formElement = document.querySelector("#form");
const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");
import {
    emailRegex,
    passwordRegex,
    passwordTypeControl,
} from "./signCommon.js";
const emailErrorMessage = document.querySelector("#email_error");
const passwordErrorMessage = document.querySelector("#pw_error");
const passwordConfirmInputElement = document.querySelector("#password_confirm");
const passwordConfirmErrorMessage = document.querySelector("#pwConfirm_error");
let emailValid = false;
let passwordValid = false;
let passwordConfirmValid = true;

const handleEmailFocusOut = (e) => {
    const emailValue = e.target.value;

    try {
        if (emailValue.length === 0) {
            throw new Error("이메일을 입력해주세요.");
        }
        if (!emailRegex.test(emailValue)) {
            throw new Error("올바른 이메일 주소가 아닙니다.");
        }
        if (emailValue === "test@codeit.com") {
            throw new Error("이미 사용중인 이메일 주소입니다.");
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
    const passwordValue = e.target.value;

    try {
        if (passwordValue.length === 0) {
            throw new Error("비밀번호를 입력해주세요.");
        }

        if (passwordRegex.test(passwordValue) === false) {
            throw new Error(
                "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
            );
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

const handlePasswordConfirmFocusOut = (e) => {
    const passwordConfirmValue = e.target.value;

    try {
        if (passwordConfirmValue.length === 0) {
            throw new Error("비밀번호를 입력해주세요.");
        }

        if (passwordRegex.test(passwordConfirmValue) === false) {
            throw new Error("비밀번호가 일치하지 않습니다.");
        }
        hidePasswordConfirmError();
    } catch (error) {
        showPasswordConfirmError(error.message);
    }
};

const showPasswordConfirmError = (message) => {
    passwordConfirmValid = false;
    passwordConfirmInputElement.classList.add("error");
    passwordConfirmErrorMessage.classList.add("show");
    passwordConfirmErrorMessage.textContent = message;
};

const hidePasswordConfirmError = () => {
    passwordConfirmValid = true;
    passwordConfirmInputElement.classList.remove("error");
    passwordConfirmErrorMessage.classList.remove("show");
    passwordConfirmErrorMessage.textContent = "";
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

    if (!passwordConfirmValid) {
        // passwordConfirmValid가 false일때 동작
        passwordConfirmInputElement.focus();
        passwordConfirmInputElement.classList.add("error");
        passwordConfirmErrorMessage.textContent = "비밀번호를 확인해 주세요.";
        passwordConfirmErrorMessage.classList.add("show");
    }

    // 문제 없다면 페이지 이동시킴
    e.currentTarget.submit();
};

const handleInputTypeClick = (e) => {
    // 눈 아이콘과 input type 변경해주는 event 전달
    passwordTypeControl(e);
};

emailInputElement.addEventListener("focusout", handleEmailFocusOut);
passwordInputElement.addEventListener("focusout", handlePasswordFocusOut);
passwordConfirmInputElement.addEventListener(
    "focusout",
    handlePasswordConfirmFocusOut
);
formElement.addEventListener("submit", handleSubmit);
formElement.addEventListener("click", handleInputTypeClick);
