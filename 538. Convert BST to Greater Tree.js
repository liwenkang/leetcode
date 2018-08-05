const log = console.log.bind(console)


var getPlusNum = function (value, array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > value) {
            sum += array[i]
        }
    }
    return value + sum
}

var convertBST = function (root) {
    var result = []

    function getArr(root) {
        if (root) {
            result.push(root.val)
            getArr(root.left)
            getArr(root.right)
        }
    }

    getArr(root)

    function plusNum(root) {
        if (root) {
            root.val = getPlusNum(root.val, result)
            plusNum(root.left)
            plusNum(root.right)
        }
    }
    plusNum(root)
    return root
}

convertBST({
    val: 5,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 13,
        left: null,
        right: null
    }
})