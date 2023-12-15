import {
    formEl,
    emailInputEl,
    pwInputEl,
    emailErrorMessage,
    pwErrorMessage,
    pwShowButtonEl,
    submitButtonEl,
    pwConfirmInputEl,
    emailRegex,
    pwRegex,
    pwConfirmErrorMessage,
    pwConfirmShowButtonEl,
} from "./common.js";
let emailValid = false;
let pwValid = false;
let pwConfirmValid = false;
let pwInputValue = "";
let pwConfirmInputValue = "";

const handlePwInputValue = (e) => {
    // 이메일 입력 값 변수에 저장
    pwInputValue = e.target.value;
};

const checkPwConfirmInputValue = (e) => {
    // 비밀번호 확인 값 변수에 저장
    pwConfirmInputValue = e.target.value;
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
    } else if (targetValue === "test@codeit.com") {
        // test@codeit.com라면 이미 사용중인 이메일 표시
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

const handlepasswordConfirmFocusOut = (e) => {
    let target = e.target;
    if (target.value.length <= 0) {
        // 비밀번호 확인 값이 없을 경우 에러 표시
        pwConfirmInputEl.classList.add("error");
        pwConfirmErrorMessage.classList.add("show");
        pwConfirmValid = false;
    } else if (pwConfirmInputValue !== pwInputValue) {
        // 비밀번호와 비밀번호 확인 값이 다를 경우 에러 표시
        pwConfirmInputEl.classList.add("error");
        pwConfirmErrorMessage.textContent = "비밀번호가 일치하지 않아요.";
        pwConfirmErrorMessage.classList.add("show");
        pwConfirmValid = false;
    } else {
        pwConfirmInputEl.classList.remove("error");
        pwConfirmErrorMessage.classList.remove("show");
        pwConfirmValid = true;
    }
};

const handlePasswordShow = (e) => {
    // input #password의 type을 text로 바꿔준다.
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
        } else if (!pwConfirmValid) {
            // pwConfirmValid가 false일때 동작
            pwConfirmInputEl.focus();
            pwConfirmInputEl.classList.add("error");
            pwConfirmErrorMessage.textContent = "비밀번호를 확인해 주세요.";
            pwConfirmErrorMessage.classList.add("show");
            pwConfirmValid = false;
            return;
        }
        window.location.href = "/folder.html";
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
pwConfirmInputEl.addEventListener("focusout", handlepasswordConfirmFocusOut);
pwInputEl.addEventListener("keyup", handlePwInputValue);
pwConfirmInputEl.addEventListener("keyup", checkPwConfirmInputValue);
submitButtonEl.addEventListener("click", handleSubmit);
pwShowButtonEl.addEventListener("click", handlePasswordShow);
pwConfirmShowButtonEl.addEventListener("click", handlePasswordConfirmShow);
