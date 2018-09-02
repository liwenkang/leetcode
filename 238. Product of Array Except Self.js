const log = console.log.bind(console)

var productExceptSelf = function (nums) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        var count = 1
        for (var j = 0; j < nums.length; j++) {
            if (j !== i) {
                count *= nums[j]
            }
        }
        result.push(count)
    }
    return result
}

productExceptSelf([1, 2, 3, 4])

// Output: [24,12,8,6])