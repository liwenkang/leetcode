const log = console.log.bind(console)

/**
 * 不生效
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    for (var i = 0; i < intervals.length - 1; i++) {
        var maxLeft = Math.min(intervals[i][0], intervals[i + 1][0])
        var maxRight = Math.max(intervals[i][1], intervals[i + 1][1])

        if (intervals[i][1] >= intervals[i + 1][0]) {
            if (maxLeft === intervals[i][0] && maxRight === intervals[i][1]) {
                // 把后面的合并掉
                intervals.splice(i + 1, 1)
                i--
            } else if (maxLeft === intervals[i + 1][0] && maxRight === intervals[i + 1][1]) {
                // 把前面合并掉
                intervals.splice(i, 1)
                i--
            } else if (maxLeft === intervals[i][0] && maxRight === intervals[i + 1][1]) {
                intervals[i] = [maxLeft, maxRight]
                intervals.splice(i + 1, 1)
                i--
            } else if (maxLeft === intervals[i + 1][0] && maxRight === intervals[i][1]) {
                intervals[i] = [maxLeft, maxRight]
                intervals.splice(i + 1, 1)
                i--
            }
        }
    }
    return intervals
}

log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))