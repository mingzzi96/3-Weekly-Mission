const emailInputEl = document.querySelector("#email");
const pwInputEl = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const pwErrorMessage = document.querySelector("#pw_error");

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

emailInputEl.addEventListener("focusout", emailFocusOutCheck);
pwInputEl.addEventListener("focusout", passwordFocusOutCheck);
