const log = console.log.bind(console)

var reverseWords = function (str) {
    var result = str.split(/\s+/).reverse().join(" ")
    while (result[0] === " ") {
        result = result.slice(1)
    }
    while (result[result.length - 1] === " ") {
        result = result.slice(0, result.length - 1)
    }
    return result
};

log(reverseWords("the    sky is blue"))
log(reverseWords("a b "))