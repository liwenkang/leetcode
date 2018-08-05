const log = console.log.bind(console)

var sumOfLeftLeaves = function (root) {
    var arr = []

    function getArr(root) {
        if (root) {
            if (root.left) {
                if (root.left.left === null && root.left.right === null) {
                    arr.push(root.left.val)
                }
            }
            getArr(root.left)
            getArr(root.right)
        }
    }

    getArr(root)

    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

sumOfLeftLeaves({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        },
    }
})