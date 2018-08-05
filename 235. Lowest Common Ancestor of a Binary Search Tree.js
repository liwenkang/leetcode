const log = console.log.bind(console)

// 判题有问题
var lowestCommonAncestor = function (root, p, q) {
    // 当 root.val 位于 p.val 和 q.val 之间的时候,说明 root 符合要求
    while ((root.val - p.val) * (root.val - q.val) > 0) {
        if (p.val < root.val) {
            // 减少 root 的 的值
            root = root.left
        } else {
            // 加大 root 的 的值
            root = root.right
        }
    }
    return root
}

lowestCommonAncestor({
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            },
        },
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        },
    },
}, 2, 4)