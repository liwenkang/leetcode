const log = console.log.bind(console)

// [
// [1,2],
// [1,3]
// ]
// 3

var kthSmallest = function (matrix, k) {
    return [].concat(...matrix).sort((a, b) => a - b)[k]
}

kthSmallest()