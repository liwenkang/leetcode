const log = console.log.bind(console)

var findSecondMinimumValue = function(root) {
    // todo 只搞了暴力解
    const rootValue = root.val;
    function recursionSecondMin(root) {
        if (root.left === null && root.right === null) {
            // 如果是最后一节了
            if (root.val > rootValue) {
                return root.val;
            }
            return -1;
        }

        const left = recursionSecondMin(root.left);
        const right = recursionSecondMin(root.right);

        if (left === -1) {
            return right;
        } else if (right === -1) {
            return left;
        } else {
            return left < right ? left : right;
        }
    }

    console.log(recursionSecondMin(root))
    return recursionSecondMin(root);
};

findSecondMinimumValue({
    val: 5,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right:{
        val: 5,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
})
