const log = console.log.bind(console)

var countNodes = function(root) {
    var count = 0
    var helper = function(root){
        if(root) {
            count++
            helper(root.left)
            helper(root.right)
        }
    }
    helper(root)
    return count
};