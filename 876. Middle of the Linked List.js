const log = console.log.bind(console)

var middleNode = function (head) {
    var cur = JSON.parse(JSON.stringify(head))

    var length = 0
    while (cur) {
        length++
        cur = cur.next
    }
    var index = Math.floor(length / 2)

    while (index > 0) {
        head = head.next
        index--
    }
    return head
}

middleNode({
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
})