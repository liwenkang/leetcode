const log = console.log.bind(console)

var findMode = function (root) {
    // 找出出现次数最多的元素
    var result = []

    function preOrder(root) {
        if (root) {
            result.push(root.val)
            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(root)
    var dict = {}
    for (var i = 0; i < result.length; i++) {
        if (dict[result[i]] === undefined) {
            dict[result[i]] = 1
        } else {
            dict[result[i]]++
        }
    }
    var max = -Infinity

    var out = []
    for(var prop in dict) {
        if(dict[prop] > max) {
            max = dict[prop]
        }
    }
    for(var prop in dict) {
        if(dict[prop]  === max) {
            out.push(parseInt(prop))
        }
    }
    return out
}

findMode({
    val: 2147483647,
    left: null,
    right: null
})