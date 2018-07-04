const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })


    var repeatNum = 0
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                repeatNum = nums[i]
                nums.splice(i, 1)
            }
        }
    }

    var missNum = 0
    if (nums.length === 1 && nums[0] === 1) {
        return [1, 2]
    }
    log("nums",nums)
    for (var m = 0; m < nums.length; m++) {
        if (nums[m] !== (m + 1)) {
            missNum = m + 1
            break
        }
        if (m === nums.length - 1) {
            missNum = nums[nums.length - 1] + 1
        }
    }
    log([repeatNum, missNum])
    return [repeatNum, missNum]
}

findErrorNums([1, 2, 2, 4])