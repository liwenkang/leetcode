const log = console.log.bind(console)

var compress = function (chars) {
    for (var i = 0; i < chars.length - 1; i++) {
        if (chars[i] === chars[i + 1]) {
            var str = chars[i]
            var count = 1
            for (var j = i + 1; j < chars.length; j++) {
                if (str === chars[j]) {
                    count++
                } else {
                    break
                }
            }
            // var addLength = count.toString().length
            chars.splice(i + 1, count - 1, ...count.toString().split(""))
            // 删掉 count - 1 个, 添加了 addLength 个
            // 一共删掉了 count - 1 - addLength 个
            i += 1
        }
    }
    log(chars)
    return chars
}
//
compress(["a", "a", "b", "b", "c", "c", "c"])
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b","a","a","a","a","a","a"])
compress(["p", "p", "p", "p", "m", "m", "b", "b", "b", "b", "b", "u", "u", "r", "r", "u", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "u", "u", "u", "u", "a", "a", "u", "u", "r", "r", "r", "s", "s", "a", "a", "y", "y", "y", "g", "g", "g", "g", "g"])