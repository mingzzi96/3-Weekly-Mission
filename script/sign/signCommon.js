const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

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

export { emailRegex, passwordRegex, passwordTypeControl };
