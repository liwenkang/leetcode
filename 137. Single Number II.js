const log = console.log.bind(console)

var singleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    for (var i = 0; i < nums.length; i += 3) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
}