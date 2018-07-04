const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumArr = function (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
var pivotIndex = function (nums) {
    //
    for (var i = 0; i < nums.length; i++) {
        var arr1 = nums.slice(0, i)
        var arr2 = nums.slice(i + 1)
        if(sumArr(arr1) === sumArr(arr2)) {
            log(i)
            return
        }
    }
    log(-1)
    return -1
}

pivotIndex([1, 7, 3, 6, 5, 6])
pivotIndex([1, 2, 3])