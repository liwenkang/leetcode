const log = console.log.bind(console)
/*
var longestUnivaluePath = function(root) {
    let longestPath = 0
    function path(root) {
        let leftLength = 0
        let rightLength = 0
        if(root.left) {
            if(root.left.val === root.val) {
                leftLength = path(root.left) + 1
            }else{
                path(root.left)
            }
        }
        if(root.right) {
            if(root.right.val === root.val) {
                rightLength = path(root.right) + 1
            }else {
                path(root.right)
            }
        }
        longestPath = Math.max(longestPath, leftLength + rightLength)
        return Math.max(leftLength, rightLength)
    }
    if(!root) return 0
    path(root)
    log(longestPath)
    return longestPath
};
*/
var longestUnivaluePath = function (root) {
    var max = 0
    var helper = function (root) {
        var left = 0
        var right = 0
        if (root.left) {
            if (root.left.val === root.val) {
                left = helper(root.left) + 1
            } else {
                helper(root.left)
            }
        }

        if (root.right) {
            if (root.right.val === root.val) {
                right = helper(root.right) + 1
            } else {
                helper(root.right)
            }
        }

        max = Math.max(left + right, max)
        return Math.max(left, right)
    }
    if (!root) {
        return 0
    }
    helper(root)
    return max
}

longestUnivaluePath({
    val: 5,
    left: {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
})
//

longestUnivaluePath({
    val: 1,
    left: {
        val: 4,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
})

longestUnivaluePath({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 2,
            left: {
                val: 2,
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
    right: {
        val: 2,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        }
    }
})
