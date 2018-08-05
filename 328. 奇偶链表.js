const log = console.log.bind(console)

var oddEvenList = function (head) {
    if (head === null) {
        return null
    }
    var odd = head, even = head.next, evenHead = even
    while (even != null && even.next != null) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }
    log("head",head)
    log("odd",odd)
    odd.next = evenHead
    log("odd",odd)
    log("head",head)
    // return head
}

oddEvenList({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
})