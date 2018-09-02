const log = console.log.bind(console)

var findMin = function (nums) {
    var min = Infinity
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            log(nums[i + 1])
            return nums[i + 1]
        }
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    log(min)
}

findMin([1, 2, 3, 4, 5]) // 1
// findMin([4, 5, 6, 7, 0, 1, 2]) //0
// findMin([2, 4, 5, 6, 7, 0, 1]) //0