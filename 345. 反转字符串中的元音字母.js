var log = console.log.bind(console)
var reverseVowels = function (s) {
    var str = s
    var vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    var indexArr = []
    var array = []
    for (var i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            indexArr.push(i)
            array.push(str[i])
        }
    }

    var reverseArray = array.reverse()
    for (var j = 0; j < indexArr.length; j++) {
        str = str.slice(0, indexArr[j]).concat(reverseArray[j]).concat(str.slice(indexArr[j] + 1))
    }
    return str
}