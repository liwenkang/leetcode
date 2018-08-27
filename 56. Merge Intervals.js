const log = console.log.bind(console)
/*
* Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
* */
var merge = function (intervals) {
    for (var i = 1; i < intervals.length; i++) {
        var maxLeft = Math.min(intervals[i - 1][0], intervals[i][0])
        var maxRight = Math.max(intervals[i - 1][1], intervals[i][1])
        if (intervals[i - 1][1] >= intervals[i][0]) {
            // 可以合并
            intervals[i - 1] = [maxLeft, maxRight]
            intervals.splice(i, 1)
            i--
        }
    }
    return intervals
}
log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
log(merge([[1, 4], [4, 5]]))