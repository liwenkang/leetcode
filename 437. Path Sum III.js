const log = console.log.bind(console);

var pathSum = function(root, sum) {
    // todo 这个有点迷

    var result = 0;

    function traverse(root, curr) {
        // 从头往下搜索，看看能不能把 sum 变成 0
        if (root) {
            curr += root.val;
            if (curr === sum) {
                result++;
            }
            traverse(root.left, curr);
            traverse(root.right, curr);

            traverse(root.left, sum);
            traverse(root.right, sum);
        }
    }

    traverse(root, 0);
    console.log(result);
};

pathSum({
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
}, 8);
