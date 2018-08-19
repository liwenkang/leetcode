const log = console.log.bind(console)

function smallToBigSortArr(array) {
    var newArray = array.slice()
    newArray.sort((a, b) => a - b)
    return newArray
}

function bigToSmallSortArr(array) {
    var newArray = array.slice()
    newArray.sort((a, b) => b - a)
    return newArray
}

function swap(array, i, j) {
    var tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
    return array
}

var nextPermutation = function (nums) {
    var bigestNum = parseInt(bigToSmallSortArr(nums).join(""))
    var num = parseInt(nums.join(""))
    var result
    if (bigestNum === num) {
        // 直接输出最小
        result = smallToBigSortArr(nums)
    } else {
        // 找出大一点的那个
        var length = nums.length
        var index = 1
        while (nums[length - 1] <= nums[length - index - 1]) {
            // 直接换掉就行
            index++
        }
        result = nums.slice(0, length - index - 1).concat(nums.pop(), nums.slice(length - index - 1))
    }
    for (var i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }
    return nums
}
log(nextPermutation([1, 3, 2]), [2, 1, 3])
log(nextPermutation([3, 2, 1]), [1, 2, 3])
log(nextPermutation([1, 1, 5]), [1, 5, 1])



