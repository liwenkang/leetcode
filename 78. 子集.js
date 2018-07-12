const log = console.log.bind(console)


var getArr = function (start, end, lastArr, nums) {
    var result = []
    if (lastArr.length === 0) {
        for (var i = start; i < end; i++) {
            result.push([nums[i]])
        }
    } else {
        for (var i = 0; i < lastArr.length; i++) {
            for (var j = start; j < end; j++) {
                if (!lastArr[i].includes(nums[j]) && nums[j] > lastArr[i][lastArr[i].length - 1]) {
                    var arr = lastArr[i].concat(nums[j])
                    result.push(arr)
                }
            }
        }
    }
    return result
}

var subsets = function (nums) {
    var result = []
    var temp = []
    for (var i = 0; i < nums.length; i++) {
        temp = getArr(0, nums.length, temp, nums)
        result = result.concat(temp)
    }
    result.unshift([])
    return result
}

subsets([1, 2, 3])