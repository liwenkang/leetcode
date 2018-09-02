const log = console.log.bind(console)

var rightSideView = function (root) {
    if (!root) {
        return []
    }
    // 一层一层取
    var result = []
    var quene = []
    quene.push(root)

    while (quene.length > 0) {
        var size = quene.length
        var current = []
        for (var i = 0; i < size; i++) {
            var head = quene.shift()
            current.push(head.val)
            if (head.left !== null) {
                quene.push(head.left)
            }
            if (head.right !== null) {
                quene.push(head.right)
            }
        }
        result.push(current)
    }
    var out = []
    for (var i = 0; i < result.length; i++) {
        out.push(result[i][result[i].length - 1])
    }
    return out
}