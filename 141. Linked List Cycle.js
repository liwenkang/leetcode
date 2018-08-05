const log = console.log.bind(console)

// 神特么的快慢指针...

var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false
    }
    var slowHead = head
    var fastHead = head
    while (fastHead && fastHead.next) {
        slowHead = slowHead.next
        fastHead = fastHead.next.next
        if (slowHead === fastHead) {
            return true
        }
    }
    return false
}

hasCycle({
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