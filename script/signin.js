const formEl = document.querySelector("form");
const emailInputEl = document.querySelector("#email");
const pwInputEl = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const pwErrorMessage = document.querySelector("#pw_error");
const submitButtonEl = document.querySelector("#formSubmit");
const pwShowButtonEl = document.querySelector("#eyePw");

const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
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
    let target = e.target;
    let targetValue = target.value;

    if (target.value.length <= 0) {
        // email 입력이 되어있지 않은 경우 에러 표시
        emailInputEl.classList.add("error");
        emailErrorMessage.textContent = "이메일을 입력해주세요.";
        emailErrorMessage.classList.add("show");
        emailValid = false;
    } else if (emailRegex.test(targetValue) === false) {
        // 이메일 형식이 아닐 경우 에러 표시
        emailInputEl.classList.add("error");
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        emailErrorMessage.classList.add("show");
        emailValid = false;
    } else if (
        emailInputValue === "test@codeit.com" &&
        pwInputValue === "codeit101"
    ) {
        // 특정 이메일과 비밀번호가 입력되면 emailValid ture 반환한다.
        emailValid = true;
    } else {
        emailInputEl.classList.remove("error");
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("show");
        emailValid = true;
    }
};

const handlePasswordFocusOut = (e) => {
    // 비밀번호 focus out 기능 구현
    let target = e.target;
    if (target.value.length <= 0) {
        // 비밀번호 값이 없을 경우 에러 표시
        pwInputEl.classList.add("error");
        pwErrorMessage.textContent = "비밀번호를 입력해주세요.";
        pwErrorMessage.classList.add("show");
        pwValid = false;
    } else if (pwRegex.test(pwInputValue) === false) {
        // 영문, 숫자 조합 8자 이상의 값이 아닐 경우 에러 표시
        pwInputEl.classList.add("error");
        pwErrorMessage.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        pwErrorMessage.classList.add("show");
        pwValid = false;
    } else {
        pwInputEl.classList.remove("error");
        pwErrorMessage.textContent = "";
        pwErrorMessage.classList.remove("show");
        pwValid = true;
    }
};

const handlePasswordShow = (e) => {
    // input type password 를 text로 바꿔준다.
    let pwInputElSaved = "password";
    pwInputEl.type === pwInputElSaved
        ? (pwInputEl.type = "text")
        : (pwInputEl.type = "password");
    e.target.classList.toggle("on");
};

const handleSubmit = () => {
    // submit 버튼 기능 구현
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
    } catch (error) {
        // error
        console.log(error);
    } finally {
        // 문제 없다면 페이지 이동시킴
        formEl.action = "/folder.html";
        formEl.mothod = "GET";
        formEl.submit();
    }
};

emailInputEl.addEventListener("focusout", handleEmailFocusOut);
pwInputEl.addEventListener("focusout", handlePasswordFocusOut);
emailInputEl.addEventListener("keyup", handleEmailInputValue);
pwInputEl.addEventListener("keyup", handlePwInputValue);
submitButtonEl.addEventListener("click", handleSubmit);
pwShowButtonEl.addEventListener("click", handlePasswordShow);