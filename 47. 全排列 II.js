const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var deleteRepeteArr = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toString()
    }
    arr = Array.from(new Set(arr))
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",")
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = parseInt(arr[i][j])
        }
    }
    return arr
}

var permuteUnique = function (nums) {
    var length = nums.length
    return perm(length)

    function perm(length) {
        if (length === 1) {
            return [[nums[0]]]
        } else if (length === 2) {
            return deleteRepeteArr([[nums[0], nums[1]], [nums[1], nums[0]]])
        } else {
            // 也就是说超过三个了
            var output = []
            var arr = perm(length - 1)          // 如果 length 是3,我就算2个的全排列,如果 length 是4我就算三个的全排列
            var addNum = nums[length - 1]
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j <= arr[i].length; j++) {
                    var a = arr[i].slice()
                    a.splice(j, 0, addNum)
                    output.push(a)
                }
            }
            return deleteRepeteArr(output)
        }
    }
}


