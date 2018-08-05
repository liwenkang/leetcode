const log = console.log.bind(console)

var insertionSortList = function (head) {

    var oldHead = JSON.parse(JSON.stringify(head))

    var length = 0
    while (oldHead) {
        length++
        oldHead = oldHead.next
    }

    while (length > 0) {
        var cur = head
        while (cur.next) {
            if (cur.val > cur.next.val) {
                var tmp = cur.val
                cur.val = cur.next.val
                cur.next.val = tmp
            }
            cur = cur.next
        }
        length--
    }

    return head
}

insertionSortList({
    val: 4,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 3,
                next: null
            }
        }
    }
})