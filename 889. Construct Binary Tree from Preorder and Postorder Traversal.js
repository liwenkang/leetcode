/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var constructFromPrePost = function(pre, post) {
    if (!pre || !pre.length) {
        return null;
    }

    var tree = new TreeNode(pre[0]);

    if (pre.length > 1) {
        var left = pre[1];
        var postIndex = post.indexOf(left);
        var postLeft = post.slice(0, postIndex + 1);
        var postRight = post.slice(postIndex + 1);

        var preLeft = pre.slice(1, postIndex + 2);
        var preRight = pre.slice(postIndex + 2);

        tree.left = constructFromPrePost(preLeft, postLeft);
        tree.right = constructFromPrePost(preRight, postRight);
    }

    return tree
};
console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));

// Output: [1,2,3,4,5,6,7])
