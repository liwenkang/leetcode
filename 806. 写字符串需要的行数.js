const log = console.log.bind(console)

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    var dict = {
        a: widths[0],
        b: widths[1],
        c: widths[2],
        d: widths[3],
        e: widths[4],
        f: widths[5],
        g: widths[6],
        h: widths[7],
        i: widths[8],
        j: widths[9],
        k: widths[10],
        l: widths[11],
        m: widths[12],
        n: widths[13],
        o: widths[14],
        p: widths[15],
        q: widths[16],
        r: widths[17],
        s: widths[18],
        t: widths[19],
        u: widths[20],
        v: widths[21],
        w: widths[22],
        x: widths[23],
        y: widths[24],
        z: widths[25]
    }
    var lineCount = 1
    var singleStrCount = 0
    var lastLineStrCount = 0
    for (var i = 0; i < S.length; i++) {
        singleStrCount += dict[S[i]]
        if (singleStrCount > 100) {
            log("i", i)
            log("S[i]", S[i])
            lineCount++
            singleStrCount = 0
            i--
        }
        if (i === S.length - 1) {
            lastLineStrCount = singleStrCount
        }
    }
    return [lineCount,lastLineStrCount]
    // log("lineCount", lineCount)
    // log("lastLineStrCount", lastLineStrCount)
}

numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa")