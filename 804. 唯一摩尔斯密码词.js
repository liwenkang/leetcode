const log = console.log.bind(console)

/**
 * @param {string[]} words
 * @return {number}
 */

var strToMorse = function (str) {
    var dict = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--.."
    }
    var arr = str.split("")
    for (var i = 0; i < arr.length; i++) {
        arr[i] = dict[arr[i]]
    }
    return arr.join("")
}

var uniqueMorseRepresentations = function (words) {
    var result = []
    for(var i = 0; i < words.length; i++) {
        result.push(strToMorse(words[i]))
    }
    result = Array.from(new Set(result))
    return result.length
}

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])