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
};
