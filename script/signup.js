const emailInputEl = document.querySelector("#email");
const pwInputEl = document.querySelector("#password");
const pwConfirmInputEl = document.querySelector("#password_confirm");
const emailErrorMessage = document.querySelector("#email_error");
const pwErrorMessage = document.querySelector("#pw_error");
const pwConfirmErrorMessage = document.querySelector("#pwConfirm_error");

const emailFocusOutCheck = (e) => {
    let target = e.target;

    // email 입력이 되어있지 않은 경우 에러 표시
    if (target.value.length <= 0) {
        emailInputEl.classList.add("error");
        emailErrorMessage.textContent = "이메일을 입력해주세요.";
        emailErrorMessage.classList.add("show");
    } else {
        emailInputEl.classList.remove("error");
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("show");
    }
};

const passwordFocusOutCheck = (e) => {
    let target = e.target;
    if (target.value.length <= 0) {
        pwInputEl.classList.add("error");
        pwErrorMessage.classList.add("show");
    } else {
        pwInputEl.classList.remove("error");
        pwErrorMessage.classList.remove("show");
    }
};

const passwordConfirmFocusOutCheck = (e) => {
    let target = e.target;
    if (target.value.length <= 0) {
        pwConfirmInputEl.classList.add("error");
        pwConfirmErrorMessage.classList.add("show");
    } else {
        pwConfirmInputEl.classList.remove("error");
        pwConfirmErrorMessage.classList.remove("show");
    }
};

emailInputEl.addEventListener("focusout", emailFocusOutCheck);
pwInputEl.addEventListener("focusout", passwordFocusOutCheck);
pwConfirmInputEl.addEventListener("focusout", passwordConfirmFocusOutCheck);
