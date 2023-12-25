const EMAIL_REGEX =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const API = "https://bootcamp-api.codeit.kr/";

export { EMAIL_REGEX, PASSWORD_REGEX, API };
