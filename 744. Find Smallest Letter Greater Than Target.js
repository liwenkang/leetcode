const log = console.log.bind(console)
/*
* Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"
*/
var nextGreatestLetter = function (letters, target) {
    var targetNum = target.charCodeAt()
    var arr = []
    for (var i = 0; i < letters.length; i++) {
        arr.push(letters[i].charCodeAt())
    }
    log("arr",arr)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > targetNum) {
            log(String.fromCharCode(arr[i]))
            return String.fromCharCode(arr[i])
        }
    }
    return letters[0]
}

nextGreatestLetter(["c", "f", "j"], "a")