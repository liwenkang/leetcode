const log = console.log.bind(console)

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    var haveMoney = {
        "5": 0,
        "10": 0,
        "20": 0
    }
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            haveMoney[5]++
        }
        if (bills[i] === 10) {
            if (haveMoney[5] >= 1) {
                haveMoney[5]--
                haveMoney[10]++
            } else {
                return false
            }
        }
        if (bills[i] === 20) {
            haveMoney[20]++
            if (haveMoney[10] >= 1 && haveMoney[5] >= 1) {
                haveMoney[10] -= 1
                haveMoney[5] -= 1
            } else if (haveMoney[5] >= 3) {
                haveMoney[5] -= 3
            } else {
                // log("false2", false)
                return false
            }
        }
        // log("haveMoney", haveMoney)
    }
    return true
}

lemonadeChange([5, 5, 5, 10, 20])