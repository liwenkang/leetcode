const log = console.log.bind(console)

var deleteOne = function (grid, i, j) {
    if (grid[i - 1] && grid[i - 1][j] === "1") {
        grid[i - 1][j] = "0"
        deleteOne(grid.slice(), i-1, j)
    }
    if (grid[i + 1] && grid[i + 1][j] === "1") {
        grid[i + 1][j] = "0"
        deleteOne(grid.slice(), i + 1, j)
    }
    if (grid[i][j - 1] === "1") {
        grid[i][j - 1] = "0"
        deleteOne(grid.slice(), i, j - 1)
    }
    if (grid[i][j + 1] === "1") {
        grid[i][j + 1] = "0"
        deleteOne(grid.slice(), i, j + 1)
    }
    return grid
}

var numIslands = function (grid) {
    var count = 0
    do {
        var bigFlag = false
        for (var i = 0; i < grid.length; i++) {
            var flag = false
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    flag = true
                    bigFlag = true
                    count++
                    grid[i][j] = "0"
                    grid = deleteOne(grid, i, j)
                    break
                }
            }
            if (flag === true) {
                break
            }
        }
        log(grid)
    } while (bigFlag === true)
    log(count)
    return count
}

// numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ])
//
// numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ])

numIslands([
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"]
])

/*
* Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/