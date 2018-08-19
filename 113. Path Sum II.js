const log = console.log.bind(console)


var sumArr = function (array) {
    return array.reduce((init, value) => init + value, 0)
}

var pathSum = function (root, sum) {
    var result = []

    function f(root, arr = []) {
        if (root) {
            arr.push(root.val)
            if (root.left === null && root.right === null) {
                result.push(arr.slice())
            }
            f(root.left, arr.slice())
            f(root.right, arr.slice())
        }
    }

    f(root)
    return result.filter(value => sumArr(value) === sum)
}

pathSum({
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: null,
    },
    right: {
        val: 8,
        left: {
            val: 13,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 1,
                left: null,
                right: null
            }
        }
    }
}, 22)
