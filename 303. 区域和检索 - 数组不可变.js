const log = console.log.bind(console)

// 还有点懵逼
var NumArray = function (nums) {
    // 现在 sumRange 已经写好了
    this.sums = []
    var sums = this.sums
    if (nums.length > 0) {
        sums[0] = nums[0]
        for (var i = 1; i < nums.length; i++) {
            sums[i] = sums[i - 1] + nums[i]
        }
    }
};

NumArray.prototype.sumRange = function (i, j) {
    var sums = this.sums
    if (i === 0) {
        return sums[j]
    } else {
        return sums[j] - sums[i - 1]
    }
};