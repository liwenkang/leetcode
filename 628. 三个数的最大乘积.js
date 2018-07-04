const log = console.log.bind(console)

var maximumProduct = function (nums) {
    nums.sort(function (a, b) {
        return b - a
    })

    if (nums[2] > 0 && nums[nums.length - 2] < 0) {
        var num1 = nums[0] * nums[1] * nums[2]
        var num2 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
        return Math.max(num1, num2)
    } else if (nums[2] > 0 && nums[nums.length - 2] >= 0) {
        return nums[0] * nums[1] * nums[2]
    }

    var positiveArr = []
    var zeroArr = []
    var negativeArr = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveArr.push(nums[i])
        } else if (nums[i] === 0) {
            zeroArr.push(0)
        } else {
            negativeArr.push(nums[i])
        }
    }
    if (positiveArr.length === 2) {
        if (negativeArr.length >= 2) {
            // log(positiveArr[0] * negativeArr[negativeArr.length - 1] * negativeArr[negativeArr.length - 2])
            return positiveArr[0] * negativeArr[negativeArr.length - 1] * negativeArr[negativeArr.length - 2]
        } else {
            // log(0)
            return 0
        }
    } else if (positiveArr.length === 1) {
        if (negativeArr.length >= 2) {
            // log(positiveArr[0] * negativeArr[negativeArr.length - 1] * negativeArr[negativeArr.length - 2])
            return positiveArr[0] * negativeArr[negativeArr.length - 1] * negativeArr[negativeArr.length - 2]
        } else {
            // log(0)
            return 0
        }
    } else if (positiveArr.length === 0) {
        if (zeroArr.length > 0) {
            // log(0)
            return 0
        } else {
            // log(negativeArr[0] * negativeArr[1] * negativeArr[2])
            return negativeArr[0] * negativeArr[1] * negativeArr[2]
        }
    }
}