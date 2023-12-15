// * as "something" 이런식으로 가져오기도 하는 것 같은데
// 저는 가져온 변수들이 이 페이지에서 보였으면 좋겠어서 일일이 다 불러오게 되었습니다.
// 새로운 이름 지정해주고 객체로 뽑아오면 자꾸 파일 왔다갔다하면서 뭐가 있는지 확인하는게 귀찮을 것 같았어요.
// 어떤 방식이 더 나을까요?
import {
    formEl,
    emailInputEl,
    pwInputEl,
    emailErrorMessage,
    pwErrorMessage,
    pwShowButtonEl,
    submitButtonEl,
    emailRegex,
    pwRegex,
} from "./common.js";
import { handlePasswordShow } from "./common.js";
// let은 값이 변경될 수 있으니까 따로 export 해주지 않았습니다.
// 하지만 해당 변수들도 signin/signup에서 반복되는데 export 해주는게 좋을까요?
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
submitButtonEl.addEventListener("click", handleSubmit);
// input type password 를 text로 바꿔준다.
pwShowButtonEl.addEventListener("click", handlePasswordShow);
