const log = console.log.bind(console)

var averageOfLevels = function (root) {
    var info = []
    var dfs = function (node, depth = 0) {
        if (node) {
            if (info.length <= depth) {
                info.push([0, 0])
            }
            info[depth][0] += node.val
            info[depth][1] += 1
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)
        }
    }
    dfs(root)

    for (var i = 0; i < info.length; i++) {
        info[i] = info[i][0] / info[i][1]
    }
    return info
}

averageOfLevels({
    val: 3,
    left: {
        val: 9,
        left: {
            val: 15,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            },
        },
        right: {
            val: 7,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            },
        }
    },
    right: {
        val: 20,
        left: {
            val: 3,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 6,
                left: null,
                right: null
            },
        },
        right: {
            val: 4,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            },
        }
    }
})