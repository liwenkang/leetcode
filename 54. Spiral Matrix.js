const log = console.log.bind(console)

// Input:
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9,10,11,12]
//     ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return []
    }
    var result = []
    if (matrix[0].length === 1) {
        for (var i = 0; i < matrix.length; i++) {
            result = result.concat(matrix[i][0])
        }
        return result
    }

    var i = 0, j = 0
    var flag = 0
    var count = 0
    while (result.length < matrix.length * matrix[0].length) {
        result.push(matrix[i][j])
        if (flag === 0) {
            // 向右
            j++
            if (j >= matrix[0].length - 1 - count) {
                flag = 1
            }
        } else if (flag === 1) {
            // 向下
            i++
            if (i >= matrix.length - 1 - count) {
                flag = 2
            }
        } else if (flag === 2) {
            // 向左
            j--
            if (j >= count) {
                flag = 3
            }
        } else if (flag === 3) {
            // 向上
            i--
            if (i >= count + 1) {
                flag = 0
                count++
            }
        }
    }
    return result
}

// spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ])
//
// spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])
//
// spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ])

spiralOrder([
    [3],
    [2]
])