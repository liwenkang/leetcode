const log = console.log.bind(console)

var transpose = function (A) {
    var row = A.length
    var col = A[0].length

    var result = []
    for (var i = 0; i < col; i++) {
        var tmp = []
        for (var j = 0; j < row; j++) {
            tmp.push(A[j][i])
        }
        result.push(tmp)
    }
    return result
}


transpose([[1,2,3],[4,5,6]])
transpose([[1,2,3],[4,5,6],[7,8,9]])