const log = console.log.bind(console)
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var sortArray = function (array) {
    var tmp = array.slice()
    tmp.sort((a, b) => a - b)
    return tmp
}

var checkPossibility = function (nums) {
    // 移一个数字就递增
    var arr1 = nums.slice()
    var arr2 = nums.slice()

    for (var i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] > arr1[i + 1]) {
            arr1.splice(i, 1)
            break
        }
    }
    var str1 = arr1.join("")
    var sortStr1 = sortArray(arr1).join("")

    for (var i = 0; i < arr2.length - 1; i++) {
        if (arr2[i] > arr2[i + 1]) {
            arr2.splice(i + 1, 1)
            break
        }
    }
    var str2 = arr2.join("")
    var sortStr2 = sortArray(arr2).join("")

    return str1 === sortStr1 || str2 === sortStr2
}

log(checkPossibility([2, 3, 3, 2, 4]))
log(checkPossibility([4, 2, 3]))
log(checkPossibility([4, 2, 1]))