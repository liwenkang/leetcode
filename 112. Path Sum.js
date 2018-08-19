const log = console.log.bind(console)

/*
* Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

 */
var hasPathSum = function (root, sum) {
    if (root) {
        return f(root, sum) || false
    } else {
        return false
    }

    function f(root, sum) {
        if (root) {
            sum -= root.val
            if (sum === 0 && root.left === null && root.right === null) {
                return true
            }
            return f(root.left, sum) || f(root.right, sum)
        }
    }
};

log(hasPathSum({
    val: 1,
    right: {
        val: 2,
        left: null,
        right: null
    },
    left: null
}, 1))

/*
log(hasPathSum({
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            },
        },
        right: null
    },
    right: {
        val: 8,
        left: {
            val: 13,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            },
        },
    },
}, 22))

*/