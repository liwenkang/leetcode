var log = console.log.bind(console)

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (numRows) {
    var arr = [[1]];
    if(numRows === 0) {
        return [1]
    }
    for (var i = 1; i <= numRows; i++) {
        arr[i] = []
        arr[i][0] = 1
        arr[i][i] = 1
        for (var j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr[numRows]
}