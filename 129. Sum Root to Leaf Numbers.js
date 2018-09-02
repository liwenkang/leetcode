const log = console.log.bind(console)

var sumArr = function (array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            result += array[i][j] * Math.pow(10, array[i].length - 1 - j)
        }
    }
    return result
}

var sumNumbers = function (root) {
    var result = []

    function helper(root, arr = []) {
        if (root) {
            arr.push(root.val)
            if (root.left === null && root.right === null) {
                result.push(arr.slice())
            }
            helper(root.left, arr.slice())
            helper(root.right, arr.slice())
        }
    }

    helper(root)
    return sumArr(result)
}

sumNumbers({
    val: 4,
    left: {
        val: 9,
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
    },
    right: {
        val: 0,
        left: null,
        right: null
    }
})