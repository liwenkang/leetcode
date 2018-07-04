var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * 没搞懂它的意思
 */
var NumArray = function (nums) {
    let sum = 0
    this.sums = nums.reduce((acc, num) => (acc.push(sum += num), acc), [0])
}

NumArray.prototype.sumRange = function (i, j) {
    return this.sums[j + 1] - this.sums[i]
}


func([-2, 0, 3, -5, 2, -1], 2, 3)