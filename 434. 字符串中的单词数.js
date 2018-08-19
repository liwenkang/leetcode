const log = console.log.bind(console)

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    if (s === "") {
        return 0
    }
    var arr = s.split(" ")
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            count++
        }
    }
    return count
}

countSegments("love")