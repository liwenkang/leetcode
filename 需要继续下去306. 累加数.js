const log = console.log.bind(console)

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    for (var i = 1; i < num.length; i++) {
        // i 表示的是 第一位的位数
        if (num[0] !== "0") {
            var a = parseInt(num.slice(0, i))
        } else {
            var a = 0
        }
        for (var j = 1; j < num.length; j++) {
            // j 表示的是第二位的位数
            if (num[i] !== "0") {
                var b = parseInt(num.slice(i, i + j))
            } else {
                var b = 0
            }

            if (b.toString().length !== (b + 1).toString().length) {
                // 进位
                if (i + j < num.length) {
                    if ((a + b).toString() === num.slice(i + j, i + j + (a + b).toString().length)) {
                        log(a)
                        log(b)
                        return true
                    }
                }
            } else {
                // 没有进位
                if (i + j < num.length) {
                    if ((a + b).toString() === num.slice(i + j, i + j + (a + b).toString().length)) {
                        log(a)
                        log(b)
                        return true
                    }
                }
            }
        }
    }
    return false
}

log(isAdditiveNumber("120122436"))
