const log = console.log.bind(console)

function insertNode(listNode, val) {
    // 在末尾插入 val
    var newNode = new ListNode(val)
    newNode.next = null
    var changeListNode = listNode
    while (changeListNode.next) {
        changeListNode = changeListNode.next
    }
    changeListNode.next = newNode
    return listNode
}

var arrayToNode = function (ary) {
    if (ary.length === 0) {
        return null
    }
    var node = new ListNode(ary[0])
    node.next = null
    for (var i = 1; i < ary.length; i++) {
        node = insertNode(node, ary[i])
    }
    return node
}

var splitListToParts = function (root, k) {
    var result = []

    let arr = []
    let root1 = JSON.parse(JSON.stringify(root))
    while (root != null) {
        arr.push(root.val)
        root = root.next
    }

    // arr 里存着所有节点的值
    var bigLength = Math.ceil(arr.length / k)
    var smallLength = Math.floor(arr.length / k)
    var big
    var small
    for (var i = k; i >= 0; i--) {
        if (bigLength * i + smallLength * (k - i) === arr.length) {
            big = i
            small = k - i
            break
        }
    }
    var preArr = arr.slice(0, big * bigLength)
    var endArr = arr.slice(big * bigLength)


    for (var i = 0; i * bigLength < preArr.length; i++) {
        result.push(preArr.slice(i * bigLength, (i + 1) * bigLength))
    }

    for (var i = 0; i * smallLength < endArr.length; i++) {
        result.push(endArr.slice(i * smallLength, (i + 1) * smallLength))
    }

    for (var i = 0; i < result.length; i++) {
        result[i] = arrayToNode(result[i])
    }

    while (result.length < k) {
        result.push(null)
    }

    return result
}

log(splitListToParts({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: null
                        }
                    }
                }
            }
        }
    }
}, 10))