const log = console.log.bind(console)

function isEmpty(value) {

    var x = Number(0)
    log("这里", value.length)
    log("这里", x.length)
    log(x === value)
    log(x === 0)
    log(value === 0)

    if (value.length != null || value.size != null) {
        log("here1")
        return value.length == 0 || value.size == 0
    } else if (typeof value == "object" && value == value) {
        log("here2")
        return Object.keys(value).length == 0
    } else {
        log("here3")
        return true
    }
}

log(isEmpty(0))