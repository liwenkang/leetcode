/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var result = [];

    function traverse(root) {
        if (root) {
            var array = root.children;
            if (array) {
                for (var i = 0; i < array.length; i++) {
                    traverse(array[i]);
                }
            }
            result.push(root.val);
        }
    }

    traverse(root);
    return result;
};
