import {
    passwordTypeControl,
    showErrorMessage,
    hideErrorMessage,
    checkEmailRegex,
    checkPasswordRegex,
    checkEmailLength,
    checkPasswordLength,
    checkPasswordConfirmLength,
    hasEmail,
    checkPasswordMatch,
} from "./signCommon.js";
const formElement = document.querySelector("#form");
const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");
const passwordConfirmInputElement = document.querySelector("#password_confirm");
const emailErrorMessageContainer = document.querySelector("#email_error");
const passwordErrorMessageContainer = document.querySelector("#pw_error");
const passwordConfirmErrorMessageContainer =
    document.querySelector("#pwConfirm_error");

// 눈 아이콘과 input type 변경해주는 event 전달
const handleInputTypeClick = (e) => {
    passwordTypeControl(e);
};

const handleEmailFocusOut = async (e) => {
    const emailValue = e.target.value;

    try {
        if (!checkEmailLength(emailValue)) {
            throw new Error("이메일을 입력해주세요.");
        }
        if (!checkEmailRegex(emailValue)) {
            throw new Error("올바른 이메일 주소가 아닙니다.");
        }
        const isEmailExist = await hasEmail(emailValue);
        if (isEmailExist) {
            throw new Error("이미 사용중인 이메일 주소입니다.");
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
    const passwordValue = e.target.value;

    try {
        if (!checkPasswordLength(passwordValue)) {
            throw new Error("비밀번호를 입력해주세요.");
        }
        if (!checkPasswordRegex(passwordValue)) {
            throw new Error(
                "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
            );
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

const handlePasswordConfirmFocusOut = (e) => {
    const passwordConfirmValue = e.target.value;

    try {
        if (!checkPasswordConfirmLength(passwordConfirmValue)) {
            throw new Error("비밀번호를 입력해주세요.");
        }

        if (
            !checkPasswordMatch(
                passwordInputElement.value,
                passwordConfirmValue
            )
        ) {
            throw new Error("비밀번호가 일치하지 않습니다.");
        }
        hideErrorMessage(
            passwordConfirmInputElement,
            passwordConfirmErrorMessageContainer
        );
    } catch (error) {
        showErrorMessage(
            passwordConfirmInputElement,
            passwordConfirmErrorMessageContainer,
            error.message
        );
    }
};

const handleSubmit = async (e) => {
    // submit 버튼 기능 구현
    const emailValue = emailInputElement.value;
    const passwordValue = passwordInputElement.value;
    const passwordConfirmValue = passwordConfirmInputElement.value;

    e.preventDefault();

    const isEmailExist = await hasEmail(emailValue);
    if (
        !checkEmailLength(emailValue) ||
        !checkEmailRegex(emailValue) ||
        isEmailExist
    ) {
        // emailValid가 false일때 동작
        emailInputElement.focus();
        showErrorMessage(
            emailInputElement,
            emailErrorMessageContainer,
            "이메일을 확인해 주세요."
        );
        return;
    }

    if (
        !checkPasswordLength(passwordValue) ||
        !checkPasswordRegex(passwordValue)
    ) {
        // passwordValid가 false일때 동작
        passwordInputElement.focus();
        showErrorMessage(
            passwordInputElement,
            passwordErrorMessageContainer,
            "비밀번호를 확인해 주세요."
        );
        return;
    }

    if (
        !checkPasswordConfirmLength(passwordConfirmValue) ||
        !checkPasswordMatch(passwordValue, passwordConfirmValue)
    ) {
        // passwordConfirmValid가 false일때 동작
        passwordConfirmInputElement.focus();
        showErrorMessage(
            passwordConfirmInputElement,
            passwordConfirmErrorMessageContainer,
            "비밀번호를 확인해 주세요."
        );
        return;
    }

    try {
        const response = await axios.post(
            "https://bootcamp-api.codeit.kr/api/sign-up",
            { email: emailValue, password: passwordValue },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = response.data;
        if (result.data.accessToken) {
            localStorage.setItem(
                "accessToken",
                JSON.stringify(result.data.accessToken)
            );
            window.location.href = "/folder.html";
        }
    } catch (error) {
        console.log(error);
    }
};

emailInputElement.addEventListener("focusout", handleEmailFocusOut);
passwordInputElement.addEventListener("focusout", handlePasswordFocusOut);
passwordConfirmInputElement.addEventListener(
    "focusout",
    handlePasswordConfirmFocusOut
);
formElement.addEventListener("click", handleInputTypeClick);
formElement.addEventListener("submit", handleSubmit);
