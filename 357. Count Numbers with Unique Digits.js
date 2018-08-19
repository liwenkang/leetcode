const log = console.log.bind(console)

var countNumbersWithUniqueDigits = function (n) {
    // 无           0
    // 0 ~ 9        10个
    // 10 ~ 99      9 * 9 = 81
    // 100 ~ 999    81 * 8 = 648
    // 1000 ~ 9999  648 * 7 = 4536
    if (n === 0) {
        return 10
    }
    // 10 ~ 99 这个阶段
    // 就相当于 1 ~ 9 后面加上 0 ~ 9
    // 10  20
    //     21
    // 12
    // 13  23
    // 14  24
    // 15  25
    // 16  26
    // 17  27
    // 18  28
    // 19  29
    // 9 * 9
    var ans = 10, base = 9
    for (var i = 2; i <= n && i <= 10; i++) {
        base = base * (9 - i + 2)
        ans += base
    }
    return ans
}

log(countNumbersWithUniqueDigits(8))