function solution(n) {
    answer = []
    for(i=1; i <= n; i++){
        if(n%i === 0) {
            answer.push(i)
            console.log(i)
        }
    }
}
// solution([9, -1, 0]);
solution(20);