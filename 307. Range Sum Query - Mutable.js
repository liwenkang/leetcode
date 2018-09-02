const log = console.log.bind(console)

// Given nums = [1, 3, 5]
//
// sumRange(0, 2) -> 9
// update(1, 2)
// sumRange(0, 2) -> 8

var NumArray = function (nums) {
    this.nums = nums
}

NumArray.prototype.update = function (i, val) {
    this.nums[i] = val
}

NumArray.prototype.sumRange = function (i, j) {
    var count = 0
    for (var index = i; index <= j; index++) {
        count += this.nums[index]
    }
    return count
}