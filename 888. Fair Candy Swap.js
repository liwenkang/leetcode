const log = console.log.bind(console)

var sumArr = function (array) {
    return array.reduce((init, value) => init + value, 0)
}

var fairCandySwap = function (A, B) {
    var diff = (sumArr(A) - sumArr(B)) / 2
    // 两者的差值/2 就是A B两差值
    A = Array.from(new Set(A))
    B = Array.from(new Set(B))
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            if (A[i] - B[j] === diff) {
                return [A[i], B[j]]
            }
        }
    }
}

log(fairCandySwap([1, 1], [2, 2]))
log(fairCandySwap([1, 2], [2, 3]))
log(fairCandySwap([2], [1, 3]))
log(fairCandySwap([1, 2, 5], [2, 4]))