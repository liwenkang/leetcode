const log = console.log.bind(console)

var searchBST = function (root, val) {
    var result = []

    function preOrder(root, val) {
        if (root) {
            if (root.val === val) {
                result.push(root)
            }
            preOrder(root.left, val)
            preOrder(root.right, val)
        }
    }

    preOrder(root, val)

    if (result.length > 0) {
        return result[0]
    } else {
        return []
    }
}

searchBST({
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: null,
        right: null
    }
}, 2)