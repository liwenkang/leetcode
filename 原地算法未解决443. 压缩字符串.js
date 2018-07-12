const log = console.log.bind(console)

// 需要原地修改数组???

var compress = function (chars) {
    var noReapet = Array.from(new Set(chars))
    var result = []
    for (var i = 0; i < noReapet.length; i++) {
        var count = 0
        for (var j = 0; j < chars.length; j++) {
            if (noReapet[i] === chars[j]) {
                count++
            }
        }
        result.push(count)
    }

    var arr = []
    for (var i = 0; i < noReapet.length; i++) {
        arr.push(noReapet[i], result[i])
    }
    log(arr.join("").split(""))
    return arr.join("").split("")
}

compress(["a", "a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"])