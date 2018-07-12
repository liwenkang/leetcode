var log = console.log.bind(console)

var find = function (ary, start, end) {
    if (start === end) {
        if (ary[start] > 0) {
            return ary[start]
        } else {
            return 0
        }
    }

    if (start > end) {
        log("返回了", leftMax)
        log("返回了", rightMax)
        log("返回了", crossMax)
        return 0
    }

    var mid = parseInt(start + (start + end) / 2)

    var leftMax = find(ary, start, mid)
    var rightMax = find(ary, mid + 1, end)


    var crossLeftMax = 0
    var crossLeft = 0

    for (var i = mid; i >= start; i--) {
        crossLeft += ary[i]
        if (crossLeft > crossLeftMax) {
            crossLeftMax = crossLeft
        }
    }

    var crossRightMax = 0
    var crossRight = 0

    for (var j = mid + 1; j <= end; j++) {
        crossRight += ary[j]
        if (crossRight > crossRightMax) {
            crossRightMax = crossRight
        }
    }

    var crossMax = crossLeftMax + crossRightMax
    log("返回了2", leftMax)
    log("返回了2", rightMax)
    log("返回了2", crossMax)
    return Math.max(leftMax, rightMax, crossMax)
}

find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9)
