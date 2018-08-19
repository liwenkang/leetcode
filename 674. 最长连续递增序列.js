const log = console.log.bind(console)

var judgeSort = function (arr) {
    // 判断数组是否是连续递增的
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            // log(false)
            return false
        }
    }
    // log(true)
    return true
}

var findLengthOfLCIS = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    var result = []
    var maxLength = 0
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j <= nums.length; j++) {
            var arr = nums.slice(i, i + j)
            if (judgeSort(arr)) {
                if(arr.length > maxLength) {
                    maxLength = arr.length
                }
            } else {
                break
            }
        }
    }
    return maxLength
};