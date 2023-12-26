function isAccessTokenStored() {
    return localStorage.getItem("accessToken") !== null ? true : false;
}

export { isAccessTokenStored };
