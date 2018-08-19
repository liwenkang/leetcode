const log = console.log.bind(console)

function RandomListNode(label) {
    this.label = label
    this.next = this.random = null
}

var copyRandomList = function (head) {

}

log(copyRandomList({
    val: 1,
    next: {
        val: 2,
        next: null
    }
}))