var leafSimilar = function (root1, root2) {
    // 获得一颗树最后的元素,并加入到数组中

    var result1 = []
    var result2 = []

    function getArr1(root) {
        if (root) {
            if (root.left === null && root.right === null) {
                result1.push(root.val)
            }
            getArr1(root.left)
            getArr1(root.right)
            return result1
        } else {
            return
        }
    }

    function getArr2(root) {
        if (root) {
            if (root.left === null && root.right === null) {
                result2.push(root.val)
            }
            getArr2(root.left)
            getArr2(root.right)
            return result2
        } else {
            return
        }
    }

    var result1 = getArr1(root1)
    var result2 = getArr2(root2)
    return result1.toString() === result2.toString()
};