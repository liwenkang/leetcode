var convert = function (s, numRows) {
    var arr = []
    for (var i = 0; i < numRows; i++) {
        arr.push([])
    }
    for (var i = 0; i < s.length; i++) {
        if(numRows + (numRows - 2) === 0) {
            return s
        }
        var row = i % (numRows + (numRows - 2))
        var col = parseInt(i / (numRows + (numRows - 2)))
        if (row < numRows) {
            col = (numRows - 1) * col
            arr[row][col] = s[i]
        } else {
            row = (numRows - 1) - ((row + 1) % numRows)
            col = (numRows - 1) - row + (col * (numRows - 1))
            arr[row][col] = s[i]
        }
    }
    var str = ""
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j <= col; j++) {
            if (arr[i][j] !== undefined) {
                str += arr[i][j]
            }
        }
    }
    return str
};