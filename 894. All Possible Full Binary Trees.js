/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var allPossibleFBT = function(N) {
    // 用一个 map 存储
    var map = {};

    function dfs(n) {
        if (n === 1) {
            return [new TreeNode(0)];
        }

        if (map[n]) {
            return map[n];
        }

        let temp = [];
        for (var i = 1; i < n; i += 2) {
            const left = dfs(i);
            const right = dfs(n - i);

            for (var l of left) {
                for (var r of right) {
                    let root = new TreeNode(0);
                    root.left = l;
                    root.right = r;
                    temp.push(root);
                }
            }
        }
        return map[n] = temp;
    }

    console.log(dfs(N));
};

allPossibleFBT(5);
