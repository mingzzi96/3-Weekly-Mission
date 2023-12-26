function isAccessTokenStored() {
    return localStorage.getItem("accessToken") !== null ? true : false;
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export { isAccessTokenStored, setLocalStorage };
