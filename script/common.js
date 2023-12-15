const formEl = document.querySelector("form");
const emailInputEl = document.querySelector("#email");
const pwInputEl = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const pwErrorMessage = document.querySelector("#pw_error");
const submitButtonEl = document.querySelector("#formSubmit");
const pwShowButtonEl = document.querySelector("#eyePw");
const pwConfirmInputEl = document.querySelector("#password_confirm");
const pwInputContainer = document.querySelectorAll(".input_password");
const pwConfirmErrorMessage = document.querySelector("#pwConfirm_error");
const pwConfirmShowButtonEl = document.querySelector("#eyePwConfirm");

const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// input 눈 아이콘 및 input type 변경 기능
// 여긴 export 해주지 않았는데 어떻게 signin/signup 파일에 자동으로 적용되고 있는걸까요..?
for (let pwInputContainerItem of pwInputContainer) {
    pwInputContainerItem.addEventListener("click", function (e) {
        if (e.target.classList.contains("eye")) {
            // 클릭된 target이 eye 라는 클래스를 가지고 있을때만 실행
            let pwInputElSaved = "password";
            let pwChildNodesInput = e.currentTarget.childNodes[1];
            // 선택된 pwInputContainer에 on 클래스 추가하여 눈 모양 아이콘 제어
            e.currentTarget.classList.toggle("on");
            // 선택된 pwInputContainer에 있는 Input의 type을 수정
            pwChildNodesInput.type === pwInputElSaved
                ? (pwChildNodesInput.type = "text")
                : (pwChildNodesInput.type = pwInputElSaved);
        }
    });
}

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
    pwInputContainer,
    emailRegex,
    pwRegex,
};
