const log = console.log.bind(console)

var levelOrderBottom = function (root) {
    var result = []
    var dfs = function (node, depth = 0) {
        if (node) {
            if (result.length <= depth) {
                result.push([])
            }
            result[depth].push(node.val)
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)
        }
    }
    dfs(root)
    return result.reverse()
}

levelOrderBottom({
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 20,
            left: {
                val: 15,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    }
)