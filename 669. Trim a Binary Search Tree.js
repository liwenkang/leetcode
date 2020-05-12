var trimBST = function(root, L, R) {
    // 删掉不符合范围的枝叶
    if (root === null) {
        return null
    } else if (root.val < L) {
        return trimBST(root.right, L, R)
    } else if (root.val > R) {
        return trimBST(root.left, L, R)
    } else {
        root.left = trimBST(root.left, L, R)
        root.right = trimBST(root.right, L, R)
        return root
    }
};

trimBST({
    val: 1,
    left: {
        val: 0,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}, 1, 2);
