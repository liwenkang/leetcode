const log = console.log.bind(console)

var findShortestSubArray = function (nums) {
    // 算出的是最大重复次数
    var dict = {}
    var maxNum = 0
    var str = ""
    for (var i = 0; i < nums.length; i++) {
        if (dict[nums[i]] === undefined) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]]++
        }
    }

    Object.keys(dict).forEach(function (key) {
        if (dict[key] > maxNum) {
            maxNum = dict[key]
            str = key
        }
    })
    var result = []
    Object.keys(dict).forEach(function (key) {
        if (dict[key] === maxNum) {
            result.push(key)
        }
    })

    // log("result", result)
    var minWidth = Infinity
    for (var i = 0; i < result.length; i++) {
        var startNum = nums.indexOf(parseInt(result[i]))
        var endNum = nums.lastIndexOf(parseInt(result[i]))
        if (endNum - startNum < minWidth) {
            minWidth = endNum - startNum
        }
    }
    return minWidth + 1
};