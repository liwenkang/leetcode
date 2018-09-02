const log = console.log.bind(console)

var inorderTraversal = function(root) {
    var result = []
    var helper = function(root){
        if(root) {
            helper(root.left)
            result.push(root.val)
            helper(root.right)
        }
    }
    helper(root)
    return result
};