function checkAccessTokenExist() {
    return localStorage.getItem("accessToken") !== null ? true : false;
}

export { checkAccessTokenExist };
