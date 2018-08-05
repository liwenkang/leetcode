const log = console.log.bind(console)

function getArr(root) {
    var arr = []

    function preOrder(root) {
        if (root) {
            arr.push(root.val)
            preOrder(root.left)
            preOrder(root.right)
        } else {
            arr.push(null)
        }
    }

    preOrder(root)
    return arr.toString()
}

var isSubtree = function (s, t) {
    // 判断 t 是否是 s 的子树
    var arr = []
    var tArr = getArr(t)

    function preOrder(root) {
        if (root) {
            if (getArr(root) === tArr) {
                arr.push(true)
            }
            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(s)
    if (arr.length > 0) {
        return arr[0]
    } else {
        return false
    }
}
//
isSubtree({
        val: 3,
        left: {
            val: 4,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            },
        },
        right: {
            val: 5,
            left: null,
            right: null
        },
    },
    {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        },
    }
)