const log = console.log.bind(console)

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    var count = 0
    for (var i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            var flag = 0
            var temp = count
            for (var j = 1; ; j++) {
                if (ops[i - j]) {
                    count += ops[i - j]
                    flag++
                }
                if (flag === 2) {
                    break
                }
            }
            ops[i] = count - temp
        } else if (ops[i] === "D") {
            var flag = 0
            for (var j = 1; ; j++) {
                if (ops[i - j]) {
                    count += (ops[i - j] * 2)
                    ops[i] = ops[i - j] * 2
                    // 前一轮有效 回合得分的两倍。
                    break
                }
            }
        } else if (ops[i] === "C") {
            var flag = 0
            for (var j = 1; ; j++) {
                if (ops[i - j]) {
                    count -= ops[i - j]
                    ops[i] = undefined
                    ops[i - j] = undefined
                    flag++
                }
                if (flag === 1) {
                    break
                }
            }
        } else {
            ops[i] = parseInt(ops[i])
            count += ops[i]
        }
    }
    return count
}

calPoints(["1", "2", "3", "4", "C", "C", "D"])

//, "-534", "5898", "-19769", "13074", "-17065", "22139", "28093", "D", "+", "-22768", "9116", "C", "C", "-2035", "D", "25271", "-8145", "16575", "+", "-17996"