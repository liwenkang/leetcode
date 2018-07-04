const log = console.log.bind(console)

/**
 * @param {number[][]} M
 * @return {number[][]}
 * 神特么判题系统
 */
var imageSmoother = function (M) {
    // i 是竖着的 j 是横着的
    var arr = []
    for (var i = 0; i < M.length; i++) {
        arr.push([])
    }

    for (var i = 0; i < M.length; i++) {
        for (var j = 0; j < M[0].length; j++) {
            var couldPlus = 0
            var count = 0
            if (M[i - 1] !== undefined && M[i - 1][j - 1] !== undefined) {
                couldPlus++
                count += M[i - 1][j - 1]
            }
            if (M[i] !== undefined && M[i][j - 1] !== undefined) {
                couldPlus++
                count += M[i][j - 1]
            }
            if (M[i + 1] !== undefined && M[i + 1][j - 1] !== undefined) {
                couldPlus++
                count += M[i + 1][j - 1]
                if (i === 4 && j === 1) {
                    log("count", count)
                    log("couldPlus", couldPlus + 1)
                }
            }

            if (M[i - 1] !== undefined && M[i - 1][j] !== undefined) {
                couldPlus++
                count += M[i - 1][j]
                if (i === 4 && j === 1) {
                    log("count", count)
                    log("couldPlus", couldPlus + 1)
                }
            }
            if (M[i + 1] !== undefined && M[i + 1][j] !== undefined) {
                couldPlus++
                count += M[i + 1][j]
                if (i === 4 && j === 1) {
                    log("count", count)
                    log("couldPlus", couldPlus + 1)
                }
            }

            if (M[i - 1] !== undefined && M[i - 1][j + 1] !== undefined) {
                couldPlus++
                count += M[i - 1][j + 1]
                if (i === 4 && j === 1) {
                    log("count", count)
                    log("couldPlus", couldPlus + 1)
                }
            }
            if (M[i] !== undefined && M[i][j + 1] !== undefined) {
                couldPlus++
                count += M[i][j + 1]
                if (i === 4 && j === 1) {
                    log("count", count)
                    log("couldPlus", couldPlus + 1)
                }
            }
            if (M[i + 1] !== undefined && M[i + 1][j + 1] !== undefined) {
                couldPlus++
                count += M[i + 1][j + 1]
                if (i === 4 && j === 1) {
                    log("count", count)
                    log("couldPlus", couldPlus + 1)
                }
            }
            count += M[i][j]

            var item = Math.floor(count / (couldPlus + 1))
            arr[i][j] = item
        }
    }
    log(arr)
}

imageSmoother([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]])