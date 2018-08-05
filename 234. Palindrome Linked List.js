const log = console.log.bind(console)

var isPalindrome = function (head) {
    var arr = []
    while (head !== null) {
        arr.push(head.val)
        head = head.next
    }
    var newArr = arr.slice()
    if (arr.reverse().toString() === newArr.toString()) {
        return true
    } else {
        return false
    }
}

isPalindrome({
    val: 3,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
})