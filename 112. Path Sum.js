let hasPathSum = function(root, sum) {
    var result = [];

    const dfs = function(root, test) {
        if (root) {
            let temp = [...test, root.val];
            if (!root.left && !root.right) {
                result.push(temp);
            }
            dfs(root.left, temp);
            dfs(root.right, temp);
        }
    };

    dfs(root, []);

    for (var i = 0; i < result.length; i++) {
        var goal = sum;
        for (var j = 0; j < result[i].length; j++) {
            goal -= result[i][j];
        }
        if (goal === 0) {
            return true;
        }
    }
    return false;
};

hasPathSum({
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
            }
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
            }
        }
    },
}, 22);
