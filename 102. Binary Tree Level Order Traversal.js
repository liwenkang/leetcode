const log = console.log.bind(console)

var flatten = function (array) {
    return [].concat(...array)
}

var levelOrder = function (root) {
    // 一层一层的查找,而且如果下一层还有,就继续查找
    var result = []

    var Queue = [root]

    function traverseRoot(root) {
        if (!root) {
            return
        }
        // 有值
        var arr = []
        if (root.left) {
            arr.push(root.left.val)
            Queue.push(root.left)
        }
        if (root.right) {
            arr.push(root.right.val)
            Queue.push(root.right)
        }

        result.push(arr)

        traverseRoot(Queue.shift())
    }

    traverseRoot(Queue.shift())

    log("result", result)
    var out = []
    var index = 0
    for (var i = 0; i < result.length; i++) {
        if (result[i].length === 1) {
            // 下一次要多加一个
            c
        }
    }

    log("result", result)
}

levelOrder({
    val: 3,
    left: {
        val: 9,
        left: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 6,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        }
    }
})

