const formEl = document.querySelector("form");
const emailInputEl = document.querySelector("#email");
const pwInputEl = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const pwErrorMessage = document.querySelector("#pw_error");
const submitButtonEl = document.querySelector("#formSubmit");
const pwShowButtonEl = document.querySelector("#eyePw");
const pwConfirmInputEl = document.querySelector("#password_confirm");
const pwConfirmErrorMessage = document.querySelector("#pwConfirm_error");
const pwConfirmShowButtonEl = document.querySelector("#eyePwConfirm");

const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const handlePasswordShow = (e) => {
    // input type password 를 text로 바꿔준다.
    let pwInputElSaved = "password";
    pwInputEl.type === pwInputElSaved
        ? (pwInputEl.type = "text")
        : (pwInputEl.type = "password");
    e.target.classList.toggle("on");
};

const handlePasswordConfirmShow = (e) => {
    // input #passwordConfirm의 type을 text로 바꿔준다.
    let pwInputElSaved = "password";
    pwConfirmInputEl.type === pwInputElSaved
        ? (pwConfirmInputEl.type = "text")
        : (pwConfirmInputEl.type = "password");
    e.target.classList.toggle("on");
};

export {
    formEl,
    emailInputEl,
    pwInputEl,
    emailErrorMessage,
    pwErrorMessage,
    submitButtonEl,
    pwShowButtonEl,
    pwConfirmInputEl,
    pwConfirmErrorMessage,
    pwConfirmShowButtonEl,
    emailRegex,
    pwRegex,
    handlePasswordShow,
    handlePasswordConfirmShow,
};
