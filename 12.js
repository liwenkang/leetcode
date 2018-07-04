var isValid = function (s) {
// "()[]{}"
// "{[]()}()"
    var str = s
    if (str.length % 2 !== 0) {
        return false
    }

    while (str.length > 0) {
        var flag = false
        for (var i = 0; i < str.length; i++) {
            if (str[i] === "(" && str[i + 1] === ")") {
                flag = true
                str = str.slice(0, i) + str.slice(i + 2)
            }
            if (str[i] === "{" && str[i + 1] === "}") {
                flag = true
                str = str.slice(0, i) + str.slice(i + 2)
            }
            if (str[i] === "[" && str[i + 1] === "]") {
                flag = true
                str = str.slice(0, i) + str.slice(i + 2)
            }
        }
        if(flag) {
            continue
        }else {
            break
        }
    }

    if (str.length === 0) {
        log("result:", str)
        return true
    } else {
        log("false", str)
        return false
    }
};