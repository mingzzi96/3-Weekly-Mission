function solution(my_string, s, e) {
    var answer = "";
    console.log([...my_string].slice(s, e).reverse().join(""));
    console.log(my_string.slice(s, e, ""));
    return answer;
}

solution("Progra21Sremm3", 6, 12);
