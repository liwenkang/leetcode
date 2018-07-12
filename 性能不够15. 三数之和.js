const log = console.log.bind(console)

var deleteRepeteArr = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",")
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = Number(arr[i][j])
        }
    }
    return arr
}

var sortArr = function (arr) {
    return arr.sort(function (a, b) {
        return a - b
    })
}

var threeSum = function (nums) {
    var result = new Set()
    nums = sortArr(nums)
    for (var i = 0; nums[i] < 0; i++) {
        var a = nums[i]
        for (var j = nums.length - 1; nums[j] > 0; j--) {
            var b = nums[j]
            for (var k = i + 1; k < j; k++) {
                var c = nums[k]
                if ((a + b + c) === 0) {
                    result.add(sortArr([a, b, c]).toString())
                }
            }
        }
    }
    log(deleteRepeteArr(Array.from(result)))
    return deleteRepeteArr(Array.from(result))
}

threeSum([-1, 0, 1, 2, -1, -4])