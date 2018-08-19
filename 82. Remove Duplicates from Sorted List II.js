const log = console.log.bind(console)

function ListNode(val) {
    this.val = val
    this.next = null
}

var insertNode = function (listNode, val) {
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

var deleteDuplicates = function (head) {
    var result = []
    while (head != null) {
        result.push(head.val)
        head = head.next
    }
    for (var i = 0; i < result.length; i++) {
        var flag = false
        for (var j = i + 1; j < result.length; j++) {
            if (result[i] === result[j]) {
                flag = true
                result.splice(j, 1)
                j--
            } else {
                break
            }
        }
        if (flag) {
            result.splice(i, 1)
            i--
        }
    }

    return result
}

log(deleteDuplicates({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        }
    }
}))