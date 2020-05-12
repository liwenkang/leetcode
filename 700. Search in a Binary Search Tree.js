var searchBST = function (root, val) {
    // 找到哪个节点之后的
    var result = null;
    function traverse(root) {
        if (root) {
            if (root.val === val) {
                result = root;
            }
            traverse(root.left);
            traverse(root.right);
        }
    }
    traverse(root)
    return result
};
