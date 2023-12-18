import {
    formEl,
    emailInputEl,
    pwInputEl,
    emailErrorMessage,
    pwErrorMessage,
    emailRegex,
    pwRegex,
} from "./signCommon.js";
let emailValid = false;
let pwValid = false;
let emailInputValue = "";
let pwInputValue = "";

const handleEmailInputValue = (e) => {
    // 이메일 입력 값 변수에 저장
    emailInputValue = e.target.value;
};

const handlePwInputValue = (e) => {
    // 비밀번호 입력 값 변수에 저장
    pwInputValue = e.target.value;
};

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
    } else if (
        emailInputValue === "test@codeit.com" &&
        pwInputValue === "codeit101"
    ) {
        // 특정 이메일과 비밀번호가 입력되면 emailValid ture 반환한다.
        emailValid = true;
    } else {
        emailValid = true;
    }

    // 중복되는 css 제어 한 블럭에 모으기
    if (!emailValid) {
        emailInputEl.classList.add("error");
        emailErrorMessage.classList.add("show");
    } else {
        emailInputEl.classList.remove("error");
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("show");
    }
};

const handlePasswordFocusOut = (e) => {
    // 비밀번호 focus out 기능 구현
    const target = e.target;
    if (target.value.length <= 0) {
        // 비밀번호 값이 없을 경우 에러 표시
        pwErrorMessage.textContent = "비밀번호를 입력해주세요.";
        pwValid = false;
    } else if (pwRegex.test(pwInputValue) === false) {
        // 영문, 숫자 조합 8자 이상의 값이 아닐 경우 에러 표시
        pwErrorMessage.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        pwValid = false;
    } else {
        pwValid = true;
    }

    // 중복되는 css 제어 한 블럭에 모으기
    if (!pwValid) {
        pwInputEl.classList.add("error");
        pwErrorMessage.classList.add("show");
    } else {
        pwInputEl.classList.remove("error");
        pwErrorMessage.textContent = "";
        pwErrorMessage.classList.remove("show");
    }
};

const handleSubmit = (e) => {
    // submit 버튼 기능 구현
    e.preventDefault();
    try {
        if (!emailValid) {
            // emailValid가 false일때 동작
            emailInputEl.focus();
            emailInputEl.classList.add("error");
            emailErrorMessage.textContent = "이메일을 확인해 주세요.";
            emailErrorMessage.classList.add("show");
            emailValid = false;
            return;
        } else if (!pwValid) {
            // pwValid가 false일때 동작
            pwInputEl.focus();
            pwInputEl.classList.add("error");
            pwErrorMessage.textContent = "비밀번호를 확인해 주세요.";
            pwErrorMessage.classList.add("show");
            pwValid = false;
            return;
        }
        // 문제 없다면 페이지 이동시킴
        formEl.action = "/folder.html";
        formEl.mothod = "GET";
        formEl.submit();
    } catch (error) {
        // error
        console.log(error);
    }
};

emailInputEl.addEventListener("focusout", handleEmailFocusOut);
pwInputEl.addEventListener("focusout", handlePasswordFocusOut);
emailInputEl.addEventListener("keyup", handleEmailInputValue);
pwInputEl.addEventListener("keyup", handlePwInputValue);
formEl.addEventListener("submit", handleSubmit);
