/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    function dfs(root) {
        if (!root) return [0, 0];
        // 都是递归搜索
        let left = dfs(root.left);
        let right = dfs(root.right);
        //
        let moveup = root.val + left[0] + right[0] - 1;
        let moveTotal = Math.abs(moveup) + Math.abs(left[1]) + Math.abs(right[1]);
        return [moveup, moveTotal];
    }

    let ret = dfs(root);
    return ret[1];
};

distributeCoins({
    val: 3,
    left: {
        val: 0,
        left: null,
        right: null
    },
    right: {
        val: 0,
        left: null,
        right: null
    }
});
