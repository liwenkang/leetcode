var log = console.log.bind(console)
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var dict = {
    "]":"[",
    ")":"(",
    "}":"{"
}
var isValid = function(s) {
    var arr = []
    for(var i = 0; i < s.length; i++) {
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            arr.push(s[i])
        }else {
            var temp = arr.pop()
            if(temp !== dict[s[i]]) {
                return false
            }
        }
    }
    log(arr.length === 0)
    return arr.length === 0
};
isValid("((){})")
isValid("()")