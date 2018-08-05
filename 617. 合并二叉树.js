const log = console.log.bind(console)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    // 遍历两棵树,将相同位置的值相加
    if (t1 === null && t2 === null) {
        return null
    } else if (t1 === null) {
        return t2
    } else if (t2 === null) {
        return t1
    } else {
        t1.val += t2.val
        t1.left = mergeTrees(t1.left, t2.left)
        t1.right = mergeTrees(t1.right, t2.right)
        return t1
    }
}

log(mergeTrees({
        val: 1,
        left: {
            val: 3,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    {
        val: 1,
        left: {
            val: 3,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        }
    }))