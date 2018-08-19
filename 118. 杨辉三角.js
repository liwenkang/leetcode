var log = console.log.bind(console)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    /**
     *
     [
     1  [1],
     2  [1,1],
     3  [1,2,1],
     4  [1,3,3,1],
     5  [1,4,6,4,1],
     6  [1,5,10,10,5,1],
     ]
     *  第 n 行 共 n 个 元素
     *  arr[0] 和 arr[n-1] 都是 1
     *  数组是对称的
     *  如果 n 为 基数,那么 arr[Math.ceil(n/2) - 1] 就是最大值
     *  如果 n 为 偶数,那么 arr[(n/2) - 1] 就是最大值
     */

    var arr = [[1]];
    if(numRows === 0) {
        return []
    }
    for (var i = 1; i <= numRows; i++) {
        arr[i] = []
        arr[i][0] = 1
        arr[i][i] = 1
        for (var j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr.slice(0, arr.length -1)
};
generate(6)