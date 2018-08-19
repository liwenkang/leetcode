const log = console.log.bind(console)

var pathSumFrom = function (node, sum) {
    if (node === null) return 0
    return (node.val === sum ? 1 : 0)
        + pathSumFrom(node.left, sum - node.val) + pathSumFrom(node.right, sum - node.val)
}

var pathSum = function (root, sum) {
    if (root === null) return 0
    return pathSumFrom(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}


log(pathSum({
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: -2,
                left: null,
                right: null
            }
        },
        right: {
            val: 2,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            }
        },
    },
    right: {
        val: -3,
        left: null,
        right: {
            val: 11,
            left: null,
            right: null
        }
    }
}, 8))