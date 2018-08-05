const log = console.log.bind(console)

var isSymmetric = function (root) {

    var oldRoot = JSON.parse(JSON.stringify(root))

    function invertTree(root) {
        if (!root) {
            return null
        }
        var tmp = root.left
        root.left = root.right
        root.right = tmp
        invertTree(root.left)
        invertTree(root.right)
        return root
    }

    var newRoot = invertTree(root)

    // 判断两个数是否相等

    var arr1 = []
    var arr2 = []

    function preOrder1(root) {
        if (root) {
            arr1.push(root.val)
            preOrder1(root.left)
            preOrder1(root.right)
        } else {
            arr1.push(null)
        }
    }

    function preOrder2(root) {
        if (root) {
            arr2.push(root.val)
            preOrder2(root.left)
            preOrder2(root.right)
        } else {
            arr2.push(null)
        }
    }

    preOrder1(oldRoot)
    preOrder2(newRoot)

    return arr1.toString() === arr2.toString()
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
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
})