const log = console.log.bind(console)

var findSecondMinimumValue = function (root) {
    var arr = []

    function preOrder(root) {
        if (root) {
            arr.push(root.val)
            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(root)

    arr = Array.from(new Set(arr)).sort(function (a, b) {
        return a - b
    })

    return arr[1] || -1
}

findSecondMinimumValue({
    val: 2,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right:{
        val: 2,
        left: null,
        right: null
    }
})