const log = console.log.bind(console)

/**
 * @param {number[][]} grid
 * @return {number}
 */

var deleteNoNeighbor = function (arr) {
    //          i-1,j
    // i,j-1    i,j         i,j+1
    //          i+1,j
    var strArr = []
    for (var i = 0; i < arr.length; i++) {
        strArr[i] = arr[i].join("")
    }
    // log(strArr)
    // 深度优先搜索
    var out = []
    for (var i = 0; i < arr.length; i++) {
        var count = 0
        var itemTop = [parseInt(arr[i][0]) - 1, parseInt(arr[i][1])].join("")
        var itemRight = [parseInt(arr[i][0]), parseInt(arr[i][1]) + 1].join("")
        var itemBottom = [parseInt(arr[i][0]) + 1, parseInt(arr[i][1])].join("")
        var itemLeft = [parseInt(arr[i][0]), parseInt(arr[i][1]) - 1].join("")
        log("itemTop", itemTop)
        log("itemRight", itemRight)
        log("itemBottom", itemBottom)
        log("itemLeft", itemLeft)
        if (strArr.includes(itemTop)) {
            count++
            // 在 itemTop 的基础上继续搜索, 搜不到就停止
            var itemTop = [parseInt(arr[i][0]) - 2, parseInt(arr[i][1])].join("")
            var itemRight = [parseInt(arr[i][0]) - 1, parseInt(arr[i][1]) + 1].join("")
            var itemBottom = [parseInt(arr[i][0]), parseInt(arr[i][1])].join("")
            var itemLeft = [parseInt(arr[i][0]) - 1, parseInt(arr[i][1]) - 1].join("")
            if(strArr.includes(itemTop)) {
                count++
            }
            if(strArr.includes(itemRight)) {
                count++
            }
            if(strArr.includes(itemBottom)) {
                count++
            }
            if(strArr.includes(itemLeft)) {
                count++
            }
        }
        if (strArr.includes(itemRight)) {
            count++
        }
        if (strArr.includes(itemBottom)) {
            count++
        }
        if (strArr.includes(itemLeft)) {
            count++
        }
        out.push([arr[i], count])
    }
    log(out)
}

deleteNoNeighbor([[0, 2],
    [0, 7],
    [1, 7],
    [1, 8],
    [1, 9],
    [2, 1],
    [2, 2],
    [2, 4],
    [3, 1],
    [3, 4],
    [3, 5],
    [3, 8],
    [3, 10],
    [4, 1],
    [4, 4],
    [4, 5],
    [4, 8],
    [4, 9],
    [4, 10],
    [5, 10],
    [6, 7],
    [6, 8],
    [6, 9],
    [7, 7],
    [7, 8]])

var maxAreaOfIsland = function (grid) {
    var result = []
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                result.push([i, j])
            }
        }
    }

    for (var i = 0; i < result.length; i++) {

    }
    log("result", result)
}

// maxAreaOfIsland([
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ])