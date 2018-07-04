const log = console.log.bind(console)

var guess = function (num) {
    if (num < 10) {
        return -1
    } else if (num > 10) {
        return 1
    } else {
        return 0
    }
}

var guessNumber = function (num) {
    // 1 ~ num
    var low = 1
    var high = num

    if (guess(high) === 0) {
        log("ok", high)
        return true
    }

    var mid = parseInt((low + high) / 2)

    while (true) {
        if (guess(mid) === -1) {
            // 小, 向后
            for (var i = mid; ; i++) {
                if (guess(i) === 0) {
                    log("i",i)
                    return i
                }
            }
        } else if (guess(mid) === 1) {
            // 大, 向前
            high = mid
            mid = parseInt((low + high) / 2)
            log("向前", mid)
        } else if (guess(mid) === 0) {
            log("ok", mid)
            return true
        }
    }
}

guessNumber(5)
