const log = console.log.bind(console)

/*
* Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.*/

var getHint = function (secret, guess) {
    var countA = 0
    var countB = 0
    for (var i = 0; i < secret.length; i++) {
        // 猜对数字,且位置对
        if (secret[i] === guess[i]) {
            countA++
            secret = secret.slice(0, i) + secret.slice(i + 1)
            guess = guess.slice(0, i) + guess.slice(i + 1)
            i--
        }
    }
    // 先把 A 的数量算完
    for (var i = 0; i < secret.length; i++) {
        var index = secret.indexOf(guess[i])
        if (index >= 0) {
            countB++
            secret = secret.slice(0, index) + secret.slice(index + 1)
            guess = guess.slice(0, i) + guess.slice(i + 1)
            i--
        }
    }
    return countA + "A" + countB + "B"
}
getHint("1807", "7810")
getHint("1123",  "0111")