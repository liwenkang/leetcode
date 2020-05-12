var isSymmetric = function(root) {
    // 递归
    function isMirror(left,right){
        if(!left && !right) return true;
        if(!left || !right) return false;
        if (left.val === right.val) {
            if (isMirror(left.right, right.left)) {
                if (isMirror(left.left, right.right)) {
                    return true
                }
            }
        }
        return false
    }

    console.log(isMirror(root, root))
}


/*
    1
   / \
  2   2
 / \ / \
3  4 4  3
*/
isSymmetric({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
});
