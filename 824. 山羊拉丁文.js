const log = console.log.bind(console)
/**
 * @param {string} S
 * @return {string}
 */
var generateA = function (num) {
    var str = "a"
    for (var i = 0; i < num; i++) {
        str += "a"
    }
    return str
}

var toGoatLatin = function (S) {
    var arr = S.split(" ")
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0].toLowerCase() === "a" ||
            arr[i][0].toLowerCase() === "e" ||
            arr[i][0].toLowerCase() === "i" ||
            arr[i][0].toLowerCase() === "o" ||
            arr[i][0].toLowerCase() === "u") {
            arr[i] = arr[i] + "ma" + generateA(i)
        } else {
            arr[i] = arr[i].slice(1) + arr[i].slice(0, 1) + "ma" + generateA(i)
        }
    }
    // log(arr.join(" "))
    return arr.join(" ")
}

log(toGoatLatin("I speak Goat Latin") === "Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
log(toGoatLatin("The quick brown fox jumped over the lazy dog") === "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa")