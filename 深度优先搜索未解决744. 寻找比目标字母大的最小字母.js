const log = console.log.bind(console)

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            // log(letters[i])
            return letters[i]
        }
    }
    // log(letters[0])
    return letters[0]
}

log(nextGreatestLetter(["c", "f", "j"],"a")==="c")
log(nextGreatestLetter(["c", "f", "j"],"c")==="f")
log(nextGreatestLetter(["c", "f", "j"],"d")==="f")
log(nextGreatestLetter(["c", "f", "j"],"g")==="j")
log(nextGreatestLetter(["c", "f", "j"],"j")==="c")
log(nextGreatestLetter(["c", "f", "j"],"k")==="c")