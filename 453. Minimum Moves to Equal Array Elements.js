const log = console.log.bind(console)

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// [1,2,2]
// [1,1,2]
// [1,1,1]

var minMoves = function (nums) {
    var min = Math.min(...nums)
    var count = 0
    for (var i = 1; i < nums.length; i++) {
        count += nums[i] - min
    }
    return count
}

minMoves([1,1,2147483647])
minMoves([5, 6, 8, 8, 5])
// 5,5,6,8,8
// 1 + 3 + 3