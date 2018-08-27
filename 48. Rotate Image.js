const log = console.log.bind(console)
/*
* Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/
var rotate = function (matrix) {
    var arr = []
    for (var i = 0; i < matrix.length; i++) {
        arr.push([])
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            arr[i][j] = matrix[matrix.length - 1 - j][i]
        }
    }
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix.length; j++) {
            matrix[i][j] = arr[i][j]
        }
    }
}

rotate([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
])