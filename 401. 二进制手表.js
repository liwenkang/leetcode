var log = console.log.bind(console)

/**
 * @param {number} num
 * @return {string[]}
 */

var countOne = function (str) {
    if (str.length > 0) {
        var result = 0
        for (var i = 0; i < str.length; i++) {
            if (str[i] === "1") {
                result++
            }
        }
        return result
    }
    return 0
}

var readBinaryWatch = function (num) {


    var topNum = 2
    var bottomNum = num - topNum


    var topResult = []
    for (var i = 0; i < topNum; i++) {
        var topBinaryNum = i.toString(2)
        topResult.push(topBinaryNum)
    }

    var bottomResult = []
    for (var j = 0; j < bottomNum; j++) {
        var bottomBinaryNum = j.toString(2)
        bottomResult.push(bottomBinaryNum)
    }

    var topCountOneZero = []
    var topCountOneOne = []
    var topCountOneTwo = []
    var topCountOneThree = []

    for (var m = 0; m < 12; m++) {
        if (countOne(topResult[m]) === 0) {
            topCountOneZero.push(m)
        }
        if (countOne(topResult[m]) === 1) {
            topCountOneOne.push(m)
        }
        if (countOne(topResult[m]) === 2) {
            topCountOneTwo.push(m)
        }
        if (countOne(topResult[m]) === 3) {
            topCountOneThree.push(m)
        }
    }

    var bottomCountOneZero = []
    var bottomCountOneOne = []
    var bottomCountOneTwo = []
    var bottomCountOneThree = []
    var bottomCountOneFour = []
    var bottomCountOneFive = []

    for (var j = 0; j < 59; j++) {
        if (countOne(bottomResult[j]) === 0) {
            bottomCountOneZero.push(j)
        }
        if (countOne(bottomResult[j]) === 1) {
            bottomCountOneOne.push(j)
        }
        if (countOne(bottomResult[j]) === 2) {
            bottomCountOneTwo.push(j)
        }
        if (countOne(bottomResult[j]) === 3) {
            bottomCountOneThree.push(j)
        }
        if (countOne(bottomResult[j]) === 4) {
            bottomCountOneFour.push(j)
        }
        if (countOne(bottomResult[j]) === 5) {
            bottomCountOneFive.push(j)
        }
    }

    var topCountArr = []
    topCountArr.push(topCountOneZero)
    topCountArr.push(topCountOneOne)
    topCountArr.push(topCountOneTwo)
    topCountArr.push(topCountOneThree)

    var bottomCountArr = []
    bottomCountArr.push(bottomCountOneZero)
    bottomCountArr.push(bottomCountOneOne)
    bottomCountArr.push(bottomCountOneTwo)
    bottomCountArr.push(bottomCountOneThree)
    bottomCountArr.push(bottomCountOneFour)
    bottomCountArr.push(bottomCountOneFive)

    log(topCountArr)
    log(bottomCountArr)
    /* 两个数组自由组合 */
}

readBinaryWatch(5)