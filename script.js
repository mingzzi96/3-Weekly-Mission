function solution(arr, idx) {
    for(i=idx; i < arr.length; i++){
        const nowNum = arr[i]
        if (nowNum === 1) return i
    }
    return -1
}

solution([0, 0, 0, 1], 1)