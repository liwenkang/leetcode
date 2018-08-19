const log = console.log.bind(console)

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 输入: flowerbed = [1,0,0,0,1], n = 2
 * 输出: False
 */
var canPlaceFlowers = function (flowerbed, n) {
    var maxN = 0
    for (var i = 0; i < flowerbed.length; i++) {
        if ((flowerbed[i] === 0) &&
            (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
            (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)) {
            maxN++
            flowerbed[i] = 1
        }
    }
    return maxN >= n
}

canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)