const log = console.log.bind(console)

var frequencySort = function (s) {
    var dict = {}
    var array = s.split("")

    array.forEach(value => {
        if (dict[value] === undefined) {
            dict[value] = 1
        } else {
            dict[value]++
        }
    })

    var resultArr = []
    for (var key in dict) {
        resultArr.push(key.repeat(dict[key]))
    }

    resultArr.sort(function (a, b) {
        return b.length - a.length
    })
    return resultArr.join("")
}

log(frequencySort("tree"))
log(frequencySort("cccaaa"))
log(frequencySort("Aabb"))