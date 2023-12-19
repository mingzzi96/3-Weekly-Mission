function passwordTypeControl(e) {
    if (e.target.classList.contains("eye")) {
        // 클릭된 target이 eye 라는 클래스를 가지고 있을때만 실행
        const inputType = "password";
        const closestInputContainer = e.target.closest(".input_password");
        const selectedInput = closestInputContainer.querySelector("input");
        // 선택된 pwInputContainer에 on 클래스 추가하여 눈 모양 아이콘 제어
        closestInputContainer.classList.toggle("on");
        // 선택된 pwInputContainer에 있는 Input의 type을 수정
        selectedInput.type === inputType
            ? (selectedInput.type = "text")
            : (selectedInput.type = inputType);
    }
}

function showErrorMessage(targetElement, errorContainer, errorMessage) {
    targetElement.classList.add("error");
    errorContainer.classList.add("show");
    errorContainer.textContent = errorMessage;
}

function hideErrorMessage(targetElement, errorContainer) {
    targetElement.classList.remove("error");
    errorContainer.classList.remove("show");
    errorContainer.textContent = "";
}

// email/password/passwordConfirm 길이 확인
function checkEmailLength(targetValue) {
    return targetValue.length <= 0 ? false : true;
}
function checkPasswordLength(targetValue) {
    return targetValue.length <= 0 ? false : true;
}
function checkPasswordConfirmLength(targetValue) {
    return targetValue.length <= 0 ? false : true;
}

// email/password 정규식 확인
function checkEmailRegex(targetValue) {
    const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(targetValue);
}

function checkPasswordRegex(targetValue) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    return passwordRegex.test(targetValue);
}

// email "test@codeit.com" 존재하는지 체크
function checkEmailExist(targetValue) {
    return targetValue === "test@codeit.com" ? true : false;
}

// password "codeit101" 존재하는지 체크
function checkPasswordExist(targetValue) {
    return targetValue === "codeit101" ? true : false;
}

// passwordConfirm이 password의 value와 같은지 확인하기
function checkPasswordMatch(passwordValue, passwordConfirmValue) {
    return passwordValue === passwordConfirmValue ? true : false;
}

export {
    passwordTypeControl,
    showErrorMessage,
    hideErrorMessage,
    checkEmailRegex,
    checkPasswordRegex,
    checkEmailLength,
    checkPasswordLength,
    checkPasswordConfirmLength,
    checkEmailExist,
    checkPasswordExist,
    checkPasswordMatch,
};
