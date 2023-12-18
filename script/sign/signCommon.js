const formElement = document.querySelector("form");
const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");
const emailErrorMessage = document.querySelector("#email_error");
const passwordErrorMessage = document.querySelector("#pw_error");
const passwordShowButtonElement = document.querySelector("#eyePw");
const passwordConfirmInputElement = document.querySelector("#password_confirm");
const passwordInputContainer = document.querySelectorAll(".input_password");
const passwordConfirmErrorMessage = document.querySelector("#pwConfirm_error");
const passwordConfirmShowButtonElement =
    document.querySelector("#eyePwConfirm");

const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// input 눈 아이콘 및 input type 변경 기능
for (const pwInputContainerItem of pwInputContainer) {
    pwInputContainerItem.addEventListener("click", function (e) {
        if (e.target.classList.contains("eye")) {
            // 클릭된 target이 eye 라는 클래스를 가지고 있을때만 실행
            const inputType = "password";
            const selectedInput = e.currentTarget.querySelector("input");
            // 선택된 pwInputContainer에 on 클래스 추가하여 눈 모양 아이콘 제어
            e.currentTarget.classList.toggle("on");
            // 선택된 pwInputContainer에 있는 Input의 type을 수정
            selectedInput.type === inputType
                ? (selectedInput.type = "text")
                : (selectedInput.type = inputType);
        }
    });
}

export {
    formElement,
    emailInputElement,
    pwInputElement,
    emailErrorMessage,
    pwErrorMessage,
    pwShowButtonElement,
    pwConfirmInputElement,
    pwConfirmErrorMessage,
    pwConfirmShowButtonElement,
    pwInputContainer,
    emailRegex,
    pwRegex,
};
