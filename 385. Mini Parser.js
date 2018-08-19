const log = console.log.bind(console)

var deserialize = function (s) {
    var i = 0
    var f = function (s) {
        function parseArray(s) {
            var result = new NestedInteger()
            // 解析数组
            i++
            var val

            for (; ;) {
                val = f(s)
                if(val !== "") {
                    result.add(val)
                }
                if (s[i] === ",") {
                    i++
                    continue
                } else if (s[i] === "]") {
                    i++
                    return result
                }
            }
        }

        function parseNumber(s) {
            var j = i
            while ((s[j] >= "0" && s[j] <= "9") || s[j] === "-") {
                j++
            }
            var numString = s.slice(i, j)
            i = j
            var r = parseInt(numString)
            if (!isNaN(r)) {
                return r
            } else {
                return ""
            }
        }

        var c = s[i]
        if (c === "[") {
            // 开始一个对象
            return parseArray(s)
        } else {
            return parseNumber(s)
        }
    }
    return f(s)
}

var s = "[123,456,[788,799,833],[[]],10,[]]"
log(deserialize(s))

