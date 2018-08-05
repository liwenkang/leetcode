const log = console.log.bind(console)

var numComponents = function (head, G) {
    // 看下 G 中的数组,有多少可以分组,是在 head 中连着的
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    var out = 0

    var result = []
    for (var i = 0; i < G.length; i++) {
        result.push(arr.indexOf(G[i]))
    }
    result.sort(function (a, b) {
        return a - b
    })

    // 如果有连着的就删掉前面的,有不连的就 out + 1
    for (var i = 0; i < result.length; i++) {
        if (result[i + 1] - result[i] === 1) {
            // 相连的
            result.splice(i, 1)
            i--
        } else {
            out++
        }
    }
    return out
}

numComponents({
    val: 0,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: null
                }
            }
        }
    }
}, [0, 3, 1, 4])