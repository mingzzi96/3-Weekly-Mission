import { EMAIL_REGEX, PASSWORD_REGEX, API } from "../constants.js";

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

// email/password/passwordConfirm value 길이 확인
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
function validateEmailRegex(targetValue) {
    return EMAIL_REGEX.test(targetValue);
}

function validatePasswordRegex(targetValue) {
    return PASSWORD_REGEX.test(targetValue);
}

// email 중복 확인
async function hasEmail(targetValue) {
    try {
        const response = await axios.post(
            API + "api/check-email",
            { email: targetValue },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return false;
    } catch (error) {
        const errorResult = error.response;
        if (errorResult.status === 409) {
            return true;
        }
    }
}

// passwordConfirm이 password의 value와 같은지 확인하기
function validatePasswordMatch(passwordValue, passwordConfirmValue) {
    return passwordValue === passwordConfirmValue ? true : false;
}

export {
    passwordTypeControl,
    showErrorMessage,
    hideErrorMessage,
    validateEmailRegex,
    validatePasswordRegex,
    checkEmailLength,
    checkPasswordLength,
    checkPasswordConfirmLength,
    hasEmail,
    validatePasswordMatch,
};
