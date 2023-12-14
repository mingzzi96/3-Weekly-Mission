const emailInputEl = document.querySelector("#email");
const pwInputEl = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const pwErrorMessage = document.querySelector("#pw_error");

const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
let emailValid = false;
let pwValid = false;

const emailFocusOutCheck = (e) => {
    let target = e.target;
    let targetValue = target.value;

    // email 입력이 되어있지 않은 경우 에러 표시
    if (target.value.length <= 0) {
        emailInputEl.classList.add("error");
        emailErrorMessage.textContent = "이메일을 입력해주세요.";
        emailErrorMessage.classList.add("show");
        emailValid = false;
    } else if (emailRegex.test(targetValue) === false) {
        emailInputEl.classList.add("error");
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        emailErrorMessage.classList.add("show");
        emailValid = false;
    } else if (targetValue === "test@codeit.com") {
        emailInputEl.classList.add("error");
        emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
        emailErrorMessage.classList.add("show");
        emailValid = false;
    } else {
        emailInputEl.classList.remove("error");
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("show");
        emailValid = true;
    }
};

const passwordFocusOutCheck = (e) => {
    let target = e.target;
    let targetValue = target.value;
    if (target.value.length <= 0) {
        pwInputEl.classList.add("error");
        pwErrorMessage.textContent = "비밀번호를 입력해주세요.";
        pwErrorMessage.classList.add("show");
    } else if (pwRegex.test(targetValue) === false) {
        pwInputEl.classList.add("error");
        pwErrorMessage.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        pwErrorMessage.classList.add("show");
    } else {
        pwInputEl.classList.remove("error");
        pwErrorMessage.textContent = "";
        pwErrorMessage.classList.remove("show");
    }
};

emailInputEl.addEventListener("focusout", emailFocusOutCheck);
pwInputEl.addEventListener("focusout", passwordFocusOutCheck);
