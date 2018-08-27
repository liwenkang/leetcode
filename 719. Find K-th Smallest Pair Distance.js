const log = console.log.bind(console)

var getAbsolute = function (arr) {
    return Math.abs(arr[0] - arr[1])
}

var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b)
    // 二分查找,从里向外添加
    log(nums)
}


log(smallestDistancePair([1, 2, 0, 2, 1, 0, 1, 1, 0, 2, 2, 0, 2, 0, 1, 1, 1, 0, 1, 0, 1, 1, 2, 2, 2, 2, 0, 0, 2, 1, 2, 1, 2, 0, 0, 0, 1, 0, 0, 1, 0, 2, 1, 1, 1, 1, 0, 2, 2, 1, 0, 2, 0, 2, 2, 2, 1, 0, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 2, 1, 2, 2, 1, 1, 0, 2, 0, 1, 0, 1, 1, 2, 0, 1, 1, 1, 1, 2, 0, 2, 2, 0, 0, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 0, 1, 2, 2, 1, 1, 2, 1, 0, 1, 1, 1, 0, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 2, 1, 2, 0, 0, 1, 0, 1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 1, 2, 2, 1, 1, 0, 1, 2, 0, 0, 2, 1, 2, 1, 2, 0, 2, 1, 1, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 2, 2, 0, 2, 2, 2, 0, 2, 0, 1, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 1, 0, 1, 0, 1, 1, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 0, 1, 1, 0, 2, 0, 1, 2, 2, 0, 1, 1, 2, 0, 0, 0, 2, 1, 0, 1, 0, 2, 1, 2, 0, 1, 2, 1, 1, 1, 0, 1, 2, 1, 2, 2, 1, 2, 0, 2, 1, 0, 1, 1, 1, 2, 0, 2, 2, 2, 2, 1, 0, 2, 2, 1, 1, 1, 1, 0, 1, 2, 2, 0, 1, 2, 2, 1, 0, 0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 2, 0, 2, 0, 1, 2, 2, 0, 2, 1, 2, 2, 0, 0, 0, 0, 2, 1, 1, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 0, 0, 2, 1, 2, 0, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 0, 1, 1, 2, 2, 1, 2, 2, 2, 1, 0, 1, 1, 1, 0, 0, 0, 2, 1, 1, 1, 2, 2, 1, 2, 0, 2, 1, 2, 0, 2, 2, 2, 1, 1, 2, 2, 0, 0, 2, 2, 2, 1, 2, 2, 1, 0, 2, 0, 2, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0, 1, 0, 2, 2, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 1, 1, 2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 2, 0, 1, 1, 0, 2, 1, 1, 1, 2, 1, 0, 0, 1, 0, 1, 0, 1, 2, 0, 2, 1, 0, 0, 1, 2, 1, 1, 0, 0, 0, 2, 2, 2, 1, 1, 2, 2, 0, 1, 0, 2, 2, 2, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 2, 0, 2, 1, 2, 2, 2, 0, 1, 0, 1, 2, 0, 2, 2, 1, 2, 0, 1, 2, 2, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 2, 1, 0, 0, 2, 0, 1, 0, 2, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 2, 2, 0, 2, 2, 0, 0, 1, 2, 0, 1, 1, 1, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 1, 0, 2, 2, 0, 0, 1, 1, 2, 2, 2, 1, 1, 2, 0, 1, 0, 0, 1, 0, 1, 2, 0, 1, 2, 0, 1, 1, 1, 1, 2, 0, 1, 0, 1, 2, 2, 0, 0, 2, 0, 1, 2, 1, 2, 1, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 2, 1, 1, 0, 0, 2, 2, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 2, 0, 1, 1, 2, 2, 1, 1, 0, 2, 0, 0, 1, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 2, 0, 1, 2, 2, 2, 0, 0, 0, 2, 2, 1, 2, 1, 0, 0, 0, 1, 1, 2, 1, 2, 0, 1, 2, 1, 0, 1, 2, 0, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2, 0, 2, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 2, 0, 2, 2, 2, 1, 0, 2, 2, 1, 1, 2, 0, 0, 1, 2, 2, 2, 1, 2, 1, 2, 1, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 2, 2, 2, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0, 2, 0, 1, 1, 1, 1, 2, 0, 1, 1, 2, 0, 2, 1, 2, 1, 1, 0, 1, 1, 2, 1, 2, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 2, 2, 1, 2, 0, 2, 2, 2, 0, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 1, 0, 2, 1, 2, 1, 1, 0, 2, 1, 2, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 2, 2, 1, 1, 0, 1, 0, 0, 0, 2, 2, 2, 0, 1, 2, 1, 2, 0, 2, 1, 0, 0, 1, 2, 2, 1, 0, 1, 2, 0, 0, 2, 1, 1, 2, 0, 0, 1, 0, 2, 2, 2, 2, 0, 1, 0, 0, 0, 1, 1, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 1, 0, 2, 2, 2, 1, 2, 0, 2, 2, 0, 2, 1, 2, 2, 0, 1, 0, 2, 0, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0, 2, 0, 2, 0, 1, 0, 1, 1, 2, 2, 1, 2, 1, 2, 0, 1, 2, 2, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 0, 2, 2, 2, 0, 1, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 2, 0, 0, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 1, 0, 1, 1, 0, 0, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 2, 0, 1, 0, 2, 2, 2, 0, 1, 0, 2, 1, 2, 2, 0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 0, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 0, 1, 2, 2, 0, 0, 2, 1, 0, 2, 1, 0, 2, 2, 0, 2, 1, 0, 2, 1, 0, 0, 0, 0, 2, 0, 1, 0, 2, 0, 1, 2, 2, 0, 1, 0, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 0, 1, 2, 2, 1, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0, 0, 2, 0, 2, 0, 1, 1, 0, 0, 2, 1, 0, 0, 1, 2, 0, 1, 0, 2, 1, 1, 1, 1, 2, 2, 0, 2, 2, 0, 1, 1, 2, 2, 0, 2, 0, 1, 0, 2, 0, 2, 2, 2, 1, 2, 2, 0, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 2, 1, 2, 1, 2, 2, 1, 1, 0, 2, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 2, 1, 1, 2, 2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 2, 2, 1, 2, 1, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 2, 1, 0, 2, 0, 2, 1, 1, 2, 0, 1, 1, 0, 2, 0, 1, 2, 2, 0, 0, 2, 0, 1, 1, 0, 2, 2, 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 2, 2, 1, 0, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 0, 1, 2, 0, 2, 1, 2, 1, 0, 2, 0, 1, 0, 0, 2, 1, 0, 0, 0, 2, 0, 0, 1, 2, 2, 0, 0, 1, 0, 1, 1, 2, 2, 2, 0, 2, 1, 0, 2, 0, 1, 2, 1, 0, 1, 1, 1, 2, 1, 0, 0, 0, 2, 1, 0, 2, 2, 0, 1, 0, 2, 0, 2, 2, 2, 0, 1, 2, 2, 2, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 2, 2, 2, 0, 1, 0, 0, 1, 2, 2, 2, 0, 1, 1, 1, 2, 0, 2, 1, 1, 2, 2, 1, 0, 1, 2, 0, 2, 1, 1, 0, 1, 1, 2, 0, 1, 0, 2, 1, 2, 0, 2, 2, 2, 2, 0, 2, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 2, 1, 2, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 0, 1, 2, 2, 0, 0, 1, 1, 0, 2, 0, 2, 1, 2, 0, 0, 2, 1, 0, 0, 0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 2, 1, 2, 0, 1, 1, 2, 0, 0, 2, 1, 0, 0, 2, 0, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 0, 1, 2, 0, 1, 2, 1, 2, 0, 2, 1, 0, 2, 1, 1, 2, 0, 2, 0, 1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 0, 1, 1, 1, 2, 0, 1, 2, 1, 1, 0, 2, 1, 0, 2, 0, 0, 0, 2, 1, 0, 1, 2, 0, 1, 0, 1, 1, 0, 0, 1, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 2, 0, 1, 0, 1, 0, 2, 1, 0, 2, 0, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 0, 1, 1, 0, 2, 0, 1, 2, 1, 2, 0, 0, 2, 2, 1, 2, 2, 1, 1, 0, 0, 0, 0, 2, 1, 0, 2, 2, 0, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 2, 0, 2, 0, 1, 2, 2, 1, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 1, 2, 1, 0, 2, 2, 1, 2, 0, 0, 2, 2, 2, 1, 1, 1, 2, 0, 0, 2, 0, 0, 2, 1, 2, 2, 2, 1, 0, 0, 1, 1, 1, 0, 0, 2, 0, 1, 1, 0, 0, 0, 1, 0, 2, 0, 0, 1, 1, 2, 0, 2, 0, 2, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 2, 1, 0, 1, 0, 1, 2, 0, 0, 1, 2, 0, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, 1, 2, 2, 1, 1, 0, 2, 2, 2, 2, 1, 2, 0, 2, 0, 2, 2, 1, 1, 0, 1, 0, 0, 1, 2, 2, 1, 1, 1, 0, 1, 0, 1, 2, 0, 2, 1, 2, 2, 0, 2, 2, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 2, 2, 0, 1, 2, 2, 1, 1, 2, 0, 1, 1, 1, 2, 0, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 0, 1, 2, 0, 1, 1, 1, 0, 2, 1, 2, 0, 0, 2, 1, 0, 1, 0, 2, 2, 2, 1, 1, 1, 2, 2, 0, 2, 1, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 1, 1, 2, 0, 2, 2, 0, 2, 1, 0, 0, 1, 1, 1, 1, 2, 1, 2, 0, 2, 0, 0, 0, 2, 2, 0, 0, 2, 1, 2, 1, 0, 1, 0, 2, 0, 1, 2, 0, 1, 2, 0, 1, 1, 1, 1, 0, 2, 2, 1, 0, 2, 1, 0, 2, 0, 1, 0, 0, 2, 1, 0, 1, 0, 2, 2, 2, 1, 2, 2, 0, 2, 1, 0, 2, 0, 2, 1, 1, 2, 0, 1, 2, 0, 0, 1, 1, 1, 0, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1, 0, 1, 2, 1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 2, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 0, 0, 0, 2, 1, 0, 1, 2, 0, 1, 1, 2, 1, 1, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 0, 1, 2, 2, 1, 0, 2, 2, 1, 2, 0, 1, 2, 2, 2, 0, 1, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 1, 2, 1, 2, 0, 1, 2, 2, 2, 2, 2, 0, 1, 0, 2, 2, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 0, 1, 1, 2, 0, 0, 1, 2, 0, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2, 0, 1, 2, 2, 1, 1, 0, 2, 1, 2, 1, 1, 1, 0, 2, 1, 0, 0, 2, 2, 2, 1, 0, 1, 2, 1, 2, 1, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 2, 2, 0, 0, 0, 1, 2, 0, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 0, 2, 1, 0, 2, 0, 1, 1, 0, 1, 2, 1, 1, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 2, 0, 1, 2, 1, 2, 2, 2, 2, 0, 2, 1, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 1, 2, 0, 1, 2, 0, 1, 2, 1, 1, 2, 1, 2, 2, 0, 1, 2, 2, 1, 2, 0, 1, 1, 0, 0, 0, 0, 1, 2, 2, 2, 0, 1, 0, 1, 0, 2, 1, 1, 0, 2, 1, 2, 1, 2, 0, 2, 0, 0, 1, 2, 0, 1, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 2, 0, 0, 0, 1, 0, 2, 0, 2, 0, 1, 1, 1, 0, 0, 0, 2, 0, 1, 2, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 0, 1, 0, 1, 1, 2, 1, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 2, 1, 0, 0, 1, 1, 1, 0, 2, 2, 0, 0, 1, 1, 2, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 0, 1, 0, 2, 1, 0, 0, 2, 0, 0, 1, 2, 1, 2, 1, 2, 0, 0, 1, 0, 2, 0, 0, 2, 0, 1, 1, 2, 2, 0, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0, 1, 2, 0, 1, 1, 1, 0, 1, 0, 2, 2, 0, 2, 1, 0, 0, 1, 2, 0, 0, 1, 0, 1, 0, 2, 2, 1, 0, 1, 2, 2, 0, 2, 2, 0, 0, 1, 1, 1, 2, 1, 2, 2, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 2, 1, 0, 2, 1, 2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 1, 0, 0, 2, 0, 2, 2, 1, 0, 2, 0, 2, 2, 1, 1, 2, 2, 2, 1, 0, 0, 1, 2, 1, 0, 1, 0, 2, 2, 1, 2, 1, 2, 0, 1, 0, 1, 2, 2, 1, 0, 2, 0, 2, 1, 0, 1, 2, 0, 0, 2, 2, 1, 1, 0, 0, 1, 2, 0, 2, 2, 1, 2, 1, 0, 1, 1, 0, 0, 2, 2, 2, 2, 2, 0, 1, 0, 1, 1, 1, 0, 1, 2, 1, 0, 2, 2, 0, 1, 1, 2, 0, 2, 2, 0, 2, 1, 1, 2, 2, 2, 1, 1, 0, 1, 0, 2, 2, 2, 2, 0, 2, 2, 1, 0, 0, 1, 1, 0, 1, 2, 1, 0, 0, 0, 2, 2, 0, 2, 0, 1, 2, 2, 1, 1, 1, 2, 0, 2, 0, 0, 1, 2, 0, 1, 1, 0, 1, 1, 1, 2, 0, 0, 0, 2, 1, 0, 2, 1, 2, 1, 0, 1, 1, 2, 2, 0, 1, 0, 2, 2, 2, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 0, 2, 1, 0, 0, 2, 0, 2, 0, 1, 1, 0, 0, 1, 2, 0, 2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 0, 1, 2, 2, 2, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 1, 1, 2, 2, 2, 0, 0, 2, 0, 1, 2, 2, 2, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 1, 1, 1, 1, 0, 2, 0, 2, 0, 0, 1, 2, 2, 1, 0, 2, 0, 1, 2, 2, 1, 2, 0, 0, 2, 0, 0, 1, 1, 1, 0, 2, 0, 2, 2, 2, 2, 1, 2, 2, 0, 1, 2, 2, 2, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 2, 2, 0, 1, 1, 2, 2, 2, 2, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 2, 2, 1, 1, 0, 2, 0, 2, 1, 0, 1, 2, 1, 1, 2, 1, 0, 0, 1, 2, 1, 1, 2, 2, 0, 1, 2, 0, 0, 0, 1, 1, 2, 0, 2, 1, 2, 0, 1, 0, 0, 0, 2, 0, 1, 1, 2, 2, 2, 0, 0, 0, 2, 2, 1, 0, 2, 1, 0, 0, 2, 1, 1, 2, 0, 2, 0, 2, 0, 1, 2, 2, 0, 0, 0, 2, 2, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 2, 1, 1, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 1, 0, 1, 2, 0, 0, 2, 1, 1, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 2, 2, 0, 2, 2, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2, 2, 0, 1, 1, 1, 1, 2, 1, 1, 0, 0, 2, 2, 0, 2, 1, 1, 1, 1, 2, 0, 2, 2, 2, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 2, 1, 1, 2, 2, 0, 1, 1, 0, 0, 1, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 1, 0, 0, 2, 0, 0, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 0, 2, 2, 2, 0, 0, 1, 0, 2, 0, 1, 2, 1, 0, 1, 1, 2, 2, 2, 2, 0, 0, 0, 2, 1, 1, 2, 0, 1, 1, 1, 0, 0, 0, 1, 0, 2, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 2, 2, 2, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1, 0, 2, 2, 2, 1, 1, 1, 0, 1, 0, 1, 1, 0, 2, 0, 0, 1, 2, 2, 1, 2, 0, 0, 0, 2, 2, 0, 1, 1, 0, 2, 0, 1, 2, 1, 0, 0, 0, 1, 1, 1, 2, 0, 1, 1, 1, 2, 1, 0, 2, 1, 0, 1, 0, 1, 2, 0, 1, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 0, 1, 1, 2, 0, 0, 1, 1, 0, 1, 1, 0, 2, 0, 1, 1, 2, 2, 1, 0, 2, 1, 2, 0, 0, 0, 2, 2, 2, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 2, 0, 2, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 2, 1, 1, 1, 2, 0, 2, 1, 1, 0, 0, 1, 2, 1, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 2, 0, 2, 2, 2, 0, 1, 0, 1, 2, 2, 0, 0, 2, 0, 0, 1, 0, 0, 1, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 1, 0, 2, 1, 0, 1, 1, 2, 1, 2, 1, 0, 2, 0, 1, 1, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 0, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 1, 0, 0, 2, 2, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 1, 0, 1, 1, 2, 2, 0, 1, 1, 2, 2, 1, 0, 2, 1, 1, 1, 2, 1, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 0, 2, 1, 0, 2, 1, 1, 0, 1, 0, 0, 2, 2, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 2, 2, 1, 0, 1, 1, 0, 2, 0, 2, 2, 1, 1, 1, 1, 0, 0, 2, 2, 1, 2, 0, 0, 2, 1, 0, 2, 1, 2, 1, 2, 1, 0, 2, 2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 2, 2, 2, 1, 0, 2, 0, 2, 2, 2, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 2, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 0, 1, 0, 0, 0, 1, 0, 1, 2, 2, 1, 2, 0, 1, 0, 2, 1, 0, 1, 2, 1, 1, 1, 2, 1, 0, 0, 2, 1, 1, 1, 0, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 0, 1, 1, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 0, 1, 2, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 1, 1, 2, 0, 1, 1, 2, 0, 0, 2, 2, 0, 0, 2, 0, 2, 2, 1, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 1, 2, 1, 0, 1, 2, 0, 2, 0, 2, 1, 0, 0, 0, 1, 2, 0, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 1, 2, 1, 1, 1, 2, 0, 2, 1, 0, 0, 0, 2, 2, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 1, 1, 1, 1, 0, 2, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 0, 0, 2, 0, 2, 2, 2, 0, 1, 2, 1, 0, 2, 0, 2, 2, 2, 0, 1, 1, 0, 2, 2, 2, 2, 0, 1, 2, 1, 2, 2, 1, 2, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, 0, 0, 2, 1, 1, 1, 0, 1, 2, 0, 1, 2, 0, 0, 1, 2, 0, 2, 0, 0, 2, 0, 2, 0, 1, 1, 1, 1, 1, 0, 2, 1, 1, 2, 2, 0, 0, 1, 2, 1, 2, 2, 1, 0, 2, 2, 2, 2, 2, 0, 1, 0, 0, 1, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 2, 2, 2, 1, 2, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 2, 2, 0, 0, 1, 2, 0, 2, 2, 1, 2, 0, 0, 1, 0, 1, 2, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 1, 1, 1, 1, 2, 0, 2, 2, 1, 2, 2, 1, 1, 0, 0, 1, 0, 2, 0, 1, 1, 1, 1, 2, 2, 0, 0, 1, 0, 1, 0, 2, 2, 2, 1, 0, 2, 2, 2, 0, 0, 2, 2, 1, 2, 2, 0, 2, 0, 2, 1, 0, 2, 0, 0, 1, 1, 1, 0, 2, 0, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 0, 1, 2, 0, 2, 0, 1, 2, 2, 1, 0, 1, 2, 1, 2, 1, 0, 2, 2, 2, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 0, 2, 0, 1, 2, 2, 0, 1, 2, 2, 2, 2, 0, 2, 1, 1, 2, 2, 2, 2, 1, 0, 1, 0, 2, 2, 0, 1, 0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 1, 0, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 0, 1, 1, 2, 0, 0, 0, 0, 2, 0, 0, 1, 2, 1, 2, 2, 2, 1, 0, 1, 1, 1, 1, 0, 0, 2, 0, 2, 1, 0, 2, 2, 1, 0, 0, 2, 1, 2, 2, 2, 1, 0, 2, 1, 0, 1, 2, 2, 0, 1, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 1, 2, 1, 1, 0, 1, 1, 0, 0, 1, 2, 0, 1, 2, 2, 0, 1, 0, 0, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 2, 0, 1, 1, 0, 1, 0, 1, 2, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 1, 0, 1, 2, 2, 0, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 2, 2, 1, 2, 0, 2, 2, 0, 0, 1, 1, 0, 2, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 2, 2, 1, 0, 2, 2, 0, 1, 0, 0, 1, 2, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 2, 2, 1, 1, 0, 0, 2, 0, 0, 2, 1, 0, 2, 1, 0, 1, 2, 2, 1, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 1, 1, 0, 1, 2, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 0, 1, 2, 1, 1, 2, 2, 1, 0, 1, 1, 1, 1, 0, 2, 0, 1, 2, 2, 0, 2, 0, 2, 1, 1, 0, 1, 0, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 0, 0, 2, 0, 0, 1, 0, 0, 2, 2, 0, 2, 1, 2, 2, 2, 2, 1, 0, 1, 2, 2, 1, 1, 1, 1, 1, 0, 1, 2, 0, 0, 2, 0, 0, 2, 2, 1, 1, 1, 0, 0, 0, 2, 0, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 1, 0, 1, 2, 2, 2, 1, 0, 2, 1, 1, 2, 0, 1, 2, 2, 1, 0, 2, 2, 1, 2, 0, 1, 2, 1, 0, 2, 0, 0, 2, 2, 1, 1, 0, 2, 0, 0, 2, 2, 0, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 0, 1, 0, 1, 1, 0, 2, 1, 0, 1, 0, 0, 2, 0, 0, 1, 2, 0, 2, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 1, 1, 0, 0, 2, 0, 0, 2, 1, 2, 1, 2, 2, 1, 2, 1, 0, 1, 2, 0, 2, 0, 1, 2, 2, 0, 2, 2, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 1, 0, 1, 0, 1, 0, 2, 2, 2, 2, 2, 1, 2, 0, 1, 2, 2, 1, 0, 1, 2, 0, 1, 1, 0, 1, 2, 0, 1, 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 1, 1, 1, 2, 0, 2, 0, 2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 0, 0, 1, 2, 1, 2, 0, 0, 2, 0, 0, 2, 1, 1, 1, 2, 0, 1, 2, 0, 1, 1, 0, 1, 1, 2, 0, 2, 2, 0, 1, 2, 2, 2, 0, 1, 2, 0, 2, 2, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 2, 1, 0, 2, 0, 1, 1, 1, 0, 2, 0, 0, 1, 0, 2, 2, 1, 0, 0, 1, 1, 0, 1, 2, 1, 1, 2, 2, 2, 0, 1, 0, 2, 2, 2, 1, 1, 2, 2, 0, 1, 2, 0, 0, 1, 1, 2, 0, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 0, 1, 1, 2, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 2, 1, 2, 2, 2, 0, 0, 1, 2, 0, 0, 2, 1, 1, 2, 0, 0, 2, 1, 1, 0, 0, 1, 2, 2, 0, 1, 2, 0, 1, 0, 2, 2, 1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 1, 0, 2, 2, 1, 2, 1, 1, 1, 0, 2, 2, 1, 1, 2, 2, 0, 2, 1, 2, 2, 2, 1, 1, 2, 1, 0, 0, 1, 1, 0, 2, 1, 0, 2, 2, 2, 2, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 2, 1, 0, 2, 1, 0, 0, 2, 0, 2, 2, 1, 2, 0, 2, 1, 2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 1, 0, 1, 2, 1, 1, 0, 2, 1, 0, 1, 2, 2, 2, 1, 1, 2, 0, 1, 1, 2, 1, 2, 0, 2, 1, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 0, 2, 1, 0, 0, 0, 1, 2, 0, 0, 2, 1, 2, 0, 2, 1, 2, 0, 1, 1, 2, 0, 0, 1, 1, 0, 0, 2, 0, 1, 2, 1, 1, 0, 1, 0, 2, 2, 2, 2, 1, 2, 0, 2, 1, 2, 2, 1, 1, 1, 0, 1, 2, 2, 1, 2, 0, 0, 0, 2, 1, 1, 1, 0, 2, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, 1, 1, 2, 0, 1, 0, 0, 2, 2, 1, 0, 0, 0, 2, 2, 0, 2, 1, 1, 0, 1, 1, 2, 1, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 2, 0, 1, 2, 1, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 0, 0, 1, 1, 2, 2, 1, 0, 1, 2, 0, 2, 0, 1, 2, 2, 1, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 2, 2, 0, 1, 2, 2, 1, 0, 1, 2, 1, 0, 2, 2, 2, 2, 0, 1, 0, 2, 0, 0, 0, 1, 1, 2, 2, 2, 0, 2, 2, 2, 0, 2, 1, 0, 2, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 2, 0, 1, 2, 1, 2, 1, 2, 2, 0, 2, 0, 1, 1, 0, 2, 2, 2, 2, 1, 0, 1, 0, 0, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 0, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 2, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 2, 2, 0, 2, 1, 2, 1, 2, 2, 1, 0, 1, 0, 2, 2, 0, 2, 2, 1, 1, 0, 0, 1, 1, 0, 2, 2, 2, 0, 1, 0, 1, 0, 0, 1, 0, 2, 1, 2, 2, 0, 0, 2, 0, 0, 2, 0, 2, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 2, 2, 1, 1, 2, 1, 2, 0, 2, 1, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, 1, 2, 0, 2, 2, 2, 0, 1, 0, 0, 2, 2, 1, 1, 2, 1, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 1, 0, 2, 0, 0, 2, 1, 2, 0, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1, 1, 0, 0, 1, 2, 0, 2, 0, 2, 0, 2, 2, 0, 1, 2, 1, 2, 0, 2, 2, 1, 2, 1, 0, 0, 1, 2, 1, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 2, 2, 0, 1, 0, 0, 2, 1, 1, 1, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 2, 0, 2, 1, 0, 0, 1, 2, 2, 1, 0, 2, 2, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 2, 1, 0, 2, 2, 0, 2, 1, 1, 0, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 0, 2, 2, 2, 1, 1, 1, 0, 2, 1, 2, 1, 0, 1, 1, 0, 0, 0, 2, 1, 2, 2, 1, 1, 2, 0, 1, 0, 2, 0, 0, 2, 2, 1, 0, 2, 1, 2, 0, 2, 2, 2, 2, 0, 0, 0, 1, 0, 2, 1, 1, 0, 2, 1, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 0, 1, 0, 1, 2, 2, 1, 1, 1, 0, 0, 0, 1, 2, 2, 1, 2, 2, 0, 2, 2, 1, 0, 0, 2, 0, 1, 1, 2, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 0, 0, 0, 2, 0, 2, 1, 2, 0, 1, 1, 1, 0, 0, 2, 2, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 2, 2, 1, 2, 1, 1, 1, 0, 1, 0, 0, 2, 0, 1, 1, 2, 2, 2, 1, 1, 0, 1, 2, 2, 2, 0, 2, 2, 0, 1, 1, 1, 1, 1, 2, 0, 0, 2, 2, 2, 0, 0, 0, 1, 1, 2, 0, 2, 1, 0, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 2, 2, 2, 1, 2, 0, 0, 2, 1, 1, 0, 1, 0, 2, 0, 1, 2, 2, 0, 0, 0, 2, 0, 1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1, 1, 0, 2, 2, 0, 1, 2, 1, 1, 0, 1, 1, 2, 1, 2, 2, 1, 0, 2, 0, 2, 1, 0, 0, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2, 1, 1, 2, 1, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 2, 1, 1, 2, 0, 2, 1, 1, 1, 2, 1, 2, 1, 2, 0, 1, 2, 2, 2, 1, 2, 2, 1, 1, 2, 0, 2, 1, 0, 1, 2, 1, 1, 0, 2, 1, 2, 0, 1, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 2, 2, 0, 2, 1, 0, 0, 1, 1, 2, 2, 2, 0, 1, 1, 0, 1, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 0, 1, 0, 2, 2, 0, 1, 1, 1, 1, 0, 0, 2, 1, 2, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 1, 2, 1, 0, 1, 1, 2, 1, 1, 0, 0, 2, 2, 2, 0, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 2, 1, 2, 1, 0, 2, 0, 0, 1, 2, 2, 1, 2, 1, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 2, 2, 1, 2, 0, 2, 1, 0, 0, 0, 2, 2, 2, 0, 1, 2, 1, 1, 0, 1, 2, 1, 0, 0, 0, 2, 0, 0, 1, 2, 2, 0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 2, 2, 2, 0, 2, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 2, 1, 2, 2, 2, 1, 0, 1, 0, 2, 2, 0, 0, 0, 1, 2, 0, 2, 2, 1, 1, 1, 0, 2, 2, 0, 2, 2, 0, 1, 2, 2, 0, 1, 1, 1, 1, 2, 2, 0, 2, 2, 2, 2, 1, 1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 2, 1, 2, 0, 1, 0, 2, 1, 2, 2, 2, 2, 0, 2, 1, 0, 2, 0, 2, 0, 2, 2, 0, 0, 2, 0, 2, 1, 2, 2, 0, 0, 1, 2, 0, 1, 1, 2, 0, 0, 2, 0, 1, 0, 0, 2, 0, 1, 2, 2, 1, 0, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 2, 0, 2, 2, 2, 2, 1, 0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 2, 1, 1, 2, 1, 1, 0, 1, 0, 1, 1, 2, 0, 2, 1, 0, 0, 0, 2, 0, 2, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 2, 1, 0, 1, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 1, 1, 0, 1, 1, 0, 2, 0, 2, 2, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 2, 1, 0, 1, 2, 1, 2, 2, 0, 1, 0, 1, 2, 0, 1, 1, 2, 0, 0, 2, 0, 2, 0, 0, 1, 2, 2, 2, 0, 0, 2, 0, 1, 1, 2, 2, 0, 0, 2, 1, 1, 0, 1, 1, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 1, 2, 1, 2, 0, 2, 1, 1, 1, 0, 2, 0, 0, 2, 2, 2, 2, 2, 1, 2, 0, 2, 1, 1, 2, 2, 2, 0, 0, 1, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 0, 1, 0, 0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 2, 1, 2, 1, 0, 1, 2, 2, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 1, 1, 2, 1, 2, 1, 0, 1, 1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 1, 0, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 1, 0, 0, 2, 2, 1, 2, 0, 0, 0, 0, 2, 1, 0, 1, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 0, 2, 2, 1, 2, 1, 2, 2, 2, 0, 0, 0, 1, 1, 0, 2, 1, 0, 1, 1, 2, 1, 0, 2, 1, 0, 1, 0, 0, 2, 2, 1, 2, 1, 0, 1, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 1, 1, 2, 2, 1, 0, 0, 2, 1, 0, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 0, 1, 1, 1, 2, 0, 2, 0, 0, 1, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2, 1, 2, 1, 1, 0, 2, 2, 2, 1, 2, 2, 0, 0, 0, 0, 2, 0, 1, 1, 2, 1, 1, 1, 2, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2, 1, 0, 2, 0, 2, 0, 1, 2, 2, 0, 1, 1, 2, 1, 2, 0, 2, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 2, 2, 0, 0, 2, 2, 0, 2, 1, 2, 0, 1, 0, 2, 1, 1, 2, 1, 2, 0, 2, 1, 2, 1, 1, 2, 2, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 1, 1, 2, 0, 2, 2, 0, 2, 0, 1, 1, 1, 0, 0, 2, 1, 1, 2, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 1, 2, 2, 2, 2, 2, 0, 1, 0, 2, 2, 1, 1, 2, 2, 2, 1, 0, 2, 2, 2, 2, 1, 0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0, 2, 2, 1, 1, 2, 0, 1, 0, 1, 2, 2, 0, 2, 2, 2, 0, 2, 1, 1, 1, 2, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 1, 1, 2, 2, 1, 0, 0, 2, 0, 1, 2, 0, 0, 1, 2, 1, 1, 2, 2, 1, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 1, 0, 2, 0, 2, 1, 1, 1, 0, 2, 2, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 1, 0, 2, 1, 1, 1, 2, 0, 1, 1, 2, 1, 0, 1, 2, 0, 2, 1, 2, 0, 0, 1, 1, 0, 1, 1, 2, 0, 2, 2, 0, 2, 1, 0, 0, 2, 2, 0, 2, 1, 2, 1, 1, 1, 1, 2, 2, 0, 1, 2, 2, 0, 2, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 0, 2, 2, 0, 1, 1, 0, 2, 1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 0, 2, 2, 1, 1, 1, 0, 2, 0, 2, 0, 2, 1, 2, 2, 1, 2, 1, 0, 1, 1, 2, 1, 2, 2, 1, 0, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 2, 1, 2, 0, 2, 0, 1, 0, 2, 1, 0, 0, 2, 0, 1, 2, 0, 2, 2, 1, 1, 1, 0, 0, 2, 0, 1, 1, 1, 1, 2, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 2, 1, 2, 1, 1, 2, 2, 2, 1, 1, 0, 2, 2, 0, 2, 2, 2, 0, 2, 0, 1, 1, 0, 1, 2, 1, 2, 1, 1, 2, 0, 0, 1, 2, 1, 1, 0, 1, 2, 1, 2, 2, 1, 2, 1, 1, 0, 2, 2, 1, 0, 2, 0, 1, 2, 1, 1, 2, 0, 1, 2, 2, 1, 2, 0, 1, 2, 1, 1, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 0, 1, 1, 0, 0, 1, 0, 1, 2, 2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 0, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 2, 2, 1, 2, 0, 1, 2, 1, 0, 0, 0, 1, 0, 0, 1, 2, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 2, 1, 2, 2, 2, 0, 2, 1, 1, 2, 2, 1, 0, 1, 0, 0, 1, 1, 2, 1, 2, 0, 1, 2, 2, 2, 0, 2, 2, 0, 0, 2, 1, 2, 1, 2, 1, 0, 2, 2, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 1, 2, 0, 1, 1, 2, 1, 0, 1, 2, 0, 2, 2, 2, 1, 2, 2, 1, 1, 2, 0, 2, 1, 1, 0, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 0, 0, 2, 0, 0, 1, 0, 2, 0, 2, 0, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 1, 0, 2, 2, 1, 2, 1, 1, 0, 2, 2, 2, 2, 0, 2, 1, 0, 2, 1, 2, 2, 0, 1, 1, 1, 0, 1, 2, 1, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 1, 1, 0, 2, 1, 0, 0, 2, 1, 0, 1, 0, 0, 1, 1, 1, 1, 2, 0, 1, 0, 1, 1, 2, 2, 2, 0, 0, 2, 1, 1, 1, 2, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 2, 0, 0, 1, 1, 1, 2, 0, 0, 1, 0, 2, 0, 0, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 1, 1, 2, 2, 0, 1, 2, 2, 1, 2, 1, 0, 1, 2, 1, 0, 2, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 1, 1, 2, 1, 0, 2, 1, 0, 1, 2, 1, 1, 1, 1, 2, 2, 0, 2, 1, 1, 1, 1, 2, 0, 0, 1, 1, 2, 1, 2, 0, 2, 1, 0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 1, 0, 0, 2, 0, 1, 0, 2, 0, 1, 2, 1, 1, 1, 1, 2, 0, 2, 0, 2, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 2, 0, 0, 0, 2, 0, 2, 2, 0, 1, 0, 1, 2, 1, 1, 0, 0, 1, 1, 2, 2, 0, 1, 1, 2, 2, 1, 2, 0, 1, 2, 1, 0, 2, 2, 1, 0, 1, 0, 1, 1, 0, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 1, 0, 1, 1, 2, 1, 2, 1, 2, 0, 0, 0, 0, 2, 0, 2, 2, 1, 1, 1, 1, 2, 2, 0, 0, 0, 2, 0, 2, 1, 0, 0, 1, 0, 1, 2, 1, 0, 1, 0, 2, 0, 2, 0, 0, 2, 2, 0, 0, 1, 2, 1, 0, 1, 0, 2, 1, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2, 0, 1, 0, 2, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1, 2, 2, 1, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 2, 2, 1, 2, 2, 2, 0, 0, 2, 1, 1, 2, 1, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 1, 0, 0, 1, 0, 2, 2, 1, 0, 2, 2, 0, 1, 0, 2, 1, 0, 0, 2, 0, 0, 2, 1, 2, 2, 2, 0, 0, 1, 0, 0, 2, 0, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 0, 1, 0, 2, 1, 2, 0, 2, 1, 0, 2, 0, 1, 1, 0, 1, 1, 2, 2, 0, 0, 2, 1, 0, 2, 0, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 0, 2, 1, 2, 2, 1, 0, 2, 0, 0, 1, 0, 2, 0, 1, 1, 1, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 2, 1, 0, 0, 2, 2, 1, 2, 2, 2, 0, 1, 2, 1, 1, 1, 2, 2, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 1, 2, 1, 1, 0, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 2, 0, 2, 1, 1, 1, 0, 0, 0, 2, 1, 0, 2, 1, 0, 2, 0, 2, 2, 0, 0, 0, 0, 2, 1, 1, 1, 0, 1, 2, 2, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 1, 2, 1, 2, 1, 0, 2, 1, 0, 1, 1, 1, 1, 0, 0, 2, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 0, 0, 2, 0, 1, 1, 0, 1, 1, 1, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 1, 1, 2, 1, 0, 1, 2, 0, 1, 1, 0, 1, 1, 0, 2, 2, 1, 0, 1, 1, 0, 0, 0, 2, 2, 2, 1, 0, 2, 0, 1, 0, 2, 2, 1, 2, 0, 0, 1, 2, 1, 0, 1, 0, 1, 2, 2, 2, 2, 1, 2, 1, 0, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 1, 1, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 1, 1, 1, 0, 0, 1, 0, 0, 2, 1, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 1, 1, 1, 2, 0, 1, 1, 0, 1, 2, 0, 1, 2, 0, 2, 2, 2, 1, 0, 2, 2, 2, 1, 0, 0, 2, 2, 2, 0, 2, 0, 2, 1, 1, 0, 1, 0, 0, 1, 2, 1, 1, 2, 1, 1, 0, 2, 0, 0, 1, 1, 0, 2, 1, 2, 1, 1, 1, 2, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 1, 0, 0, 2, 2, 1, 2, 0, 0, 2, 1, 2, 1, 2, 2, 0, 1, 1, 0, 1, 1, 2, 0, 0, 1, 2, 0, 0, 0, 2, 0, 2, 2, 0, 0, 2, 1, 2, 2, 2, 0, 0, 1, 1, 2, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 2, 2, 1, 0, 1, 1, 1, 1, 2, 0, 0, 1, 0, 2, 1, 0, 2, 1, 1, 0, 1, 1, 0, 1, 2, 2, 0, 0, 1, 1, 2, 0, 2, 1, 0, 2, 2, 0, 2, 1, 0, 0, 1, 0, 0, 1, 0, 2, 0, 2, 0, 0, 1, 0, 0, 1, 2, 0, 1, 1, 1, 2, 0, 0, 0, 0, 2, 2, 2, 0, 1, 0, 1, 1, 0, 0, 2, 2, 0, 2, 0, 1, 2, 1, 1, 1, 0, 1, 0, 2, 0, 1, 2, 0, 2, 2, 0, 1, 1, 1, 2, 1, 1, 0, 1, 2, 2, 0, 1, 0, 1, 0, 1, 2, 1, 1, 0, 0, 2, 1, 2, 2, 2, 0, 1, 2, 0, 2, 1, 1, 0, 2, 1, 2, 1, 2, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 1, 0, 0, 0, 1, 0, 2, 2, 1, 0, 1, 1, 0, 2, 2, 1, 0, 2, 2, 1, 1, 0, 0, 0, 1, 2, 2, 1, 2, 0, 2, 0, 1, 0, 2, 2, 0, 0, 2, 0, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 2, 0, 0, 1, 1, 2, 2, 2, 0, 0, 1, 0, 0, 2, 1, 2, 1, 2, 0, 1, 2, 2, 0, 2, 1, 1, 0, 0, 0, 2, 0, 2, 0, 1, 2, 0, 1, 2, 1, 0, 1, 1, 0, 0, 0, 1, 2, 1, 0, 2, 0, 2, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 2, 1, 0, 2, 1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 2, 2, 2, 1, 0, 1, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 2, 1, 0, 2, 2, 2, 2, 2, 0, 1, 0, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0, 0, 2, 2, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 2, 0, 2, 2, 1, 0, 2, 0, 0, 1, 2, 1, 2, 2, 1, 2, 0, 0, 2, 0, 0, 0, 2, 2, 1, 0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 2, 1, 2, 2, 2, 0, 2, 2, 0, 1, 2, 0, 1, 0, 2, 0, 2, 1, 1, 1, 0, 2, 1, 2, 1, 2, 0, 1, 0, 2, 2, 2, 0, 1, 1, 1, 2, 2, 2, 0, 1, 0, 2, 2, 2, 2, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 1, 1, 1, 0, 0, 1, 1, 1, 2, 1, 1, 2, 2, 2, 0, 0, 0, 2, 2, 1, 1, 0, 2, 1, 2, 1, 1, 2, 1, 1, 2, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 2, 1, 2, 0, 2, 2, 1, 1, 1, 2, 2, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 2, 2, 1, 2, 0, 2, 1, 0, 1, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 1, 2, 2, 0, 0, 2, 2, 0, 1, 2, 0, 2, 1, 0, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 0, 1, 1, 0, 0, 1, 0, 2, 2, 0, 1, 2, 1, 0, 2, 2, 0, 1, 0, 2, 2, 1, 1, 0, 2, 1, 1, 2, 2, 1, 2, 2, 1, 0, 1, 2, 0, 1, 1, 1, 0, 2, 0, 0, 2, 2, 0, 2, 1, 0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 2, 2, 1, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 2, 1, 2, 1, 0, 0, 2, 1, 0, 0, 0, 1, 2, 2, 0, 1, 1, 2, 2, 0, 1, 0, 0, 1, 0, 1, 1, 1, 2, 0, 2, 0, 0, 1, 1, 1, 0, 1, 1, 2, 2, 2, 1, 0, 0, 2, 2, 0, 2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1, 0, 2, 1, 0, 1, 1, 0, 2, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 2, 1, 0, 0, 1, 2, 1, 1, 0, 0, 0, 2, 2, 2, 1, 2, 1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1, 2, 1, 0, 0, 1, 0, 2, 2, 2, 0, 1, 1, 0, 1, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 0, 2, 1, 0, 2, 1, 2, 2, 1, 2, 0, 2, 2, 0, 0, 1, 0, 2, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 2, 2, 1, 1, 2, 2, 1, 2, 0, 0, 0, 2, 2, 2, 0, 1, 0, 2, 1, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 2, 1, 2, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 2, 0, 0, 1, 1, 2, 0, 2, 1, 0, 0, 2, 0, 1, 2, 0, 0, 0, 1, 1, 0, 2, 0, 2, 0, 2, 0, 0, 1, 1, 0, 0, 0, 2, 0, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 0, 2, 0, 1, 1, 1, 2, 2, 2, 2, 0, 1, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 2, 2, 1, 1, 1, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 2, 0, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1, 2, 1, 1, 0, 1, 2, 0, 1, 2, 0, 2, 0, 2, 2, 0, 2, 1, 0, 2, 0, 1, 1, 0, 2, 1, 1, 2, 0, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 2, 2, 1, 2, 0, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 1, 2, 2, 1, 1, 2, 1, 0, 1, 2, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 2, 0, 1, 0, 2, 1, 1, 1, 0, 2, 1, 2, 0, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 1, 0, 1, 0, 0, 0, 1, 1, 0, 2, 1, 2, 1, 2, 2, 0, 1, 2, 0, 2, 1, 1, 0, 1, 1, 1, 2, 0, 0, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 1, 1, 0, 1, 1, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 0, 2, 2, 0, 1, 1, 2, 1, 2, 0, 2, 1, 0, 2, 1, 1, 1, 2, 0, 0, 2, 1, 2, 2, 2, 2, 2, 1, 0, 2, 2, 0, 1, 1, 0, 2, 2, 1, 1, 0, 2, 1, 2, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 0, 2, 2, 1, 2, 1, 1, 0, 2, 2, 0, 1, 2, 1, 2, 1, 0, 1, 1, 0, 0, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 0, 2, 0, 1, 0, 0, 1, 2, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 0, 2, 2, 2, 0, 2, 1, 2, 1, 2, 0, 1, 1, 0, 0, 0, 2, 2, 1, 1, 1, 2, 0, 2, 1, 1, 1, 0, 0, 1, 2, 2, 0, 0, 0, 1, 1, 2, 1, 2, 0, 2, 1, 2, 2], 25000000))