var maxDistToClosest = function (seats) {
    var maxWidth = 0
    var result = []
    var notResult = []
    // 首先算出哪些位置可以坐
    for (var i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            result.push(i)
        } else {
            notResult.push(i)
        }
    }
    if (notResult.length >= 2) {
        var continuousDiff = 0
        for (var i = 1; i < notResult.length; i++) {
            if (notResult[i] - notResult[i - 1] > continuousDiff) {
                continuousDiff = notResult[i] - notResult[i - 1]
                var max = notResult[i]
                var min = notResult[i - 1]
            }
        }
        var output = 0
        for (var i = 0; i < result.length; i++) {
            if (result[i] < max && result[i] > min) {
                var width = Math.min(max - result[i], result[i] - min)
                if (width > maxWidth) {
                    maxWidth = width
                }
            }
        }


        if (notResult[0] > maxWidth) {
            maxWidth = notResult[0]
        }

        if (seats.length - 1 - notResult[notResult.length - 1] > maxWidth) {
            maxWidth = seats.length - 1 - notResult[notResult.length - 1]
        }


    }
    if (notResult.length === 1) {
        if (notResult[0] > seats.length - 1 - notResult[0]) {
            maxWidth = notResult[0]
        } else {
            maxWidth = seats.length - 1 - notResult[0]
        }
    }
    return maxWidth
};