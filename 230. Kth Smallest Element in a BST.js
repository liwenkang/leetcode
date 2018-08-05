const log = console.log.bind(console)

var kthSmallest = function(root, k) {
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

    return arr[k-1]
};