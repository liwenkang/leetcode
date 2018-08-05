var trimBST = function (root, L, R) {
    //
    while(root) {
        if(root.val > R){
            root = root.left
        }else if(root.val < L) {
            root = root.right
        }else {
            break
        }
    }

    if(root === null || root === undefined) {
        return root
    }

    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;

};