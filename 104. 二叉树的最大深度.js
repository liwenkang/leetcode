var maxDepth = function(root) {
    if(root === null) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};