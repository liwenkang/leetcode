/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var getArray = function(root) {
    var result = [];

    function dfs(root) {
        if (!root) return;
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return result.reduce((pre, curr) => pre + curr);
};

var findFrequentTreeSum = function(root) {
    var result = {};

    function dfs(root) {
        if (!root) return;
        var key = getArray(root);
        if (result[key]) {
            result[key]++;
        } else {
            result[key] = 1;
        }
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    var max = 0;
    for (var key in result) {
        if (result[key] > max) {
            max = result[key];
        }
    }

    var array = [];
    for (var key in result) {
        if (result[key] === max) {
            array.push(key);
        }
    }
    return array;
};
