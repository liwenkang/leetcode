const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var arr = nums.join("").split("0")
    var big = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > big) {
            big = arr[i].length
        }
    }
    // log(big)
    return big
}

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])