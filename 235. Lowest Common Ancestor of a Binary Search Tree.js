const log = console.log.bind(console);

// 神奇题目
var lowestCommonAncestor = function(root, p, q) {
    while ((root.val - p) * (root.val - q) > 0) {
        // 说明不在范围内
        if (p.val < root.val) {
            root = root.left
        } else {
            root = root.right
        }
    }
    return root
};

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
}, 2, 8);
