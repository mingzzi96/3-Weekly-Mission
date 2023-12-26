import { isAccessTokenStored } from "./authCommon.js";

const loginButton = document.querySelector("header .gradient_btn");

const handleLoginButtonClick = () => {
    isAccessTokenStored()
        ? (window.location.href = "/folder.html")
        : (window.location.href = "/signin.html");
};

loginButton.addEventListener("click", handleLoginButtonClick);
