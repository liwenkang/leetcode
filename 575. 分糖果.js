const log = console.log.bind(console)

/**
 * @param {number[]} candies
 * @return {number}
 */

var compress = function (chars) {
    var noReapet = Array.from(new Set(chars))
    var result = []
    for (var i = 0; i < noReapet.length; i++) {
        var count = 0
        for (var j = 0; j < chars.length; j++) {
            if (noReapet[i] === chars[j]) {
                count++
            }
        }
        result.push(count)
    }

    var arr = []
    for (var i = 0; i < noReapet.length; i++) {
        arr.push([noReapet[i], result[i]])
    }
    return arr
}

var distributeCandies = function (candies) {
    // 弟弟有一半的糖
    // 妹妹有一半的糖
    var candyNum = candies.length
    var temp = compress(candies)
    if (temp.length >= candies.length / 2) {
        log("结果:",candies.length / 2)
        return candies.length / 2
    } else {
        log("种类不够丰富")
        log(temp.length)
        return temp.length
    }
}

distributeCandies([1, 2, 3, 4, 5, 6])
distributeCandies([1, 1, 1, 1, 1, 1, 2, 2])
distributeCandies([1, 1, 2, 3])
