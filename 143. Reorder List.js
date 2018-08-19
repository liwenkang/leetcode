const log = console.log.bind(console)

var reorderList = function (head) {

}

log(reorderList({
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
}))