const log = console.log.bind(console)

var removeNthFromEnd = function (head, n) {
    var oldHead = JSON.parse(JSON.stringify(head))

    var length = 0
    while (oldHead) {
        length++
        oldHead = oldHead.next
    }

    if (length === 1 && n === 1) {
        return []
    }

    var index = length - n

    log(index)

    if (index === 0) {
        return head.next
    } else if (index + 1 === length) {
        var cur = head
        while (index > 1) {
            cur = cur.next
            index--
        }
        cur.next = null
        return head
    } else if (index > 0) {
        var cur = head
        while (index > 1) {
            cur = cur.next
            index--
        }
        cur.next = cur.next.next
        return head
    }
}

log(removeNthFromEnd({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}, 2))