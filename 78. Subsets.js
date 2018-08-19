const log = console.log.bind(console)

/*
* Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

function judgeArray(array, insertArray) {
    var str = insertArray.join(",")
    var tmpArray = []
    for (var i = 0; i < array.length; i++) {
        tmpArray.push(array[i].slice().toString())
    }
    return tmpArray.includes(str)
}

var subsets = function (nums) {
    var result = []

    function getArray(nums) {
        // nums.length 个循环
        for (var i = 0; i < nums.length; i++) {
            var end = nums.slice(0, i).concat(nums.slice(i + 1))
            if (!judgeArray(result, end)) {
                result.push(end)
                getArray(end)
            }
        }
    }

    getArray(nums)
    for (var i = 0; i < nums.length; i++) {
        if (!judgeArray(result, [nums[i]])) {
            result.push([nums[i]])
        }
    }
    if (!judgeArray(result, nums)) {
        result.push(nums)
    }
    return result
}

log(subsets([1, 2, 3, 4]))

// [[4,4,1,4],[4,1,4],[1,4],[4],[],[1],[4,4],[4,1],[4,4,4],[4,4,1],,[4,4,4,1],[4,4,4,1,4]]
// [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],]


