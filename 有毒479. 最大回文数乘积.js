const log = console.log.bind(console)

var isPalindrome = function (x) {
    var arr = x.toString().split("")
    var y = parseInt(arr.reverse().join(""))
    return x === y
}


var largestPalindrome = function (n) {
    // n 是 2 就从 99 开始往下
    var maxNum = Math.pow(10, n) - 1
    var minNum = Math.pow(10, n - 1)
    for (var i = maxNum; i >= minNum; i--) {
        for (var j = maxNum; j >= minNum; j--) {
            if (isPalindrome(i * j)) {
                if (i * j > Number.MAX_SAFE_INTEGER) {
                    log(false)
                    return
                } else {
                    log((i * j) % 1337)
                    return
                }
            }
        }
    }
}

largestPalindrome(1)
largestPalindrome(2)
largestPalindrome(3)
// largestPalindrome(4)
// largestPalindrome(5)
// largestPalindrome(6)
// largestPalindrome(7)
// largestPalindrome(8)

9, 987, 123, 597, 677, 1218, 877, 475
9, 987, 1164, 597, 742, 1218